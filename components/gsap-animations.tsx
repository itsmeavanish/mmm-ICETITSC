"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export function useGSAPAnimations() {
  useEffect(() => {
    // Animated background particles
    const createParticles = () => {
      const particles = document.querySelectorAll(".particle")
      particles.forEach((particle, index) => {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        })

        gsap.to(particle, {
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          rotation: 360,
          duration: Math.random() * 10 + 10,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: index * 0.1,
        })
      })
    }

    // Scroll-triggered animations
    const setupScrollAnimations = () => {
      // Fade in sections on scroll
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Stagger animations for cards
      gsap.utils.toArray(".stagger-item").forEach((element: any, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8, rotationY: 45 },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Text reveal animations
      gsap.utils.toArray(".text-reveal").forEach((element: any) => {
        const text = element.textContent
        element.innerHTML = text
          .split("")
          .map((char: string) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
          .join("")

        gsap.fromTo(
          element.querySelectorAll(".char"),
          { opacity: 0, y: 50, rotationX: -90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.05,
            stagger: 0.02,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Parallax effects
      gsap.utils.toArray(".parallax").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }

    // Initialize animations
    createParticles()
    setupScrollAnimations()

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

export function GSAPParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  )
}

export function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!counterRef.current) return

    const counter = { value: 0 }
    gsap.to(counter, {
      value: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString()
        }
      },
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
  }, [target, duration])

  return <span ref={counterRef}>0</span>
}

export function MorphingShape() {
  const shapeRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!shapeRef.current) return

    const shapes = [
      "M50,10 L90,90 L10,90 Z", // Triangle
      "M10,50 Q50,10 90,50 Q50,90 10,50", // Circle-like
      "M10,10 L90,10 L90,90 L10,90 Z", // Square
      "M50,10 L80,30 L80,70 L50,90 L20,70 L20,30 Z", // Hexagon
    ]

    let currentIndex = 0

    const morphShape = () => {
      currentIndex = (currentIndex + 1) % shapes.length
      gsap.to(shapeRef.current, {
        attr: { d: shapes[currentIndex] },
        duration: 2,
        ease: "power2.inOut",
      })
    }

    const interval = setInterval(morphShape, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="absolute top-20 right-20 opacity-20">
      <path ref={shapeRef} d="M50,10 L90,90 L10,90 Z" fill="currentColor" />
    </svg>
  )
}
