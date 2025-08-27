"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Conference",
    href: "/#about-conference",
    dropdown: [
      { name: "Overview", href: "/#overview" },
      { name: "Themes", href: "/#themes" },
      { name: "Call for Papers", href: "/#call-for-papers" },
    ],
  },
  {
    name: "About MMMUT",
    href: "/about-mmmut",
    dropdown: [
      { name: "University", href: "/about-mmmut#university" },
      { name: "Campus", href: "/about-mmmut#campus" },
      { name: "Facilities", href: "/about-mmmut#facilities" },
    ],
  },
  { name: "Organizers", href: "/organizers" },
  {
    name: "Keynote Speakers",
    href: "/#speakers",
    dropdown: [
      { name: "Invited Speakers", href: "/#invited-speakers" },
      { name: "Session Chairs", href: "/#session-chairs" },
    ],
  },
  {
    name: "Tracks",
    href: "/#tracks",
    dropdown: [
      { name: "AI & Machine Learning", href: "/#ai-ml" },
      { name: "Symbolic Computation", href: "/#symbolic" },
      { name: "Information Technology", href: "/#it" },
    ],
  },
  { name: "Important Dates", href: "/#dates" },
  { name: "Registration", href: "/registration" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-glow">
                  <div className="text-primary-foreground text-xs font-bold text-center leading-tight">
                    <div>MMMUT</div>
                    <div>2025</div>
                  </div>
                </div>
              </div>
              <div className={`transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
                <h1 className="text-2xl font-bold text-gradient">ICETITSC-</h1>
                <h1 className="text-2xl font-bold text-gradient">2025</h1>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 ${
                      isScrolled
                        ? "text-foreground hover:text-primary hover:bg-muted"
                        : "text-white hover:text-primary hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-200" />}
                  </Link>
                </motion.div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <motion.div key={dropdownItem.name} whileHover={{ x: 5 }}>
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-card-foreground hover:bg-muted transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-card border border-border rounded-lg overflow-hidden"
            >
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-card-foreground hover:bg-muted transition-colors border-b border-border last:border-b-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="bg-muted">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
