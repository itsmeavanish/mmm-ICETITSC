"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, CreditCard, Users, Award, Globe, Calendar } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useGSAPAnimations } from "@/components/gsap-animations"

const registrationTypes = [
  {
    type: "Student",
    earlyBird: "₹2,500",
    regular: "₹3,000",
    features: [
      "Access to all sessions",
      "Conference materials",
      "Lunch and refreshments",
      "Certificate of participation",
      "Student networking events",
    ],
    icon: Users,
    popular: false,
  },
  {
    type: "Academic",
    earlyBird: "₹4,500",
    regular: "₹5,500",
    features: [
      "Access to all sessions",
      "Conference materials",
      "Lunch and refreshments",
      "Certificate of participation",
      "Academic networking dinner",
      "Proceedings (digital)",
    ],
    icon: Award,
    popular: true,
  },
  {
    type: "Industry",
    earlyBird: "₹6,500",
    regular: "₹7,500",
    features: [
      "Access to all sessions",
      "Conference materials",
      "Lunch and refreshments",
      "Certificate of participation",
      "Industry networking events",
      "Proceedings (digital + print)",
      "Exhibition access",
    ],
    icon: CreditCard,
    popular: false,
  },
  {
    type: "International",
    earlyBird: "$150",
    regular: "$200",
    features: [
      "Access to all sessions",
      "Conference materials",
      "Lunch and refreshments",
      "Certificate of participation",
      "Welcome reception",
      "Proceedings (digital + print)",
      "Cultural tour (optional)",
    ],
    icon: Globe,
    popular: false,
  },
]

const importantDates = [
  { event: "Early Bird Registration", date: "February 28, 2025", status: "upcoming" },
  { event: "Regular Registration", date: "March 10, 2025", status: "upcoming" },
  { event: "On-site Registration", date: "March 15, 2025", status: "upcoming" },
]

export default function RegistrationPage() {
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
              <span className="text-gradient bg-gradient-to-r from-white to-green-200 bg-clip-text">Registration</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Join us at ICETITSC-2025 and be part of the future of Information Technology and Symbolic Computation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Registration Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the registration category that best suits your needs and enjoy early bird discounts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationTypes.map((regType, index) => (
              <motion.div
                key={regType.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="stagger-item relative"
              >
                {regType.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm ${
                    regType.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <regType.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{regType.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm text-muted-foreground">Early Bird</span>
                          <div className="text-3xl font-bold text-primary">{regType.earlyBird}</div>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Regular</span>
                          <div className="text-xl font-semibold text-muted-foreground line-through">
                            {regType.regular}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {regType.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button className="w-full" variant={regType.popular ? "default" : "outline"}>
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Registration Form</h2>
            <p className="text-xl text-muted-foreground">Fill out the form below to register for ICETITSC-2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input id="organization" placeholder="Enter your organization" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation *</Label>
                      <Input id="designation" placeholder="Enter your designation" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registrationType">Registration Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select registration type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="industry">Industry</SelectItem>
                        <SelectItem value="international">International</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">Special Requirements</Label>
                    <Textarea
                      id="specialRequirements"
                      placeholder="Any dietary restrictions, accessibility needs, or other requirements"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to conference updates and newsletters
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Complete Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Registration Deadlines</h2>
            <p className="text-xl text-muted-foreground">Important dates to remember for conference registration</p>
          </motion.div>

          <div className="space-y-6">
            {importantDates.map((date, index) => (
              <motion.div
                key={date.event}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{date.event}</h3>
                          <p className="text-muted-foreground">Don't miss this important deadline</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                          <p className="font-bold">{date.date}</p>
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

      <Footer />
    </div>
  )
}
