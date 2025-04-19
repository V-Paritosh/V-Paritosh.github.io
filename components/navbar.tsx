"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };


    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300${
        isScrolled ? "bg-black/85 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`} // Keep bg-black on mobile and transparent on larger screens
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex items-center justify-between">
          <Link
            href="#home"
            className="text-xl font-semibold tracking-tight hover:text-blue-400 transition-colors"
          >
            <Image
              src="/assets/logoBlack.png"
              alt="Logo"
              width={10}
              height={10}
              className="w-10 h-auto shadow-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link href="#contact" passHref>
              <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Contact
              </button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-gray-200 hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          ref={mobileMenuRef}
          className="md:hidden bg-black/95 text-center backdrop-blur-md py-4 px-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors py-2 ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="#contact" passHref>
            <button className="md:block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Contact
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}
