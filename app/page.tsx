"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import DetailsSection from "@/components/details-section"
import ThemesSection from "@/components/themes-section"
import HighlightsSection from "@/components/highlights-section"
import StallCategoriesSection from "@/components/stall-categories-section"
import CompaniesSection from "@/components/companies-section"
import EventGrid from "@/components/event-grid"
import ScheduleSection from "@/components/schedule-section"
import LocationSection from "@/components/location-section"
import SocialImpactSection from "@/components/social-impact-section"
import ContactSection from "@/components/contact-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      {/* <DetailsSection language={language} /> */}
      {/* <ThemesSection language={language} /> */}
      {/* <HighlightsSection language={language} /> */}
      {/* <StallCategoriesSection language={language} /> */}
      {/* <CompaniesSection language={language} /> */}
      <EventGrid language={language} />
      <ScheduleSection language={language} />
      <LocationSection language={language} />
      {/* <SocialImpactSection language={language} /> */}
      {/* <ContactSection language={language} /> */}
      <FAQSection language={language} />
      <Footer language={language} />
      </div>
    </main>
  )
}
