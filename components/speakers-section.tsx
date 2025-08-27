"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const speakers = [
  {
    name: "Dr. Sarah Chen",
    title: "Professor of Computer Science",
    institution: "MIT",
    expertise: "Machine Learning",
    image: "/professional-woman-scientist.png",
  },
  {
    name: "Prof. Rajesh Kumar",
    title: "Director of AI Research",
    institution: "IIT Delhi",
    expertise: "Artificial Intelligence",
    image: "/professional-indian-male-professor.png",
  },
  {
    name: "Dr. Emily Watson",
    title: "Senior Research Scientist",
    institution: "Google Research",
    expertise: "Symbolic Computation",
    image: "/professional-woman-researcher.png",
  },
  {
    name: "Prof. Michael Zhang",
    title: "Department Head",
    institution: "Stanford University",
    expertise: "Quantum Computing",
    image: "/professional-asian-male-professor.png",
  },
]

export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Keynote Speakers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from world-renowned experts and thought leaders in the field of Information Technology and Symbolic
            Computation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-muted-foreground mb-2">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{speaker.institution}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {speaker.expertise}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
