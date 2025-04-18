import Image from "next/image";
import { CheckCircle, GraduationCap, BookOpen } from "lucide-react";
import AnimatedSection from "./animated-section";

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
          <AnimatedSection
            type="fade-slide"
            direction="right"
            delay={0.1}
            duration={0.3}
          >
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 blur-lg opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-400/30">
                  <Image
                    src="/assets/paritosh.jpg?height=320&width=320"
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
            <AnimatedSection
              type="fade-slide"
              direction="left"
              delay={0.1}
              duration={0.3}
            >
              <h3 className="text-2xl font-semibold mb-4 font-inter">
                Computer Scientist & Scholar
              </h3>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="left"
              delay={0.15}
              duration={0.3}
            >
              <p className="text-gray-300 mb-6 font-poppins font-light leading-relaxed">
                I'm a passionate computer scientist with expertise in data
                science, artificial intelligence, and full-stack development. As
                a rising computer scientist in the tech industry, I've worked
                on data-intensive applications, developing machine learning
                models, and building scalable applications.
              </p>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="left"
              delay={0.2}
              duration={0.3}
            >
              <p className="text-gray-300 mb-6 font-poppins font-light leading-relaxed">
                My mindset as a scholar fuels my drive to explore beyond the
                surface from understanding the nuances of natural language
                processing to applying data science for real-world impact. I
                treat every line of code as a step in a broader journey to
                innovate, question, and contribute meaningfully to the tech
                world.
              </p>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="left"
              delay={0.25}
              duration={0.3}
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">
                    AI-Powered Solutions
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">
                    Data-Driven Development
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">
                    Full-Stack Engineering
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">
                    Open-Source Collaboration
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
