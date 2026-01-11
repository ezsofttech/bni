"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface EventCardProps {
  event: any
  language: "en" | "hi"
  index: number
}

export default function EventCard({ event, language, index }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const getIconColor = () => {
    if (event.titleEn.includes("Singing")) return "bg-blue-500/30 text-blue-500"
    if (event.titleEn.includes("Dance")) return "bg-pink-500/30 text-pink-500"
    if (event.titleEn.includes("Painting") || event.titleEn.includes("Coloring") || event.titleEn.includes("Rangoli"))
      return "bg-purple-500/30 text-purple-500"
    if (event.titleEn.includes("Cooking")) return "bg-orange-500/30 text-orange-500"
    if (event.titleEn.includes("Science")) return "bg-cyan-500/30 text-cyan-500"
    if (event.titleEn.includes("Marathon")) return "bg-green-500/30 text-green-500"
    if (event.titleEn.includes("Startup")) return "bg-yellow-500/30 text-yellow-500"
    if (event.titleEn.includes("Yoga")) return "bg-red-500/30 text-red-500"
    if (event.titleEn.includes("Job")) return "bg-indigo-500/30 text-indigo-500"
    return "bg-accent/30 text-accent"
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/30 h-full flex flex-col cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:active:scale-100"
        animate={{
          borderColor: isHovered ? "var(--accent)" : "var(--accent-30%)",
          boxShadow: isHovered ? "0 25px 50px rgba(212, 175, 55, 0.15)" : "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
        onClick={(e) => {
          if (window.innerWidth >= 640) {
            setIsExpanded(!isExpanded)
          }
        }}
      >
        <div className="relative w-full h-40 sm:h-56 overflow-hidden bg-gradient-to-br from-accent/20 to-background/30">
          <Image
            src={event.image || "/placeholder.svg?height=224&width=400&query=event"}
            alt={language === "en" ? event.titleEn : event.titleHi}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          <motion.div
            className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-bold rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : -5 }}
            transition={{ duration: 0.3 }}
          >
            {language === "en" ? "Featured" : "विशेष"}
          </motion.div>
        </div>

        {/* Content section */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          {/* Background gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10">
            {event.iconImage && (
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 shadow-lg flex-shrink-0 border border-border/50">
                <Image
                  src={event.iconImage}
                  alt={language === "en" ? event.titleEn : event.titleHi}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2 leading-snug">
              {language === "en" ? event.titleEn : event.titleHi}
            </h3>

            <p className="text-accent font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">{event.date}</p>

            <motion.p
              initial={{ maxHeight: "3rem", overflow: "hidden" }}
              animate={{
                maxHeight: window.innerWidth < 640 || isHovered || isExpanded ? "100%" : "3rem",
              }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6"
            >
              {language === "en" ? event.descriptionEn : event.descriptionHi}
            </motion.p>

            {/* Rules section */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: window.innerWidth < 640 || isHovered || isExpanded ? 1 : 0,
                height: window.innerWidth < 640 || isHovered || isExpanded ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 sm:pt-4 border-t border-accent/20">
                <p className="font-semibold text-foreground mb-2 sm:mb-3 text-xs sm:text-sm">
                  {language === "en" ? "Key Details:" : "मुख्य विवरण:"}
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-xs text-muted-foreground">
                  {(language === "en" ? event.rulesEn : event.rulesHi).map((rule: string, idx: number) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-accent min-w-fit">✓</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Entry fee */}
            <motion.div
              className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-accent/20 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-foreground font-semibold text-xs sm:text-sm">
                {language === "en" ? "Entry Fee" : "प्रवेश शुल्क"}
              </span>
              <span className="text-lg sm:text-xl font-bold text-accent bg-accent/20 px-3 py-1 rounded-lg">
                {event.fee}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
