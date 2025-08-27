"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-primary opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* University Building Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-4xl mx-auto">
              <Image
                src="/images/university-building.png"
                alt="Madan Mohan Malaviya University of Technology building"
                width={1200}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl glass-effect"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="block">International Conference on</span>
            <span className="block text-gradient bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Emerging Trends in IT
            </span>
            <span className="block text-gradient bg-gradient-to-r from-green-200 to-white bg-clip-text text-transparent">
              & Symbolic Computation
            </span>
          </motion.h1>

          {/* Conference Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white">ICETITSC-2025</h2>
            </div>
          </motion.div>

          {/* Conference Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl text-white/90 font-medium">organised by</p>
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-white font-semibold max-w-4xl mx-auto">
                Department of Information Technology & Computer Application and Department of Mathematics & Scientific
                Computing
              </p>
              <p className="text-lg text-white/90 font-medium">
                Madan Mohan Malaviya University of Technology Gorakhpur, U.P., India
              </p>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <div className="glass-effect rounded-lg px-6 py-4 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-semibold">Conference Dates</p>
                <p className="text-white/80 text-sm">March 15-17, 2025</p>
              </div>
            </div>
            <div className="glass-effect rounded-lg px-6 py-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-semibold">Location</p>
                <p className="text-white/80 text-sm">MMMUT Gorakhpur</p>
              </div>
            </div>
            <div className="glass-effect rounded-lg px-6 py-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-semibold">Expected</p>
                <p className="text-white/80 text-sm">500+ Participants</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg">
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg bg-transparent"
            >
              Submit Paper
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
