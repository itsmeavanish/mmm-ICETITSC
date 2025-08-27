"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import { GSAPParticles, MorphingShape, AnimatedCounter } from "./gsap-animations"

export default function EnhancedHeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !imageRef.current) return

    // GSAP Timeline for complex animations
    const tl = gsap.timeline()

    // Animate hero background
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out" })

    // Animate title with typewriter effect
    const titleText = titleRef.current.textContent || ""
    titleRef.current.textContent = ""

    tl.to(
      titleRef.current,
      {
        text: titleText,
        duration: 2,
        ease: "none",
      },
      "-=1",
    )

    // Animate image with 3D rotation
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotationY: -45,
        z: -100,
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
      },
      "-=1.5",
    )

    // Floating animation for cards
    gsap.utils.toArray(".info-card").forEach((card: any, index) => {
      gsap.to(card, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.3,
      })
    })

    // Magnetic effect for buttons
    gsap.utils.toArray(".magnetic-btn").forEach((btn: any) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        })
      }

      btn.addEventListener("mousemove", handleMouseMove)
      btn.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        btn.removeEventListener("mousemove", handleMouseMove)
        btn.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [])

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GSAPParticles />
      <MorphingShape />

      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/10 rotate-45 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Conference Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30"
            >
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white font-semibold">ICETITSC-2025</span>
            </motion.div>

            {/* Main Title with GSAP text animation */}
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-reveal"
              >
                International Conference on Emerging Trends in IT & Symbolic Computation
              </h1>
            </div>

            {/* Organizer Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl text-white/90 font-medium">organised by</p>
              <div className="space-y-2">
                <p className="text-lg text-white font-semibold">
                  Department of Information Technology & Computer Application and Department of Mathematics & Scientific
                  Computing
                </p>
                <p className="text-lg text-white/90 font-medium">
                  Madan Mohan Malaviya University of Technology Gorakhpur, U.P., India
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="magnetic-btn bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="magnetic-btn border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg bg-transparent backdrop-blur-sm"
              >
                Submit Paper
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* University Building Image with 3D effect */}
            <div ref={imageRef} className="relative">
              <div className="relative transform-gpu perspective-1000">
                <Image
                  src="/images/university-building.png"
                  alt="MMMUT Building"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl glass-effect"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Stats Cards with floating animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="info-card glass-effect rounded-lg p-4 text-center">
                <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Conference Days</p>
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter target={3} />
                </p>
              </div>
              <div className="info-card glass-effect rounded-lg p-4 text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Expected Participants</p>
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter target={500} />+
                </p>
              </div>
              <div className="info-card glass-effect rounded-lg p-4 text-center">
                <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold">Tracks</p>
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter target={4} />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
