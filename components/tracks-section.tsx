"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tracks = [
  {
    title: "Artificial Intelligence & Machine Learning",
    topics: [
      "Deep Learning and Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Ethics and Explainable AI",
    ],
    color: "bg-blue-500",
  },
  {
    title: "Symbolic Computation",
    topics: [
      "Computer Algebra Systems",
      "Mathematical Software",
      "Algorithmic Problem Solving",
      "Symbolic Integration",
      "Automated Theorem Proving",
    ],
    color: "bg-purple-500",
  },
  {
    title: "Information Technology",
    topics: [
      "Big Data Analytics",
      "Cloud Computing",
      "Internet of Things (IoT)",
      "Cybersecurity",
      "Software Engineering",
    ],
    color: "bg-green-500",
  },
  {
    title: "Emerging Technologies",
    topics: ["Blockchain Technology", "Quantum Computing", "Edge Computing", "Augmented Reality", "5G and Beyond"],
    color: "bg-orange-500",
  },
]

export default function TracksSection() {
  return (
    <section id="tracks" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Conference Tracks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore diverse research areas and present your work in specialized tracks designed to foster innovation and
            collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-4 h-4 rounded-full ${track.color}`} />
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {track.topics.map((topic, topicIndex) => (
                      <motion.div
                        key={topic}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + topicIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="mr-2 mb-2">
                          {topic}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
