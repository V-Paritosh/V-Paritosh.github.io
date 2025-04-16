"use client"

import { useInView } from "@/hooks/use-in-view"
import type { ReactNode } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"
type AnimationType = "fade" | "slide" | "scale" | "fade-slide"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: AnimationDirection
  type?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  distance?: number
}

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  type = "fade-slide",
  delay = 0,
  duration = 0.3, // Default faster duration
  threshold = 0.1,
  distance = 50,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold })

  const getTransform = () => {
    if (type === "fade") return "none"

    switch (direction) {
      case "up":
        return `translateY(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "left":
        return `translateX(${distance}px)`
      case "right":
        return `translateX(-${distance}px)`
      default:
        return "none"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  )
}
