import Image from "next/image"
import Link from "next/link"
import { Download, FileText, Award } from "lucide-react"
import AnimatedSection from "./animated-section"

interface SkillLevel {
  name: string
  level: number
}

const technicalSkills: SkillLevel[] = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "Python", level: 95 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Machine Learning", level: 85 },
  { name: "Cybersecurity", level: 95 },
  { name: "Docker/Kubernetes", level: 75 },
  { name: "AWS/Cloud", level: 80 },
]

const softSkills: SkillLevel[] = [
  { name: "Problem Solving", level: 95 },
  { name: "Communication", level: 85 },
  { name: "Leadership", level: 80 },
  { name: "Teamwork", level: 90 },
  { name: "Research", level: 95 },
  { name: "Project Management", level: 85 },
]

const certifications = [
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    year: "2021",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "AWS Certified Security Specialty",
    issuer: "Amazon Web Services",
    year: "2020",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    year: "2019",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2020",
    logo: "/placeholder.svg?height=60&width=60",
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection type="fade-slide" direction="up">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
              Resume & <span className="text-blue-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 rounded mb-8"></div>
            <p className="text-gray-300 text-center max-w-2xl font-poppins font-light">
              A summary of my professional qualifications, technical expertise, and certifications.
            </p>
          </div>
        </AnimatedSection>

        {/* Resume Download */}
        <AnimatedSection type="fade-slide" direction="up" delay={0.2}>
          <div className="flex justify-center mb-16">
            <div className="relative max-w-md w-full">
              <div className="relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-sm bg-black/40 flex flex-col items-center justify-center p-6 z-10">
                  <FileText size={48} className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">My Resume</h3>
                  <p className="text-gray-300 text-sm text-center mb-6">
                    Download my complete resume to learn more about my experience, education, and qualifications.
                  </p>
                  <Link
                    href="#"
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </Link>
                </div>
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Resume Preview"
                  width={600}
                  height={800}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <AnimatedSection type="fade-slide" direction="right" delay={0.3}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                        style={{
                          width: "0%",
                          animation: `growWidth 1.5s ease-out forwards ${index * 0.1}s`,
                        }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Soft Skills */}
          <AnimatedSection type="fade-slide" direction="left" delay={0.3}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={skill.name} style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                        style={{
                          width: "0%",
                          animation: `growWidth 1.5s ease-out forwards ${index * 0.1}s`,
                        }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Certifications */}
        <AnimatedSection type="fade-slide" direction="up" delay={0.4}>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Certifications & <span className="text-blue-400">Awards</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <AnimatedSection key={index} type="fade-slide" direction="up" delay={0.5 + index * 0.1}>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/30 transition-colors flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 mb-4 relative">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-white font-medium mb-2 line-clamp-2">{cert.name}</h4>
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
  )
}
