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
    title: "SecureAI Shield",
    description:
      "An AI-powered security platform that detects and mitigates advanced cyber threats in real-time using machine learning algorithms.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: ["AI", "Security"],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
    detailedDescription:
      "SecureAI Shield is a comprehensive security platform that leverages artificial intelligence to detect, analyze, and respond to cyber threats in real-time. The system uses advanced machine learning models trained on vast datasets of known attack patterns to identify potential security breaches before they can cause damage. The platform includes a dashboard for security analysts, automated response capabilities, and detailed forensic analysis tools.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges:
      "One of the main challenges was developing models that could detect novel attack patterns without generating excessive false positives. Additionally, the system needed to process large volumes of network traffic data in real-time without introducing latency.",
    solutions:
      "We implemented a multi-layered detection approach combining supervised and unsupervised learning techniques. The system uses anomaly detection for identifying unknown threats and classification models for known attack patterns. We optimized the processing pipeline using distributed computing and efficient data structures to handle high throughput with minimal latency.",
  },
  {
    id: 2,
    title: "PrivacyGuard",
    description:
      "A privacy-preserving framework for federated learning that enables collaborative AI model training without sharing sensitive data.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: ["AI", "Privacy"],
    technologies: ["Python", "PyTorch", "Differential Privacy", "Cryptography"],
    githubUrl: "#",
    liveUrl: "#",
    detailedDescription:
      "PrivacyGuard is a framework that enables multiple organizations to collaboratively train machine learning models without sharing their sensitive data. It implements federated learning with differential privacy guarantees, ensuring that individual data points cannot be reverse-engineered from the trained model. The system includes secure aggregation protocols, privacy budget management, and model performance monitoring tools.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges:
      "Balancing privacy guarantees with model accuracy was a significant challenge. Strong privacy protections often reduce the utility of the resulting models. Additionally, coordinating training across multiple organizations with varying computational resources presented logistical difficulties.",
    solutions:
      "We developed adaptive privacy mechanisms that adjust noise levels based on data sensitivity and model convergence state. The system implements asynchronous training protocols that accommodate participants with different computational capabilities, and includes robust dropout handling to maintain training stability even when some participants become unavailable.",
  },
  {
    id: 3,
    title: "CodeSentry",
    description:
      "An automated code security analysis tool that identifies vulnerabilities in software projects and suggests remediation strategies.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: ["Security", "DevOps"],
    technologies: ["JavaScript", "Static Analysis", "AST Parsing", "CI/CD Integration"],
    githubUrl: "#",
    liveUrl: "#",
    detailedDescription:
      "CodeSentry is a comprehensive static code analysis tool designed to identify security vulnerabilities, code quality issues, and potential bugs in software projects. It integrates with popular CI/CD pipelines and version control systems to provide continuous security feedback throughout the development lifecycle. The tool supports multiple programming languages and frameworks, with specialized detection rules for each technology stack.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges:
      "Creating accurate detection rules that minimize false positives while catching subtle security issues was challenging. The tool also needed to analyze large codebases efficiently and integrate seamlessly with various development workflows.",
    solutions:
      "We implemented a modular rule engine that combines pattern matching with semantic analysis to understand code context. The system uses incremental analysis to focus on changed code in large repositories, and provides detailed explanations and remediation advice for each detected issue. We also developed plugins for major IDEs and CI systems to make integration as smooth as possible.",
  },
  {
    id: 4,
    title: "DataVault",
    description:
      "A secure data storage and sharing platform with end-to-end encryption and granular access controls for sensitive information.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: ["Security", "Web Development"],
    technologies: ["React", "Node.js", "MongoDB", "Encryption", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
    detailedDescription:
      "DataVault is a secure platform for storing, managing, and sharing sensitive data with end-to-end encryption. It implements zero-knowledge architecture where even the service provider cannot access unencrypted user data. The system features granular access controls, audit logging, and secure sharing capabilities that maintain encryption throughout the data lifecycle.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges:
      "Implementing true end-to-end encryption while maintaining usability features like search and sharing was technically challenging. We also needed to ensure that the system remained secure even if the server was compromised.",
    solutions:
      "We developed a client-side encryption architecture using modern cryptographic primitives, with key management handled entirely on the user's device. For searchable encryption, we implemented secure indexing techniques that allow querying encrypted data without revealing the contents. The sharing system uses a combination of asymmetric and symmetric encryption to securely transfer access between users.",
  },
  {
    id: 5,
    title: "NetDefender",
    description:
      "A network security monitoring tool that visualizes traffic patterns and detects anomalies indicating potential security breaches.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: ["Security", "Networking"],
    technologies: ["Python", "Elasticsearch", "Kibana", "Machine Learning", "Network Protocols"],
    githubUrl: "#",
    liveUrl: "#",
    detailedDescription:
      "NetDefender is a comprehensive network security monitoring solution that captures, analyzes, and visualizes network traffic to identify potential security threats. It combines signature-based detection with behavioral analysis to catch both known and novel attack patterns. The system provides real-time alerts, detailed forensic capabilities, and intuitive visualizations that help security teams understand complex network activities at a glance.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges:
      "Processing high-volume network traffic in real-time without packet loss was technically demanding. Additionally, distinguishing between normal network anomalies and actual security threats required sophisticated analysis techniques.",
    solutions:
      "We implemented a distributed capture and analysis architecture that scales horizontally to handle enterprise-level traffic volumes. The system uses a multi-stage analysis pipeline that progressively filters and enriches traffic data, applying increasingly sophisticated detection techniques at each stage. For anomaly detection, we developed baseline modeling that adapts to each network's unique patterns of activity.",
  },
  {
    id: 6,
    title: "QuantumSafe",
    description:
      "A cryptographic library implementing quantum-resistant algorithms to secure data against future quantum computing threats.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: ["Security", "Cryptography"],
    technologies: ["C++", "Post-Quantum Cryptography", "Lattice-based Cryptography", "Hash-based Signatures"],
    githubUrl: "#",
    liveUrl: "#",
    detailedDescription:
      "QuantumSafe is a forward-looking cryptographic library that implements post-quantum cryptographic algorithms resistant to attacks from quantum computers. It provides drop-in replacements for traditional cryptographic primitives like RSA and ECC that are vulnerable to quantum attacks. The library includes key encapsulation mechanisms, digital signatures, and hybrid cryptosystems that combine classical and quantum-resistant approaches for maximum security.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    challenges:
      "Post-quantum algorithms typically have larger key sizes and computational requirements than classical algorithms, making efficient implementation crucial. Additionally, these algorithms are still evolving as research progresses, requiring a flexible architecture.",
    solutions:
      "We focused on optimizing the implementation of selected NIST post-quantum cryptography candidates, using assembly-level optimizations for critical operations. The library architecture is modular, allowing algorithms to be updated or replaced as standards evolve. We also implemented extensive test suites and formal verification to ensure correctness of these complex cryptographic operations.",
  },
]

const categories = ["All", "AI", "Security", "Privacy", "Web Development", "DevOps", "Networking", "Cryptography"]

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
              A showcase of my work in security, artificial intelligence, and web development. Each project represents a
              unique challenge and innovative solution.
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
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.category.map((cat) => (
                          <span key={cat} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <Link href={project.githubUrl} className="text-gray-300 hover:text-blue-400 transition-colors">
                          <Github size={18} />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={project.liveUrl} className="text-gray-300 hover:text-blue-400 transition-colors">
                          <ExternalLink size={18} />
                          <span className="sr-only">Live Demo</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center"
                  >
                    View Details
                    <ExternalLink size={14} className="ml-1" />
                  </button>
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
                <h3 className="text-xl font-semibold text-white">{selectedProject.title}</h3>
                <button onClick={closeProjectModal} className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                {/* Image Carousel */}
                <div className="relative aspect-video mb-6 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
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
                            currentImageIndex === index ? "bg-blue-400" : "bg-gray-500"
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
                    <h4 className="text-lg font-medium text-blue-300 mb-2">Description</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.detailedDescription}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-2">Challenges</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-2">Solutions</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.solutions}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-blue-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
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
  )
}
