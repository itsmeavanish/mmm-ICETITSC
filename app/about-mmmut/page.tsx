"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Award, BookOpen, Globe, MapPin } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useGSAPAnimations } from "@/components/gsap-animations"

const universityStats = [
  { icon: Users, label: "Students", value: "15,000", suffix: "+" },
  { icon: BookOpen, label: "Programs", value: "50", suffix: "+" },
  { icon: Award, label: "Years of Excellence", value: "25", suffix: "" },
  { icon: Globe, label: "International Collaborations", value: "30", suffix: "+" },
]

const departments = [
  "Computer Science & Engineering",
  "Information Technology",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Mathematics & Scientific Computing",
  "Physics",
  "Chemistry",
  "Management Studies",
  "Applied Sciences",
]

const facilities = [
  {
    title: "State-of-the-Art Laboratories",
    description: "Modern research facilities equipped with latest technology and instruments",
    icon: Building,
  },
  {
    title: "Digital Library",
    description: "Extensive collection of books, journals, and digital resources",
    icon: BookOpen,
  },
  {
    title: "Research Centers",
    description: "Dedicated centers for advanced research in emerging technologies",
    icon: Award,
  },
  {
    title: "International Partnerships",
    description: "Collaborations with universities and institutions worldwide",
    icon: Globe,
  },
]

export default function AboutMMMUTPage() {
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
              About <span className="text-gradient bg-gradient-to-r from-white to-green-200 bg-clip-text">MMMUT</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Madan Mohan Malaviya University of Technology, Gorakhpur - A premier institution fostering innovation,
              research, and academic excellence in engineering and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* University Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gradient mb-6">Excellence in Education</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Established in 2013, MMMUT Gorakhpur has rapidly emerged as a leading technical university in Uttar
                Pradesh. Named after the great educationist and freedom fighter Pandit Madan Mohan Malaviya, the
                university embodies his vision of holistic education and character building.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The university is committed to providing quality technical education, fostering research and innovation,
                and developing skilled professionals who can contribute to the nation's technological advancement.
              </p>
              <div className="flex items-center gap-3 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Gorakhpur, Uttar Pradesh, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/university-building.png"
                alt="MMMUT Campus"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Statistics */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">University at a Glance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the impressive scale and impact of MMMUT through these key statistics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="stagger-item"
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Academic Departments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MMMUT offers diverse academic programs across multiple engineering and technology disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((department, index) => (
              <motion.div
                key={department}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stagger-item"
              >
                <Badge
                  variant="outline"
                  className="w-full p-4 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                >
                  {department}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">World-Class Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MMMUT provides state-of-the-art infrastructure and facilities to support learning and research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="stagger-item"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                      </div>
                    </div>
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
