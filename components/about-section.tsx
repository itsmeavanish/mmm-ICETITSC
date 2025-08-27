"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Zap } from "lucide-react"

const themes = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine Learning, Deep Learning, Neural Networks, and AI Applications in various domains",
  },
  {
    icon: Code,
    title: "Symbolic Computation",
    description: "Computer Algebra Systems, Mathematical Software, and Algorithmic Problem Solving",
  },
  {
    icon: Database,
    title: "Information Technology",
    description: "Big Data Analytics, Cloud Computing, IoT, and Emerging IT Paradigms",
  },
  {
    icon: Zap,
    title: "Emerging Technologies",
    description: "Blockchain, Quantum Computing, Edge Computing, and Future Tech Trends",
  },
]

export default function AboutSection() {
  return (
    <section id="about-conference" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About the Conference</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ICETITSC-2025 brings together researchers, academicians, and industry professionals to explore cutting-edge
            developments in Information Technology and Symbolic Computation. Join us for three days of knowledge
            sharing, networking, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <theme.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-card-foreground">{theme.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{theme.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Why Attend ICETITSC-2025?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Network & Collaborate</h4>
                  <p className="opacity-90">
                    Connect with leading researchers and industry experts from around the world
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Latest Research</h4>
                  <p className="opacity-90">Discover cutting-edge research and emerging trends in IT and computation</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Career Growth</h4>
                  <p className="opacity-90">Enhance your professional development and explore new opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
