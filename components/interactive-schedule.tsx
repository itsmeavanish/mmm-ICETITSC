"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User, Star } from "lucide-react"

const scheduleData = {
  "Day 1": [
    {
      time: "09:00 - 09:30",
      title: "Registration & Welcome Coffee",
      type: "registration",
      location: "Main Lobby",
      speaker: "",
      description: "Check-in and networking with fellow attendees",
    },
    {
      time: "09:30 - 10:30",
      title: "Opening Ceremony",
      type: "ceremony",
      location: "Main Auditorium",
      speaker: "Prof. R.K. Dwivedi",
      description: "Welcome address and conference overview",
    },
    {
      time: "10:30 - 11:30",
      title: "Keynote: Future of AI in Scientific Computing",
      type: "keynote",
      location: "Main Auditorium",
      speaker: "Dr. Sarah Chen",
      description: "Exploring the intersection of AI and computational science",
    },
    {
      time: "11:30 - 12:00",
      title: "Coffee Break",
      type: "break",
      location: "Exhibition Hall",
      speaker: "",
      description: "Networking and refreshments",
    },
    {
      time: "12:00 - 13:30",
      title: "Technical Session 1: Machine Learning",
      type: "technical",
      location: "Hall A",
      speaker: "Session Chair: Prof. Amit Verma",
      description: "Latest research in ML algorithms and applications",
    },
  ],
  "Day 2": [
    {
      time: "09:00 - 10:00",
      title: "Keynote: Symbolic Computation in Modern Mathematics",
      type: "keynote",
      location: "Main Auditorium",
      speaker: "Prof. Rajesh Kumar",
      description: "Advanced symbolic computation techniques and applications",
    },
    {
      time: "10:00 - 10:30",
      title: "Coffee Break",
      type: "break",
      location: "Exhibition Hall",
      speaker: "",
      description: "Networking and refreshments",
    },
    {
      time: "10:30 - 12:00",
      title: "Technical Session 2: Information Systems",
      type: "technical",
      location: "Hall B",
      speaker: "Session Chair: Dr. Priya Sharma",
      description: "Innovations in information technology and systems",
    },
    {
      time: "12:00 - 13:00",
      title: "Panel Discussion: Industry Perspectives",
      type: "panel",
      location: "Main Auditorium",
      speaker: "Industry Leaders",
      description: "Insights from technology industry experts",
    },
  ],
  "Day 3": [
    {
      time: "09:00 - 10:00",
      title: "Keynote: Quantum Computing and Future Technologies",
      type: "keynote",
      location: "Main Auditorium",
      speaker: "Prof. Michael Zhang",
      description: "Exploring quantum computing and emerging technologies",
    },
    {
      time: "10:00 - 10:30",
      title: "Coffee Break",
      type: "break",
      location: "Exhibition Hall",
      speaker: "",
      description: "Final networking opportunity",
    },
    {
      time: "10:30 - 12:00",
      title: "Technical Session 3: Emerging Technologies",
      type: "technical",
      location: "Hall C",
      speaker: "Session Chair: Dr. Emily Watson",
      description: "Cutting-edge research in emerging tech fields",
    },
    {
      time: "12:00 - 12:30",
      title: "Closing Ceremony & Awards",
      type: "ceremony",
      location: "Main Auditorium",
      speaker: "Organizing Committee",
      description: "Conference wrap-up and recognition of outstanding contributions",
    },
  ],
}

const sessionTypes = {
  keynote: { color: "bg-blue-500", label: "Keynote" },
  technical: { color: "bg-green-500", label: "Technical" },
  panel: { color: "bg-purple-500", label: "Panel" },
  ceremony: { color: "bg-orange-500", label: "Ceremony" },
  registration: { color: "bg-gray-500", label: "Registration" },
  break: { color: "bg-yellow-500", label: "Break" },
}

export default function InteractiveSchedule() {
  const [selectedDay, setSelectedDay] = useState("Day 1")
  const [favoritesSessions, setFavoriteSessions] = useState<string[]>([])

  const toggleFavorite = (sessionTitle: string) => {
    setFavoriteSessions((prev) =>
      prev.includes(sessionTitle) ? prev.filter((title) => title !== sessionTitle) : [...prev, sessionTitle],
    )
  }

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-6">Conference Schedule</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive three-day program featuring keynotes, technical sessions, and networking
            opportunities
          </p>
        </motion.div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-card rounded-lg p-2 border">
            {Object.keys(scheduleData).map((day) => (
              <Button
                key={day}
                onClick={() => setSelectedDay(day)}
                variant={selectedDay === day ? "default" : "ghost"}
                className="mx-1"
              >
                {day}
              </Button>
            ))}
          </div>
        </div>

        {/* Schedule Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {scheduleData[selectedDay as keyof typeof scheduleData].map((session, index) => (
              <motion.div
                key={`${selectedDay}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Time and Type */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-lg">{session.time}</span>
                        </div>
                        <Badge
                          className={`${sessionTypes[session.type as keyof typeof sessionTypes].color} text-white`}
                        >
                          {sessionTypes[session.type as keyof typeof sessionTypes].label}
                        </Badge>
                      </div>

                      {/* Session Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-card-foreground">{session.title}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(session.title)}
                            className="flex-shrink-0"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                favoritesSessions.includes(session.title)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </Button>
                        </div>

                        <p className="text-muted-foreground mb-3">{session.description}</p>

                        <div className="flex flex-wrap gap-4 text-sm">
                          {session.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{session.location}</span>
                            </div>
                          )}
                          {session.speaker && (
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-primary" />
                              <span>{session.speaker}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Favorites Summary */}
        {favoritesSessions.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="mt-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <h3 className="text-xl font-bold">Your Favorite Sessions ({favoritesSessions.length})</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {favoritesSessions.map((session) => (
                    <Badge key={session} variant="secondary" className="bg-primary/10 text-primary">
                      {session}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  We'll send you reminders for your favorite sessions via email
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}
