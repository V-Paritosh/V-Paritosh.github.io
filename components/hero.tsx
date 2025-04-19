"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Navbar from "./navbar";
import ParticleBackground from "./particle-background";
import AnimatedSection from "./animated-section";
import AnimatedSVG from "./animatedSVG";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Computer Scientist | Full-Stack Developer | Scholar";
  const typingSpeed = 50;
  const pauseDuration = 1500;
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;
    let isDeleting = false;

    const typeText = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < fullText.length) {
          setText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeText, typingSpeed);
        } else {
          // Done typing, pause, then start deleting
          timeout = setTimeout(() => {
            isDeleting = true;
            timeout = setTimeout(typeText, typingSpeed);
          }, pauseDuration);
        }
      } else {
        // Deleting backwards
        if (currentIndex > 0) {
          setText(fullText.substring(0, currentIndex - 1));
          currentIndex--;
          timeout = setTimeout(typeText, typingSpeed);
        } else {
          // Done deleting, pause, then start typing again
          isDeleting = false;
          timeout = setTimeout(typeText, pauseDuration);
        }
      }
    };

    timeout = setTimeout(typeText, 1000); // initial delay before starting

    return () => clearTimeout(timeout);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    if (!cursorRef.current) return;

    const blinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === "0" ? "1" : "0";
      }
    }, 530);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      <Navbar />
      <ParticleBackground />

      <div className="container mx-auto px-4 md:px-6 pt-20 sm:pt-1">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 z-10">
            <AnimatedSection type="fade" duration={0.8}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-inter tracking-tight mb-4">
                <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  Paritosh Vaghasiya
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection type="fade" duration={0.8} delay={0.3}>
              <div className="h-8 sm:h-10 lg:mb-0 mb-8">
                <p className="text-lg sm:text-xl text-gray-100 font-poppins">
                  {text}
                  <span ref={cursorRef} className="text-blue-400">
                    |
                  </span>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="up"
              delay={0.5}
              duration={0.8}
            >
              <p className="text-gray-200 max-w-xl mb-8 text-base sm:text-lg font-poppins font-light">
                Building innovative solutions at the intersection of data,
                artificial intelligence, and web development. Passionate about
                creating secure, scalable, and user-friendly applications.
              </p>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="up"
              delay={0.7}
              duration={0.8}
            >
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 font-medium text-sm"
                >
                  View My Work
                </Link>
                <Link
                  href="#resume"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/50 px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 font-medium text-sm"
                >
                  Download Resume
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection
              type="fade-slide"
              direction="up"
              delay={0.9}
              duration={0.8}
            >
              <div className="mt-8 flex space-x-5">
                <Link
                  href="https://github.com/V-Paritosh"
                  target="_blank"
                  className="text-gray-100 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/paritoshvaghasiya/"
                  target="_blank"
                  className="text-gray-100 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:paritoshnvaghasiya@gmail.com"
                  className="text-gray-100 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-2 hidden lg:block">
            <AnimatedSection
              type="fade-slide"
              direction="left"
              delay={0.5}
              duration={1}
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-900/30 to-blue-400/10 rounded-full p-1 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border border-blue-400/10"></div>
                <div className="absolute inset-4 rounded-full border border-blue-400/5"></div>
                <AnimatedSVG />
              </div>
            </AnimatedSection>
          </div>
        </div>
        <AnimatedSection type="fade" delay={1.2} duration={1}>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ArrowDown size={24} />
              <span className="sr-only">Scroll Down</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
