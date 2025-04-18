"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth <= 800;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = isMobile
        ? Math.min(Math.floor((canvas.width * canvas.height) / 50), 300)
        : Math.min(Math.floor((canvas.width * canvas.height) / 50), 600);

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          opacity: Math.random() * 0.5 + .8,
        })
      }
    }

    const drawParticles = () => {
      let lastDrawTime = 0;
      const frameRate = 30; // ~30 fps

      const now = Date.now();
      if (now - lastDrawTime < 1000 / frameRate) {
        animationFrameId.current = requestAnimationFrame(drawParticles);
        return;
      }
      lastDrawTime = now;


      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 150, 255, ${particle.opacity})`;
        ctx.fill();

        // Connect particles
        connectParticles(particle, index);
      });

      animationFrameId.current = requestAnimationFrame(drawParticles);
    }

    const connectParticles = (particle: Particle, index: number) => {
      if (!ctx) return

      for (let i = index + 1; i < particles.current.length; i++) {
        const otherParticle = particles.current[i]
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2),
        )

        const maxDistance = isMobile ? 60 : 120;
        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 150, 255, ${1 * (1 - distance / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" style={{ pointerEvents: "none" }} />
}
