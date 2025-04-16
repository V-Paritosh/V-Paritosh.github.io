"use client"

import { useInView } from "@/hooks/use-in-view"
import { Children, type ReactNode, cloneElement, isValidElement } from "react"

interface StaggeredAnimationProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  threshold?: number
  duration?: number
}

export default function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 0.05, // Faster stagger
  initialDelay = 0,
  threshold = 0.1,
  duration = 0.3, // Faster duration
}: StaggeredAnimationProps) {
  const { ref, isInView } = useInView({ threshold })

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateY(20px)",
              transitionProperty: "opacity, transform",
              transitionDuration: `${duration}s`,
              transitionDelay: `${initialDelay + index * staggerDelay}s`,
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
          })
        }
        return child
      })}
    </div>
  )
}
