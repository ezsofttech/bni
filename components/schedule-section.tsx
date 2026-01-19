"use client"

import { motion } from "framer-motion"

interface ScheduleSectionProps {
  language: "en" | "hi"
}

export default function ScheduleSection({ language }: ScheduleSectionProps) {
  const schedule = [
    {
      dayEn: "Thursday | 29 January",
      dayHi: "गुरुवार | 29 जनवरी",
      subtitleEn: "Bharatiya Samachar Day",
      subtitleHi: "भारतीय समाचार दिवस",
      events: [
        "Opening Dance by Gayatri",
        "Duet Dance by Dr Shalini Menon",
        "Inaugural Opening Ceremony by Chief Guest",
        "Lok Kala Manch (Folk Performances)",
        "Balloon Show",
        "Ram Bhajan by Shruti Prabala",
        "Fire Show (Back Stage)",
      ],
    },
    {
      dayEn: "Friday | 30 January",
      dayHi: "शुक्रवार | 30 जनवरी",
      subtitleEn: "",
      subtitleHi: "",
      events: [
        "Bilaspur Got Talent",
        "Celebrity Appearance",
        "CG Vyapar Ratna Awards (60 Recipients)",
        "Magic Show by A Lal sponsored by Vidya Construction",
        "11 Savitri Bai Phule Award (Nari Samman)",
      ],
    },
    {
      dayEn: "Saturday | 31 January",
      dayHi: "शनिवार | 31 जनवरी",
      subtitleEn: "",
      subtitleHi: "",
      events: [
        "Body Building Show (not sure)",
        "IIFT presents Glamora 3.0 Fashion Show",
        "Vision of Bilaspur 3.0 (Talk Show with Dr Devendra Singh)",
        "11 CG Golden Couple Award",
      ],
    },
    {
      dayEn: "Sunday | 1 February",
      dayHi: "रविवार | 1 फरवरी",
      subtitleEn: "Special Attractions Day",
      subtitleHi: "विशेष आकर्षण दिवस",
      events: [
        "Haribhoomi presents in morning",
        "Kids Fancy Dress by Asha Speech",
        "Inter School Dance Competition",
        "Green Marathon by Rotary Club (1 Registration = 1 Tree | More Runners = More Trees)",
        "Science Exhibition",
        "Painting & Drawing Competition",
        "Drone Show proposed",
        "Kids Bravery Award",
      ],
    },
    {
      dayEn: "Monday | 2 February",
      dayHi: "सोमवार | 2 फरवरी",
      subtitleEn: "",
      subtitleHi: "",
      events: [
        "Rising Star of Bilaspur 3.0",
        "Shark Tank Bilaspur – Business Ideas & Startup Pitch",
        "Makeup Competition",
        "MasterChef Competition",
        "Startup Awards (5)",
        "Udyogpati of the Year Awards (5)",
        "Guinness World Record Recognition",
      ],
    },
    {
      dayEn: "Tuesday | 3 February",
      dayHi: "मंगलवार | 3 फरवरी",
      subtitleEn: "Cultural & Spiritual Evening",
      subtitleHi: "सांस्कृतिक और आध्यात्मिक शाम",
      events: [
        "Siya Ke Ram Presentation",
        "Satsang",
        "Hanuman Chalisa Path",
        "Bhajan Jamming",
        "CG Seva Ratna Awards",
        "Lifetime Achievement Award",
        "BNI Awards Ceremony",
        "*Grand closing with crackers*",
      ],
    },
  ]

  return (
    <section className="relative w-full py-12 sm:py-20 bg-card/30 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Vyapar Mela – Event Schedule & Highlights" : "व्यापार मेला – कार्यक्रम अनुसूची और मुख्य आकर्षण"}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {schedule.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-accent/50 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-accent/30">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  {language === "en" ? day.dayEn : day.dayHi}
                </h3>
                {day.subtitleEn && (
                  <p className="text-sm sm:text-base text-accent font-semibold italic">
                    ({language === "en" ? day.subtitleEn : day.subtitleHi})
                  </p>
                )}
              </div>

              <ul className="space-y-2 sm:space-y-3">
                {day.events.map((event, eventIndex) => (
                  <li
                    key={eventIndex}
                    className="flex gap-2 sm:gap-3 items-start text-sm sm:text-base text-muted-foreground"
                  >
                    <span className="text-accent font-bold mt-1 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
