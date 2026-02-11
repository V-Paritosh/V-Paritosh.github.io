import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "./animated-section";

export default function About() {
  return (
    <section id="about" className="py-24 relative noise-bg">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection type="fade-slide" direction="up" duration={0.3}>
          <div className="flex flex-col items-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              Get to know me
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-primary rounded" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <AnimatedSection
            type="fade-slide"
            direction="right"
            delay={0.1}
            duration={0.3}
          >
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/assets/paritosh1.jpg"
                    alt="Paritosh Vaghasiya"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>
                {/* Decorative corner accent */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
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
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                Computer Scientist & Scholar
              </h3>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="left"
              delay={0.15}
              duration={0.3}
            >
              <p className="text-muted-foreground mb-6 font-body font-light leading-relaxed">
                I'm a passionate computer scientist with expertise in data
                science, artificial intelligence, and full-stack development. As
                a rising computer scientist in the tech industry, I've worked on
                data-intensive applications, developing machine learning models,
                and building scalable applications.
              </p>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="left"
              delay={0.2}
              duration={0.3}
            >
              <p className="text-muted-foreground mb-8 font-body font-light leading-relaxed">
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
                {[
                  "AI-Powered Solutions",
                  "Data-Driven Development",
                  "Full-Stack Engineering",
                  "Open-Source Collaboration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm font-body">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
