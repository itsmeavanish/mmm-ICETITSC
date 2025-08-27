"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Zap, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"

const interactiveThemes = [
  {
    id: "ai",
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Explore the frontiers of machine learning and neural networks",
    color: "from-blue-500 to-purple-600",
    details: [
      "Deep Learning Architectures",
      "Natural Language Processing",
      "Computer Vision Applications",
      "Reinforcement Learning",
      "AI Ethics and Explainability",
    ],
  },
  {
    id: "symbolic",
    icon: Code,
    title: "Symbolic Computation",
    description: "Mathematical software and algorithmic problem solving",
    color: "from-green-500 to-teal-600",
    details: [
      "Computer Algebra Systems",
      "Automated Theorem Proving",
      "Symbolic Integration",
      "Mathematical Modeling",
      "Algorithm Optimization",
    ],
  },
  {
    id: "it",
    icon: Database,
    title: "Information Technology",
    description: "Big data, cloud computing, and emerging IT paradigms",
    color: "from-orange-500 to-red-600",
    details: [
      "Big Data Analytics",
      "Cloud Computing Architectures",
      "Internet of Things (IoT)",
      "Cybersecurity Solutions",
      "Software Engineering Practices",
    ],
  },
  {
    id: "emerging",
    icon: Zap,
    title: "Emerging Technologies",
    description: "Blockchain, quantum computing, and future innovations",
    color: "from-purple-500 to-pink-600",
    details: ["Blockchain Applications", "Quantum Computing", "Edge Computing", "Augmented Reality", "5G and Beyond"],
  },
]

export function InteractiveThemeCards() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // GSAP hover animations for cards
    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 5,
          z: 50,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [])

  const handleThemeClick = (themeId: string) => {
    setActiveTheme(activeTheme === themeId ? null : themeId)
  }

  return (
    <div className="space-y-8">
      {/* Interactive Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? "Pause" : "Play"} Demo
        </Button>
        <Button variant="outline" size="sm" onClick={() => setIsMuted(!isMuted)} className="flex items-center gap-2">
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          {isMuted ? "Unmute" : "Mute"}
        </Button>
      </div>

      {/* Theme Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interactiveThemes.map((theme, index) => (
          <motion.div key={theme.id} ref={(el) => (cardRefs.current[index] = el)} className="stagger-item" layout>
            <Card
              className="relative overflow-hidden cursor-pointer group border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
              onClick={() => handleThemeClick(theme.id)}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${theme.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <theme.icon className="w-8 h-8 text-white" />
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                      activeTheme === theme.id ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {theme.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{theme.description}</p>

                {/* Expandable Details */}
                <AnimatePresence>
                  {activeTheme === theme.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold mb-3 text-primary">Key Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {theme.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detail}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: detailIndex * 0.1 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {detail}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-5`} />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function AnimatedStats() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { label: "Research Papers", value: 150, suffix: "+" },
    { label: "International Speakers", value: 25, suffix: "" },
    { label: "Universities", value: 50, suffix: "+" },
    { label: "Countries", value: 15, suffix: "" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 2, delay: index * 0.2 }}
            >
              {isVisible && (
                <motion.span
                  initial={{ textContent: "0" }}
                  animate={{ textContent: stat.value.toString() }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              )}
              {stat.suffix}
            </motion.span>
          </div>
          <p className="text-muted-foreground font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
