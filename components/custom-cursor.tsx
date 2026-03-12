"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const rafId = useRef<number>(0)
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth <= 768)
    
    if (window.innerWidth <= 768) return

    const updatePosition = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY }
      
      // Use RAF for smooth updates without causing re-renders
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${position.current.x}px`
          cursorRef.current.style.top = `${position.current.y}px`
        }
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.left = `${position.current.x}px`
          cursorOuterRef.current.style.top = `${position.current.y}px`
        }
      })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  // Don't render on mobile devices
  if (isMobile) {
    return null
  }

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="rounded-full bg-primary w-3 h-3 opacity-60"></div>
      </div>
      <div
        ref={cursorOuterRef}
        className={`fixed pointer-events-none z-50 rounded-full border border-primary/50 w-6 h-6 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  )
}
