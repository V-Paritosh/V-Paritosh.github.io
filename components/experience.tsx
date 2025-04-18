"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpFromLine,
  ArrowDownFromLine,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import AnimatedSection from "./animated-section";
import { ReactNode } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "contract" | "internship" | "education";
  description: string[];
  technologies: string[];
  year: number;
  icon: ReactNode;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Diploma",
    company: "Schaumburg High School",
    location: "Schaumburg, IL",
    period: "Aug 2022 - May 2026",
    type: "education",
    description: ["High School Diploma", "Weighted GPA: 4.7/5.0"],
    technologies: [""],
    year: 2022,
    icon: <GraduationCap size={20} />,
  },
  {
    id: 2,
    title: "Co-Director & Web Developer",
    company: "Code211",
    location: "Schaumburg, IL",
    period: "Oct 2023 - Present",
    type: "full-time",
    description: [
      "Revived a 5‐year dormant Hackathon with a team of 6 within District 211",
      "Organized a 100‐participant Hackathon through District 211 that provided students with an opportunity to win $14.3k worth of prizes and showcase their talents",
      "Interviewed 2 new student sponsors, currently mentoring 1 younger student sponsor, and created the website for the second straight year with an increasing Google ranking",
      "Optimized the website hosted on GitHub Pages with strong SEO practices to improve ranking",
    ],
    technologies: ["Bootstrap", "Netlify"],
    year: 2023,
    icon: <Code size={20} />,
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "ICEG",
    location: "Remote",
    period: "Jan 2025 - Present",
    type: "contract",
    description: [
      "Built a responsive and user‐friendly website for a non‐profit organization using Next.js with server‐side rendering",
      "Designed and optimized UI/UX to increase visitor engagement and facilitate community outreach",
      "Discussed with the founders on their preferences to create a tailored website",
    ],
    technologies: ["Next.js", "TailwindCSS", "SMTP"],
    year: 2025,
    icon: <Code size={20} />,
  },
];

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [sortedExperiences, setSortedExperiences] = useState<Experience[]>([]);

  // Cache month lookup once outside the function (not recreated on every call)
  const MONTHS: Record<string, number> = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  const parseDate = (dateStr: string): Date => {
    if (!dateStr || dateStr.toLowerCase().includes("present")) {
      return new Date(); // assume current date for ongoing
    }
    const [monthStr, yearStr] = dateStr.split(" ");
    const month =
      MONTHS[monthStr.slice(0, 3).toLowerCase() as keyof typeof MONTHS];
    return new Date(parseInt(yearStr), month ?? 0, 1);
  };

  useEffect(() => {
    const sorted = [...experiences].sort((a, b) => {
      const [aStart, aEnd] = a.period.split(" - ");
      const [bStart, bEnd] = b.period.split(" - ");

      const startA = parseDate(aStart);
      const startB = parseDate(bStart);

      if (startB.getTime() !== startA.getTime()) {
        return startB.getTime() - startA.getTime();
      }

      // If start dates are same, prioritize ongoing
      const isAOngoing = !aEnd || aEnd.toLowerCase().includes("present");
      const isBOngoing = !bEnd || bEnd.toLowerCase().includes("present");

      if (isAOngoing !== isBOngoing) {
        return isBOngoing ? 1 : -1;
      }

      return 0;
    });

    console.log(
      "Sorted experiences:",
      sorted.map((e) => e.title)
    );

    setSortedExperiences(sorted);
  }, [experiences]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection type="fade-slide" direction="up" duration={0.3}>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
              My <span className="text-blue-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 rounded mb-8"></div>
            <p className="text-gray-300 text-center max-w-2xl font-poppins font-light">
              My professional journey through various roles in security
              research, artificial intelligence, and software development.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400/30"></div>

            {/* Experience Items */}
            <div className="space-y-32">
              {sortedExperiences.map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  type="fade-slide"
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.1}
                  threshold={0.1}
                  duration={0.3}
                >
                  <div className="relative flex items-start">
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 w-16 h-16 bg-gray-900 border-2 border-blue-400 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center text-blue-400">
                      {exp.icon}
                    </div>

                    {/* Year/Period marker - positioned on opposite side from content */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "left-[55%]" : "right-[55%]"
                      } mt-5 text-sm font-medium text-blue-400`}
                    >
                      {exp.period}
                    </div>

                    {/* Content */}
                    <div
                      className={`w-6/12 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto"
                      }`}
                    >
                      <div
                        className={`bg-[#111827] border border-gray-800 rounded-lg p-6 hover:border-blue-400/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10 ${
                          expandedIds.includes(exp.id)
                            ? "border-blue-400/50 shadow-lg shadow-blue-900/10"
                            : ""
                        } relative ${index % 2 === 0 ? "mr-6" : "ml-6"}`}
                        onClick={() => toggleExpand(exp.id)}
                      >
                        {/* Triangle connector */}
                        <div
                          className={`absolute top-6 w-0 h-0 border-solid ${
                            index % 2 === 0
                              ? "right-[-10px] border-l-[10px] border-l-[#111827] border-y-transparent border-y-[10px] border-r-0"
                              : "left-[-10px] border-r-[10px] border-r-[#111827] border-y-transparent border-y-[10px] border-l-0"
                          }`}
                        ></div>

                        <div
                          className={`flex flex-col ${
                            index % 2 === 0 ? "items-end" : "items-start"
                          }`}
                        >
                          <div
                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                              exp.type === "full-time"
                                ? "bg-blue-500/10 text-blue-400"
                                : exp.type === "contract"
                                ? "bg-purple-500/10 text-purple-400"
                                : exp.type === "education"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : "bg-green-500/10 text-green-400"
                            }`}
                          >
                            {exp.type.charAt(0).toUpperCase() +
                              exp.type.slice(1)}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-blue-300 font-medium mb-2">
                            {exp.company} • {exp.location}
                          </h4>

                          {expandedIds.includes(exp.id) && (
                            <>
                              {exp.type === "education" ? (
                                // Custom styling for education
                                <p className="text-gray-300 text-sm">
                                  {Array.isArray(exp.description) ? (
                                    exp.description.map((item, i) => (
                                      <li
                                        key={i}
                                        className={`text-gray-400 text-sm flex items-start ${
                                          index % 2 === 0 ? "justify-end" : ""
                                        }`}
                                      >
                                        {index % 2 === 0 ? (
                                          <span>{item}</span>
                                        ) : null}
                                        <span className="text-blue-400 mx-2">
                                          •
                                        </span>
                                        {index % 2 !== 0 ? (
                                          <span>{item}</span>
                                        ) : null}
                                      </li>
                                    ))
                                  ) : (
                                    <li>{exp.description}</li>
                                  )}
                                </p>
                              ) : (
                                // Default styling
                                <>
                                  <div
                                    className={`mt-4 space-y-2 ${
                                      index % 2 === 0
                                        ? "text-right"
                                        : "text-left"
                                    }`}
                                  >
                                    <h5 className="text-sm font-medium text-gray-300 mb-2">
                                      Responsibilities:
                                    </h5>
                                    <ul className="space-y-2">
                                      {Array.isArray(exp.description) ? (
                                        exp.description.map((item, i) => (
                                          <li
                                            key={i}
                                            className={`text-gray-400 text-sm flex items-start ${
                                              index % 2 === 0
                                                ? "justify-end"
                                                : ""
                                            }`}
                                          >
                                            {index % 2 === 0 ? (
                                              <span>{item}</span>
                                            ) : null}
                                            <span className="text-blue-400 mx-2">
                                              •
                                            </span>
                                            {index % 2 !== 0 ? (
                                              <span>{item}</span>
                                            ) : null}
                                          </li>
                                        ))
                                      ) : (
                                        <li>{exp.description}</li>
                                      )}
                                    </ul>
                                  </div>

                                  <div className="mt-4">
                                    <h5
                                      className={`text-sm font-medium text-gray-300 mb-2 ${
                                        index % 2 === 0
                                          ? "text-right"
                                          : "text-left"
                                      }`}
                                    >
                                      Technologies:
                                    </h5>
                                    <div
                                      className={`flex flex-wrap gap-2 ${
                                        index % 2 === 0 ? "justify-end" : ""
                                      }`}
                                    >
                                      {"technologies" in exp &&
                                        Array.isArray(exp.technologies) &&
                                        exp.technologies.map((tech, i) => (
                                          <span
                                            key={i}
                                            className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                    </div>
                                  </div>
                                </>
                              )}

                              <button
                                className="mt-4 text-blue-400 text-sm flex items-center hover:text-blue-300 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpand(exp.id);
                                }}
                              >
                                {expandedIds.includes(exp.id)
                                  ? "Show Less"
                                  : "Show More"}
                                <ArrowUpFromLine size={14} className="ml-1" />
                              </button>
                            </>
                          )}

                          {!expandedIds.includes(exp.id) && (
                            <button
                              className="mt-2 text-blue-400 text-sm flex items-center hover:text-blue-300 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(exp.id);
                              }}
                            >
                              Show More
                              <ArrowDownFromLine size={14} className="ml-1" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-400/30"></div>

            {/* Experience Items */}
            <div className="space-y-16">
              {/* Using the same sorted experiences array */}
              {sortedExperiences.map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  type="fade-slide"
                  direction={index % 1 === 0 ? "right" : "left"}
                  delay={0.1}
                  threshold={0.1}
                  duration={0.3}
                >
                  <div className="relative flex items-start ml-6">
                    {/* Timeline Node */}
                    <div className="absolute left-0 transform -translate-x-1/2 w-12 h-12 bg-gray-900 border-2 border-blue-400 rounded-full z-10 flex items-center justify-center text-blue-400">
                      {exp.icon}
                    </div>

                    {/* Content */}
                    <div className="ml-10 w-full">
                      <div
                        className={`bg-[#111827] border border-gray-800 rounded-lg p-5 hover:border-blue-400/30 transition-all duration-300 cursor-pointer ${
                          expandedIds.includes(exp.id)
                            ? "border-blue-400/50 shadow-lg shadow-blue-900/10"
                            : ""
                        } relative`}
                        onClick={() => toggleExpand(exp.id)}
                      >
                        {/* Triangle connector */}
                        <div className="absolute top-4 left-[-10px] w-0 h-0 border-solid border-r-[10px] border-r-[#111827] border-y-transparent border-y-[10px] border-l-0"></div>

                        <div
                          className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                            exp.type === "full-time"
                              ? "bg-blue-500/10 text-blue-400"
                              : exp.type === "contract"
                              ? "bg-purple-500/10 text-purple-400"
                              : exp.type === "education"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-green-500/10 text-green-400"
                          }`}
                        >
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-blue-300 font-medium mb-2">
                          {exp.company} • {exp.location}
                        </h4>
                        <p className="text-blue-400 text-sm mb-3">
                          {exp.period}
                        </p>

                        {expandedIds.includes(exp.id) && (
                          <>
                            {exp.type === "education" ? (
                              // Custom styling for education
                              <p className="text-gray-300 text-sm">
                                {Array.isArray(exp.description) ? (
                                  exp.description.map((item, i) => (
                                    <li
                                      key={i}
                                      className={`text-gray-400 text-sm flex items-start ${
                                        index % 2 === 0 ? "justify-end" : ""
                                      }`}
                                    >
                                      {index % 2 === 0 ? (
                                        <span>{item}</span>
                                      ) : null}
                                      <span className="text-blue-400 mx-2">
                                        •
                                      </span>
                                      {index % 2 !== 0 ? (
                                        <span>{item}</span>
                                      ) : null}
                                    </li>
                                  ))
                                ) : (
                                  <li>{exp.description}</li>
                                )}
                              </p>
                            ) : (
                              // Default styling
                              <>
                                <div className="mt-4 space-y-2">
                                  <h5 className="text-sm font-medium text-gray-300 mb-2">
                                    Responsibilities:
                                  </h5>
                                  <ul className="space-y-2">
                                    {Array.isArray(exp.description) ? (
                                      exp.description.map((item, i) => (
                                        <li
                                          key={i}
                                          className="text-gray-400 text-sm flex items-start"
                                        >
                                          <span className="text-blue-400 mr-2">
                                            •
                                          </span>
                                          <span>{item}</span>
                                        </li>
                                      ))
                                    ) : (
                                      <li>{exp.description}</li>
                                    )}
                                  </ul>
                                </div>

                                <div className="mt-4">
                                  <h5 className="text-sm font-medium text-gray-300 mb-2">
                                    Technologies:
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {"technologies" in exp &&
                                      Array.isArray(exp.technologies) &&
                                      exp.technologies.map((tech, i) => (
                                        <span
                                          key={i}
                                          className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                  </div>
                                </div>
                              </>
                            )}

                            <button
                              className="mt-4 text-blue-400 text-sm flex items-center hover:text-blue-300 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(exp.id);
                              }}
                            >
                              {expandedIds.includes(exp.id)
                                ? "Show Less"
                                : "Show More"}
                              <ArrowUpFromLine size={14} className="ml-1" />
                            </button>
                          </>
                        )}

                        {!expandedIds.includes(exp.id) && (
                          <button
                            className="mt-2 text-blue-400 text-sm flex items-center hover:text-blue-300 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(exp.id);
                            }}
                          >
                            Show More
                            <ArrowDownFromLine size={14} className="ml-1" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
