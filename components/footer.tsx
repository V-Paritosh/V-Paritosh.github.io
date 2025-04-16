"use client"

import Link from "next/link"
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-black/80 to-black pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Upper Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Showcasing my journey in computer science, security research, and full-stack development.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to receive updates on new projects and articles.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 text-gray-200 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400 w-full text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Portfolio. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm group"
            >
              Back to top
              <ArrowUp size={16} className="ml-1 transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
