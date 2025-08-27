"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Conference Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">ICETITSC-2025</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              International Conference on Emerging Trends in Information Technology & Symbolic Computation
            </p>
            <p className="text-background/80">
              March 15-17, 2025
              <br />
              MMMUT Gorakhpur, U.P., India
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about-conference" className="text-background/80 hover:text-primary transition-colors">
                  About Conference
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-background/80 hover:text-primary transition-colors">
                  Keynote Speakers
                </a>
              </li>
              <li>
                <a href="#tracks" className="text-background/80 hover:text-primary transition-colors">
                  Conference Tracks
                </a>
              </li>
              <li>
                <a href="#dates" className="text-background/80 hover:text-primary transition-colors">
                  Important Dates
                </a>
              </li>
              <li>
                <a href="#registration" className="text-background/80 hover:text-primary transition-colors">
                  Registration
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">icetitsc2025@mmmut.ac.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">+91-551-2273958</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/80">MMMUT Gorakhpur, U.P., India</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <Button
                size="icon"
                variant="outline"
                className="border-background/20 hover:bg-primary hover:border-primary bg-transparent"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-background/20 hover:bg-primary hover:border-primary bg-transparent"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-background/20 hover:bg-primary hover:border-primary bg-transparent"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-background/20 hover:bg-primary hover:border-primary bg-transparent"
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-background/80 text-sm">Stay updated with the latest conference news and announcements</p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8 text-center"
        >
          <p className="text-background/60">© 2025 ICETITSC. All rights reserved. | Organized by MMMUT Gorakhpur</p>
        </motion.div>
      </div>
    </footer>
  )
}
