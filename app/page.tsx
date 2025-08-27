import Navbar from "@/components/navbar"
import EnhancedHeroSection from "@/components/enhanced-hero-section"
import SpeakersSection from "@/components/speakers-section"
import TracksSection from "@/components/tracks-section"
import DatesSection from "@/components/dates-section"
import Footer from "@/components/footer"
import { InteractiveThemeCards, AnimatedStats } from "@/components/interactive-features"
import InteractiveCountdown from "@/components/interactive-countdown"
import InteractivePaperSubmission from "@/components/interactive-paper-submission"
import InteractiveSchedule from "@/components/interactive-schedule"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EnhancedHeroSection />

      {/* Enhanced About Section with Interactive Features */}
      <section id="about-conference" className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About the Conference</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ICETITSC-2025 brings together researchers, academicians, and industry professionals to explore
              cutting-edge developments in Information Technology and Symbolic Computation.
            </p>
          </div>

          <InteractiveThemeCards />

          <div className="mt-20 animate-on-scroll">
            <h3 className="text-3xl font-bold text-center mb-12 text-gradient">Conference Impact</h3>
            <AnimatedStats />
          </div>
        </div>
      </section>

      <InteractiveCountdown />
      <SpeakersSection />
      <TracksSection />
      <InteractiveSchedule />
      <InteractivePaperSubmission />
      <DatesSection />
      <Footer />
    </div>
  )
}
