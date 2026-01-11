"use client"

import { motion } from "framer-motion"
import EventCard from "./event-card"
import { events } from "@/data/events"

interface EventGridProps {
  language: "en" | "hi"
}

export default function EventGrid({ language }: EventGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="relative w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Events & Activities" : "कार्यक्रम और गतिविधियां"}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <EventCard key={index} event={event} language={language} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
