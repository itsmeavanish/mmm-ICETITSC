"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, User, Award } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useGSAPAnimations } from "@/components/gsap-animations"

const organizers = [
  {
    name: "Prof. Dr. Rajesh Kumar Singh",
    title: "Conference Chair",
    department: "Department of Information Technology",
    institution: "MMMUT Gorakhpur",
    email: "rajesh.singh@mmmut.ac.in",
    phone: "+91-551-2273958",
    image: "/professional-indian-male-professor.png",
    expertise: ["Information Systems", "Database Management", "Software Engineering"],
  },
  {
    name: "Dr. Priya Sharma",
    title: "Program Chair",
    department: "Department of Mathematics & Scientific Computing",
    institution: "MMMUT Gorakhpur",
    email: "priya.sharma@mmmut.ac.in",
    phone: "+91-551-2273959",
    image: "/professional-woman-researcher.png",
    expertise: ["Symbolic Computation", "Mathematical Modeling", "Algorithm Design"],
  },
  {
    name: "Prof. Amit Verma",
    title: "Technical Program Chair",
    department: "Department of Computer Science",
    institution: "MMMUT Gorakhpur",
    email: "amit.verma@mmmut.ac.in",
    phone: "+91-551-2273960",
    image: "/professional-asian-male-professor.png",
    expertise: ["Machine Learning", "Artificial Intelligence", "Data Science"],
  },
  {
    name: "Dr. Sunita Gupta",
    title: "Publication Chair",
    department: "Department of Information Technology",
    institution: "MMMUT Gorakhpur",
    email: "sunita.gupta@mmmut.ac.in",
    phone: "+91-551-2273961",
    image: "/professional-woman-scientist.png",
    expertise: ["Computer Networks", "Cybersecurity", "IoT Systems"],
  },
]

const committees = [
  {
    title: "Steering Committee",
    members: [
      "Prof. R.K. Dwivedi - Vice Chancellor, MMMUT",
      "Prof. S.P. Singh - Registrar, MMMUT",
      "Prof. A.K. Mishra - Dean, Faculty of Engineering",
      "Prof. M.K. Sharma - Head, Department of IT",
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      "Prof. John Smith - MIT, USA",
      "Prof. Maria Garcia - University of Barcelona, Spain",
      "Prof. Hiroshi Tanaka - Tokyo Institute of Technology, Japan",
      "Prof. Sarah Johnson - Oxford University, UK",
    ],
  },
  {
    title: "Local Organizing Committee",
    members: [
      "Dr. Vikash Kumar - Registration Chair",
      "Dr. Neha Agarwal - Publicity Chair",
      "Dr. Rohit Sharma - Finance Chair",
      "Dr. Kavita Singh - Hospitality Chair",
    ],
  },
]

export default function OrganizersPage() {
  useGSAPAnimations()

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Conference{" "}
              <span className="text-gradient bg-gradient-to-r from-white to-green-200 bg-clip-text">Organizers</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Meet the dedicated team of academics and researchers organizing ICETITSC-2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Organizers */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Organizing Committee</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading experts in their respective fields, committed to making ICETITSC-2025 a success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizers.map((organizer, index) => (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="stagger-item"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={organizer.image || "/placeholder.svg"}
                          alt={organizer.name}
                          width={150}
                          height={150}
                          className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">{organizer.name}</h3>
                        <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">
                          {organizer.title}
                        </Badge>
                        <p className="text-muted-foreground mb-2">{organizer.department}</p>
                        <p className="text-sm text-muted-foreground mb-4">{organizer.institution}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="text-sm">{organizer.email}</span>
                          </div>
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            <Phone className="w-4 h-4 text-primary" />
                            <span className="text-sm">{organizer.phone}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Expertise:</h4>
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {organizer.expertise.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
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

      {/* Committees */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Conference Committees</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Various specialized committees working together to ensure the success of ICETITSC-2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="stagger-item"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{committee.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {committee.members.map((member, memberIndex) => (
                        <motion.li
                          key={member}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + memberIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">{member}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
