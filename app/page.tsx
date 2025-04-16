import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
}
