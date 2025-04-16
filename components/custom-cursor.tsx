"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y)
      const clickableElements = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"]
      setIsPointer(
        target !== null &&
          (clickableElements.includes(target.tagName) || window.getComputedStyle(target).cursor === "pointer"),
      )
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateCursorType)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateCursorType)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [position])

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-blue-400 transition-all duration-200 ${
            isPointer ? "w-6 h-6 opacity-70" : "w-4 h-4 opacity-50"
          }`}
        ></div>
      </div>
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-blue-400 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          width: isPointer ? "40px" : "24px",
          height: isPointer ? "40px" : "24px",
          transitionProperty: "width, height, opacity",
          transitionDuration: "0.2s",
        }}
      ></div>
    </>
  )
}
