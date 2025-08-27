"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, FileText, Users } from "lucide-react"

const importantDates = [
  {
    icon: FileText,
    title: "Paper Submission Deadline",
    date: "January 15, 2025",
    description: "Submit your research papers and abstracts",
  },
  {
    icon: Users,
    title: "Notification of Acceptance",
    date: "February 10, 2025",
    description: "Authors will be notified about paper acceptance",
  },
  {
    icon: FileText,
    title: "Camera-Ready Submission",
    date: "February 25, 2025",
    description: "Final version of accepted papers due",
  },
  {
    icon: Calendar,
    title: "Early Bird Registration",
    date: "February 28, 2025",
    description: "Register early for discounted rates",
  },
  {
    icon: Clock,
    title: "Conference Dates",
    date: "March 15-17, 2025",
    description: "Three days of presentations and networking",
  },
]

export default function DatesSection() {
  return (
    <section id="dates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Important Dates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mark your calendar with these crucial deadlines and dates for ICETITSC-2025
          </p>
        </motion.div>

        <div className="space-y-6">
          {importantDates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
                        <p className="text-lg font-bold">{item.date}</p>
                      </div>
                    </div>
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
