"use client"

import { useState } from "react"
import {
  ArrowUpFromLine,
  ArrowDownFromLine,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import AnimatedSection from "./animated-section"
import { ReactNode } from "react"

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "contract" | "internship";
  description: string[];
  technologies: string[];
  year: number;
  icon: ReactNode;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Security Researcher",
    company: "CyberDefense Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    type: "full-time",
    description: [
      "Lead a team of security researchers investigating zero-day vulnerabilities in enterprise systems",
      "Developed automated security scanning tools that increased vulnerability detection by 40%",
      "Published 3 research papers on AI-based security threat detection",
      "Collaborated with product teams to implement security-by-design principles",
    ],
    technologies: ["Penetration Testing", "Python", "Machine Learning", "Threat Modeling", "SAST/DAST"],
    year: 2022,
    icon: <Code size={20} />,
  },
  {
    id: 2,
    title: "AI Research Scientist",
    company: "TechInnovate Labs",
    location: "Boston, MA",
    period: "Mar 2020 - Dec 2021",
    type: "full-time",
    description: [
      "Researched and developed privacy-preserving machine learning techniques",
      "Created a novel federated learning framework for secure distributed AI training",
      "Reduced model training time by 35% while maintaining privacy guarantees",
      "Presented research findings at 4 international conferences",
    ],
    technologies: ["TensorFlow", "PyTorch", "Federated Learning", "Differential Privacy", "Python"],
    year: 2020,
    icon: <Briefcase size={20} />,
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "WebSolutions",
    location: "Remote",
    period: "Jun 2018 - Feb 2020",
    type: "full-time",
    description: [
      "Architected and developed scalable web applications using React and Node.js",
      "Implemented secure authentication systems and API endpoints",
      "Optimized database queries resulting in 50% faster page load times",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Docker", "AWS"],
    year: 2018,
    icon: <Code size={20} />,
  },
  {
    id: 4,
    title: "Security Consultant",
    company: "SecureNet Consulting",
    location: "New York, NY",
    period: "Sep 2017 - May 2018",
    type: "contract",
    description: [
      "Conducted security assessments and penetration tests for financial clients",
      "Identified and helped remediate critical security vulnerabilities",
      "Developed custom security tools for specialized testing scenarios",
      "Created comprehensive security reports and remediation plans",
    ],
    technologies: ["Network Security", "Web Security", "Burp Suite", "Metasploit", "Python"],
    year: 2017,
    icon: <Briefcase size={20} />,
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    company: "Tech Giants Inc.",
    location: "Seattle, WA",
    period: "May 2016 - Aug 2016",
    type: "internship",
    description: [
      "Developed features for the company's cloud security platform",
      "Implemented automated testing frameworks that increased test coverage by 25%",
      "Collaborated with senior engineers on architecture design",
      "Presented project results to executive leadership",
    ],
    technologies: ["Java", "Spring Boot", "JUnit", "Jenkins", "AWS"],
    year: 2016,
    icon: <GraduationCap size={20} />,
  },
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

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
              {experiences.map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  type="fade-slide"
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.1 + index * 0.1}
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
                          expandedId === exp.id
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

                          {expandedId === exp.id && (
                            <>
                              <div
                                className={`mt-4 space-y-2 ${
                                  index % 2 === 0 ? "text-right" : "text-left"
                                }`}
                              >
                                <h5 className="text-sm font-medium text-gray-300 mb-2">
                                  Responsibilities:
                                </h5>
                                <ul className="space-y-2">
                                  {exp.description.map((item, i) => {
                                    return (
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
                                    );
                                  })}
                                </ul>
                              </div>

                              

                              <div className="mt-4">
                                <h5
                                  className={`text-sm font-medium text-gray-300 mb-2 ${
                                    index % 2 === 0 ? "text-right" : "text-left"
                                  }`}
                                >
                                  Technologies:
                                </h5>
                                <div
                                  className={`flex flex-wrap gap-2 ${
                                    index % 2 === 0 ? "justify-end" : ""
                                  }`}
                                >
                                  {exp.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <button
                                className="mt-4 text-blue-400 text-sm flex items-center hover:text-blue-300 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpand(exp.id);
                                }}
                              >
                                {expandedId === exp.id
                                  ? "Show Less"
                                  : "Show More"}
                                <ArrowUpFromLine size={14} className="ml-1" />
                              </button>
                            </>
                          )}

                          {expandedId !== exp.id && (
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
              {experiences.map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  type="fade-slide"
                  direction="right"
                  delay={0.1 + index * 0.1}
                  threshold={0.05}
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
                          expandedId === exp.id
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

                        {expandedId === exp.id && (
                          <>
                            <div className="mt-4 space-y-2">
                              <h5 className="text-sm font-medium text-gray-300 mb-2">
                                Responsibilities:
                              </h5>
                              <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-gray-400 text-sm flex items-start"
                                  >
                                    <span className="text-blue-400 mr-2">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-4">
                              <h5 className="text-sm font-medium text-gray-300 mb-2">
                                Technologies:
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <button
                              className="mt-4 text-blue-400 text-sm flex items-center hover:text-blue-300 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(exp.id);
                              }}
                            >
                              {expandedId === exp.id
                                ? "Show Less"
                                : "Show More"}
                              <ArrowUpFromLine size={14} className="ml-1" />
                            </button>
                          </>
                        )}

                        {expandedId !== exp.id && (
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
