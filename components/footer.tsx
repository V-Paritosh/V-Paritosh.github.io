"use client"

import { useState, useEffect } from "react";
import Link from "next/link"
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-t from-black/80 to-black pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Showcasing my journey in computer science, artificial
              intelligence, and full-stack development.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/V-Paritosh"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/paritoshvaghasiya/"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:paritoshnvaghasiya@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year ?? "Loading..."} Paritosh Vaghasiya Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm group"
            >
              Back to top
              <ArrowUp
                size={16}
                className="ml-1 transform group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
