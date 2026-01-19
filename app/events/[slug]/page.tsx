"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getEventBySlug } from "@/lib/events"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const event = getEventBySlug(params.slug as string)

  if (!event) {
    return (
      <main className="min-h-screen bg-background">
        <Header language={language} onLanguageChange={setLanguage} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "Event Not Found" : "कार्यक्रम नहीं मिला"}
          </h1>
          <Link
            href="/"
            className="text-accent hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "en" ? "Back to Home" : "होम पर वापस जाएं"}
          </Link>
        </div>
        <Footer language={language} />
      </main>
    )
  }

  const rules = language === "en" ? event.rulesEn : event.rulesHi
  const title = language === "en" ? event.titleEn : event.titleHi
  const description = language === "en" ? event.descriptionEn : event.descriptionHi

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "en" ? "Back to Events" : "कार्यक्रमों पर वापस जाएं"}
          </Link>
        </motion.div>

        {/* Event Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 shadow-xl">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                {title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-2">{event.date}</p>
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm sm:text-base">
                {language === "en" ? "Entry Fee" : "प्रवेश शुल्क"}: {event.fee}
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
            {language === "en" ? "Event Details & Rules" : "कार्यक्रम विवरण और नियम"}
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {rules.map((rule, index) => {
              // Check if this is a section header (starts with emoji or is empty)
              if (rule === "" || rule.trim() === "") {
                return <div key={index} className="h-4" />
              }

              const isSectionHeader = rule.match(/^[📝🕒💼🎨🚫🏆]/)
              const isBulletPoint = rule.startsWith("•")
              const isNumbered = /^\d+\./.test(rule.trim())

              if (isSectionHeader) {
                return (
                  <h3
                    key={index}
                    className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 pt-6 border-t border-accent/30"
                  >
                    {rule}
                  </h3>
                )
              }

              return (
                <div
                  key={index}
                  className={`flex gap-3 sm:gap-4 ${
                    isBulletPoint || isNumbered ? "items-start" : "items-center"
                  }`}
                >
                  {isBulletPoint ? (
                    <span className="text-accent font-bold text-lg sm:text-xl mt-1 flex-shrink-0">
                      •
                    </span>
                  ) : isNumbered ? (
                    <span className="text-accent font-bold text-base sm:text-lg mt-1 flex-shrink-0">
                      {rule.match(/^\d+\./)?.[0]}
                    </span>
                  ) : (
                    <span className="text-accent min-w-fit mt-1">✓</span>
                  )}
                  <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {isNumbered ? rule.replace(/^\d+\.\s*/, "") : rule}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeZhflftQ88Wr0r6GM-VBov0vfFxYROeIWNSKUcIZyDce__8w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl active:scale-95"
          >
            {language === "en" ? "Register Now" : "अभी रजिस्टर करें"}
          </a>
        </motion.div>
      </div>

      <Footer language={language} />
    </main>
  )
}
