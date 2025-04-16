import Image from "next/image"
import { CheckCircle, GraduationCap } from "lucide-react"
import AnimatedSection from "./animated-section"

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C/C++"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Three.js"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Django", "GraphQL", "RESTful APIs"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
  },
  {
    name: "Security",
    skills: ["Penetration Testing", "Cryptography", "Network Security", "OWASP", "Security Auditing"],
  },
  {
    name: "AI & Data",
    skills: ["Machine Learning", "TensorFlow", "PyTorch", "Data Analysis", "NLP"],
  },
]

const educationTimeline = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Stanford University",
    years: "2018 - 2022",
    description: "Specialized in AI Security and Privacy-Preserving Machine Learning",
    icon: <GraduationCap size={20} />,
  },
  {
    degree: "M.S. in Computer Science",
    institution: "MIT",
    years: "2016 - 2018",
    description: "Focus on Cybersecurity and Distributed Systems",
    icon: <GraduationCap size={20} />,
  },
  {
    degree: "B.S. in Computer Science",
    institution: "UC Berkeley",
    years: "2012 - 2016",
    description: "Minor in Mathematics",
    icon: <GraduationCap size={20} />,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/90">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection type="fade-slide" direction="up" duration={0.3}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 rounded mb-8"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimatedSection type="fade-slide" direction="right" delay={0.1} duration={0.3}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 blur-lg opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-400/30">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Profile"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio */}
          <div className="lg:pl-8">
            <AnimatedSection type="fade-slide" direction="left" delay={0.1} duration={0.3}>
              <h3 className="text-2xl font-semibold mb-4 font-inter">Computer Scientist & Security Researcher</h3>
            </AnimatedSection>

            <AnimatedSection type="fade-slide" direction="left" delay={0.15} duration={0.3}>
              <p className="text-gray-300 mb-6 font-poppins font-light leading-relaxed">
                I'm a passionate computer scientist with expertise in cybersecurity, artificial intelligence, and
                full-stack development. With over 8 years of experience in the tech industry, I've worked on developing
                secure systems, researching advanced security vulnerabilities, and building scalable applications.
              </p>
            </AnimatedSection>

            <AnimatedSection type="fade-slide" direction="left" delay={0.2} duration={0.3}>
              <p className="text-gray-300 mb-6 font-poppins font-light leading-relaxed">
                My research focuses on the intersection of AI and security, exploring how machine learning can be used
                to enhance security systems while also investigating potential vulnerabilities in AI models. I'm
                committed to creating technology that is not only innovative but also secure and ethical.
              </p>
            </AnimatedSection>

            <AnimatedSection type="fade-slide" direction="left" delay={0.25} duration={0.3}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Security Research</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">AI Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Full-Stack Engineering</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Technical Writing</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <AnimatedSection type="fade-slide" direction="up" duration={0.3}>
            <h3 className="text-2xl font-semibold mb-8 text-center font-inter">
              Technical <span className="text-blue-400">Skills</span>
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h4 className="text-lg font-medium mb-4 text-blue-300">{category.name}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education Timeline - Updated UI */}
        <div className="mt-20">
          <AnimatedSection type="fade-slide" direction="up" duration={0.3}>
            <h3 className="text-2xl font-semibold mb-12 text-center font-inter">
              My <span className="text-blue-400">Journey</span>
            </h3>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400/30"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {educationTimeline.map((item, index) => (
                <AnimatedSection
                  key={index}
                  type="fade-slide"
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.1 + index * 0.1}
                  threshold={0.1}
                  duration={0.3}
                >
                  <div className="relative flex items-center">
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-900 border-2 border-blue-400 rounded-full z-10 flex items-center justify-center text-blue-400">
                      {item.icon}
                    </div>

                    {/* Year marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-20 bg-gray-900 px-3 py-1 rounded-full border border-blue-400/30 text-sm font-medium text-blue-400">
                      {item.years}
                    </div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 ml-auto"}`}>
                      <div
                        className={`bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10 ${index % 2 === 0 ? "mr-6" : "ml-6"}`}
                      >
                        <h4 className="text-lg font-medium text-white">{item.degree}</h4>
                        <p className="text-blue-300 text-sm mb-2">{item.institution}</p>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    <div
                      className={`absolute top-6 h-0.5 bg-blue-400/30 w-[calc(25%-24px)] ${
                        index % 2 === 0 ? "right-[50%]" : "left-[50%]"
                      }`}
                    ></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
