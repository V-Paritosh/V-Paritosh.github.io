import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiOpencv,
  SiPandas,
} from "react-icons/si";
import AnimatedSection from "./animated-section";
import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={20} /> },
      { name: "TypeScript", icon: <SiTypescript size={20} /> },
      { name: "Python", icon: <SiPython size={20} /> },
      {
        name: "Java",
        icon: (
          <Image
            src="/assets/java-plain.svg"
            alt="Java"
            width={20}
            height={20}
            className="brightness-0 invert sepia hue-rotate-[170deg] saturate-[5]"
          />
        ),
      },
      { name: "HTML", icon: <SiHtml5 size={20} /> },
      { name: "CSS", icon: <SiCss3 size={20} /> },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <SiReact size={20} /> },
      { name: "Next.js", icon: <SiNextdotjs size={20} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={20} /> },
      { name: "Django", icon: <SiDjango size={20} /> },
      { name: "Supabase", icon: <SiSupabase size={20} /> },
      { name: "Firebase", icon: <SiFirebase size={20} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
      { name: "SQL", icon: <SiMysql size={20} /> },
    ],
  },
  {
    name: "AI & Data",
    skills: [
      { name: "Scikit-learn", icon: <SiScikitlearn size={20} /> },
      { name: "TensorFlow", icon: <SiTensorflow size={20} /> },
      { name: "PyTorch", icon: <SiPytorch size={20} /> },
      { name: "Numpy", icon: <SiNumpy size={20} /> },
      { name: "Pandas", icon: <SiPandas size={20} /> },
      { name: "OpenCV", icon: <SiOpencv size={20} /> }, // or another related
    ],
  },
];

const certifications = [
  {
    name: "CS50 Python",
    issuer: "Harvard",
    year: "2024",
    logo: "",
  },
  {
    name: "State Champion & National Qualifier: Fundementals of Web Design",
    issuer: "Illinois Business Professionals of America",
    year: "2025",
    logo: "",
  },
  {
    name: "State Medalist & National Qualifier: Website Design Team",
    issuer: "Illinois Business Professionals of America",
    year: "2025",
    logo: "",
  },
  {
    name: "State Medalist: Fundementals of Web Design",
    issuer: "Illinois Business Professionals of America",
    year: "2024",
    logo: "",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection type="fade-slide" direction="up">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
              Skills
            </h2>
            <div className="w-20 h-1 bg-blue-400 rounded mb-8"></div>
            <p className="text-gray-300 text-center max-w-2xl font-poppins font-light">
              A summary of my professional qualifications, technical expertise,
              and certifications.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <div className="mt-10">
          <AnimatedSection type="fade-slide" direction="up" duration={0.3}>
            <h3 className="text-2xl font-semibold mb-5 text-center font-inter">
              Technical <span className="text-blue-400">Skills</span>
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection
                key={index}
                type="fade-slide"
                direction="up"
                delay={0.05 + index * 0.05}
                threshold={0.05}
                duration={0.3}
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/30 transition-colors h-full">
                  <h4 className="text-lg font-medium mb-4 text-blue-300">
                    {category.name}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        {skill.icon && (
                          <span className="text-white">{skill.icon}</span>
                        )}
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <AnimatedSection type="fade-slide" direction="up" delay={0.4}>
          <div>
            <h3 className="text-2xl font-semibold mt-10 mb-5 text-center text-white">
              Certifications & <span className="text-blue-400">Awards</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <AnimatedSection
                  key={index}
                  type="fade-slide"
                  direction="up"
                  delay={0.5 + index * 0.1}
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/30 transition-colors flex flex-col items-center text-center h-full">
                    <h4 className="text-white font-medium mb-2">{cert.name}</h4>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-blue-400 text-sm flex items-center">
                      <Award size={14} className="mr-1" />
                      {cert.year}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
