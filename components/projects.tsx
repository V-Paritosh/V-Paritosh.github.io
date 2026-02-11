"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, X } from "lucide-react"
import AnimatedSection from "./animated-section"

interface Project {
  id: number
  title: string
  description: string
  thumbnail: string
  category: string[]
  technologies: string[]
  githubUrl: string
  liveUrl: string
  detailedDescription: string
  images: string[]
  challenges: string
  solutions: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Sanskrit-to-Gujarati Translator",
    description:
      "A web application designed to help users, especially Swamis at Mandirs, translate Sanskrit scriptures into Gujarati. Utilizes OCR with OpenCV-enhanced image processing and Tesseract for improved text recognition, followed by NLP translation with IndicTrans2. ",
    thumbnail: "",
    category: ["AI", "Web Development"],
    technologies: [
      "Python",
      "Django",
      "OpenCV",
      "Tesseract",
      "IndicTrans2",
      "Next.js",
    ],
    githubUrl: "",
    liveUrl: "",
    detailedDescription: "",
    images: [
      "/images/sanskrit-translator-1.png",
      "/images/sanskrit-translator-2.png",
    ],
    challenges: "",
    solutions: "",
  },
  {
    id: 2,
    title: "Code211 Hackathon Website",
    description:
      "Developed the official Code211 Hackathon website to streamline communication, registration, and event management. Implemented strong SEO techniques to improve visibility and ensure participants could easily find resources before and during the event.",
    thumbnail: "/assets/projectImg/code211.png",
    category: ["Web Development", "SEO"],
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    githubUrl: "https://github.com/Code211/Code211.github.io", // update if needed
    liveUrl: "https://code211.org", // update if needed
    detailedDescription: "",
    images: ["/images/code211-1.png"],
    challenges: "",
    solutions: "",
  },
  {
    id: 3,
    title: "ICEG Non-Profit Website",
    description:
      "This website was built for ICEG, a community-oriented non-profit, to promote events and inform visitors. Focus was placed on UI/UX, accessibility, and fast load times using Next.js with server-side rendering.",
    thumbnail: "/assets/projectImg/iceg.png",
    category: ["Web Development"],
    technologies: ["Next.js", "React", "Tailwind CSS", "GitHub Pages"],
    githubUrl: "https://github.com/iceg-nonprofit/iceg-nonprofit.github.io",
    liveUrl: "https://iceg-nonprofit.github.io",
    detailedDescription: "",
    images: ["/images/iceg-1.png", "/images/iceg-2.png"],
    challenges: "",
    solutions: "",
  },
  {
    id: 4,
    title: "SpendSense",
    description:
      "SpendSense is a responsive web app that helps users manage their finances. Users can track income, expenses, and categories through a dynamic UI connected to a PostgreSQL database via Supabase.",
    thumbnail: "/assets/projectImg/spendsense.png",
    category: ["Web Development", "Finance"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Supabase",
      "Bootstrap",
      "GitHub Pages",
    ],
    githubUrl: "https://github.com/V-Paritosh/SpendSense",
    liveUrl: "https://v-paritosh.github.io/SpendSense/",
    detailedDescription: "",
    images: ["/images/spendsense-1.png", "/images/spendsense-2.png"],
    challenges: "",
    solutions: "",
  },
  {
    id: 5,
    title: "GradeMaster",
    description:
      "Full-stack grade management system that helps students organize classes, assignments, and visualize weighted grades in real time.",
    thumbnail: "/assets/projectImg/grademaster.png",
    category: ["Web Development", "Education", "Full-Stack"],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Supabase",
      "Zustand",
      "Recharts",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/V-Paritosh/GradeMaster",
    liveUrl: "https://grademaster211.netlify.app/",
    detailedDescription:
      "GradeMaster is a modern web app built for D211 students to centralize grade tracking and academic progress. It provides an intuitive dashboard for creating classes, adding grading sections, managing assignments, and calculating weighted GPAs. Real-time analytics, client-side calculations, and debounced backend syncing ensure a responsive, offline-first experience accessible from any device. Features include secure authentication, persistent state, grade visualization charts, and a 'what-if' grade calculator for scenario planning.",
    images: [],
    challenges:
      "Handling nested class, section, and assignment data while ensuring offline-first client-side calculations and debounced synchronization to avoid excessive database writes.",
    solutions:
      "Implemented a document-based MongoDB schema with upsert logic, used Zustand for state management and persistence, and performed all grade calculations on the client to minimize latency and backend load.",
  },
  {
    id: 6,
    title: "CodeNode",
    description:
      "Project-based, gamified CS learning platform that helps students build practical programming skills while tracking progress and collaborating with peers. \n \n Created for FBLA-2026",
    thumbnail: "/assets/projectImg/codenode.png",
    category: ["Web Development", "Education", "Full-Stack"],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/V-Paritosh/CodeNode",
    liveUrl: "https://codenodefbla.netlify.app/",
    detailedDescription:
      "CodeNode bridges the gap between theoretical CS concepts and hands-on project experience for high school and college students. Learners engage with modular projects across multiple domains, earn XP for completed tasks, maintain streaks, and join collaborative study sessions. Real-time progress dashboards and gamification elements increase engagement, while modular MongoDB schemas allow flexible curriculum updates without migrations. The platform also supports secure file uploads, peer feedback, and personalized onboarding based on skill level.",
    images: [],
    challenges:
      "Designing a scalable gamification system with XP, streak tracking, and collaborative modules while maintaining flexible project schemas for diverse learning paths.",
    solutions:
      "Built a modular MongoDB schema for projects, modules, and activities, integrated Supabase for authentication and secure file handling, and designed server-side API logic to handle real-time progress and activity tracking efficiently.",
  },
];

const categories = [
  "All",
  "AI",
  "Web Development",
  "SEO",
  "Finance",
  "Education",
  "Full-Stack",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category.includes(selectedCategory))

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const handleModalClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      closeProjectModal()
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection type="fade-slide" direction="up">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
              My <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 rounded mb-8"></div>
            <p className="text-gray-300 text-center max-w-2xl font-poppins font-light">
              A showcase of my work in data, artificial intelligence, and web
              development. Each project represents a unique challenge and
              innovative solution.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection type="fade-slide" direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              type="fade-slide"
              direction="up"
              delay={0.3 + index * 0.1}
              threshold={0.05}
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10 h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.category.map((cat) => (
                          <span
                            key={cat}
                            className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {project.description.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                        target="_blank"
                      >
                        <Github size={18} />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                        target="_blank"
                      >
                        <ExternalLink size={18} />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    )}
                  </div>
                  {/* <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center"
                  >
                    View Details
                    <ExternalLink size={14} className="ml-1" />
                  </button> */}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleModalClick}
          >
            <div className="bg-gray-900 border border-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
              <div className="sticky top-0 bg-gray-900 z-10 flex justify-between items-center p-4 border-b border-gray-800">
                <h3 className="text-xl font-semibold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeProjectModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                {/* Image Carousel */}
                <div className="relative aspect-video mb-6 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={
                      selectedProject.images[currentImageIndex] ||
                      "/placeholder.svg"
                    }
                    alt={`${selectedProject.title} screenshot ${
                      currentImageIndex + 1
                    }`}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            currentImageIndex === index
                              ? "bg-blue-400"
                              : "bg-gray-500"
                          }`}
                        >
                          <span className="sr-only">Image {index + 1}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-blue-300 mb-2">
                      Description
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-2">
                        Challenges
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-2">
                        Solutions
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.solutions}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-blue-300 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4 border-t border-gray-800">
                    <Link
                      href={selectedProject.githubUrl}
                      className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      View on GitHub
                    </Link>
                    <Link
                      href={selectedProject.liveUrl}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
