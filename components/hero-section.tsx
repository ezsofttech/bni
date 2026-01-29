"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

interface HeroSectionProps {
  language: "en" | "hi"
}

export default function HeroSection({ language }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      })
    }, containerRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative w-full pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-20 overflow-hidden z-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1533542632746-8e3f6f06bec6?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event stage backdrop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 z-10">
        <motion.div
          className="text-center hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance drop-shadow-lg leading-tight">
            {language === "en" ? "BNI Bilaspur Vyapar Evam Udyog Mela 2026" : "बीएनआई बिलासपुर व्यापार एवं उद्योग मेला 2026"}
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-gray-100 mb-4 sm:mb-6 max-w-3xl mx-auto drop-shadow-md leading-relaxed px-2">
            {language === "en"
              ? "Where it is for everyone - Business, Innovation, Entertainment!"
              : "जहाँ सभी के लिए है - व्यापार, नवाचार, मनोरंजन!"}
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-300 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-lg px-2">
            {language === "en" ? "Much More!" : "बहुत कुछ!"}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-lg font-semibold shadow-lg text-sm sm:text-base w-full sm:w-auto">
              {language === "en" ? "Science College Ground, Sarkanda, Bilaspur" : "साईंस कॉलेज मैदान, सरकण्डा, बिलासपुर"}
            </div>
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-accent/20 text-white rounded-lg font-semibold border border-accent/40 backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto">
              {language === "en" ? "Jan 29 - Feb 3, 2026" : "29 जनवरी - 3 फरवरी, 2026"}
            </div>
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-accent/20 text-white rounded-lg font-semibold border border-accent/40 backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto">
              {language === "en" ? "10:00 AM - 9:00 PM" : "प्रातः 10:00 - रात्रि 9:00"}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background circles - hidden on mobile for performance  */}
      <div className="absolute top-20 left-10 w-40 sm:w-64 h-40 sm:h-64 bg-accent/10 rounded-full blur-3xl animate-pulse hidden sm:block" />
      <div className="absolute bottom-20 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-accent/5 rounded-full blur-3xl animate-pulse hidden sm:block" />
    </section>
  )
}
