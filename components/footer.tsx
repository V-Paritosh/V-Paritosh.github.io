"use client"

import { useState, useEffect } from "react";
import Link from "next/link"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-border">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
              Portfolio
            </h3>
            <p className="text-muted-foreground mb-6 text-sm font-body leading-relaxed max-w-sm">
              Showcasing my journey in computer science, artificial
              intelligence, and full-stack development.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/V-Paritosh"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/paritoshvaghasiya/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:paritoshnvaghasiya@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map(
                (name) => (
                  <li key={name}>
                    <Link
                      href={`#${name.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                    >
                      {name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-body">
            &copy; {year ?? "Loading..."} Paritosh Vaghasiya Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-body group"
            >
              Back to top
              <ArrowUp
                size={16}
                className="transform group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
