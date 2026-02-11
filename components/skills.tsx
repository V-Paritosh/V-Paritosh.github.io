import Image from "next/image";
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
            className="brightness-0 invert sepia hue-rotate-[30deg] saturate-[5]"
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
      { name: "OpenCV", icon: <SiOpencv size={20} /> },
    ],
  },
];

const certifications = [
  {
    name: "CS50 Python",
    issuer: "Harvard",
    year: "2024",
  },
  {
    name: "State Champion & National Qualifier: Fundamentals of Web Design",
    issuer: "Illinois Business Professionals of America",
    year: "2025",
  },
  {
    name: "State Medalist & National Qualifier: Website Design Team",
    issuer: "Illinois Business Professionals of America",
    year: "2025",
  },
  {
    name: "State Medalist: Fundamentals of Web Design",
    issuer: "Illinois Business Professionals of America",
    year: "2024",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative noise-bg">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection type="fade-slide" direction="up">
          <div className="flex flex-col items-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              What I know
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              Skills
            </h2>
            <div className="w-16 h-0.5 bg-primary rounded mb-8" />
            <p className="text-muted-foreground text-center max-w-2xl font-body font-light">
              A summary of my professional qualifications, technical expertise,
              and certifications.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <div className="mt-10">
          <AnimatedSection type="fade-slide" direction="up" duration={0.3}>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-center text-foreground">
              Technical <span className="text-primary">Skills</span>
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection
                key={index}
                type="fade-slide"
                direction="up"
                delay={0.05 + index * 0.05}
                threshold={0.05}
                duration={0.3}
              >
                <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full group">
                  <h4 className="text-lg font-heading font-medium mb-5 text-primary">
                    {category.name}
                  </h4>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-3 text-muted-foreground text-sm font-body group-hover:text-foreground/80 transition-colors"
                      >
                        {skill.icon && (
                          <span className="text-foreground/70">{skill.icon}</span>
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
            <h3 className="text-2xl font-heading font-semibold mt-16 mb-8 text-center text-foreground">
              Certifications & <span className="text-primary">Awards</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <AnimatedSection
                  key={index}
                  type="fade-slide"
                  direction="up"
                  delay={0.5 + index * 0.1}
                >
                  <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center h-full">
                    <h4 className="text-foreground font-heading font-medium mb-2 text-balance">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-sm font-body mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-primary text-sm font-body flex items-center gap-1">
                      <Award size={14} />
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
