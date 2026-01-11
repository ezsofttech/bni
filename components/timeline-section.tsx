"use client"

import { motion } from "framer-motion"

interface TimelineSectionProps {
  language: "en" | "hi"
}

export default function TimelineSection({ language }: TimelineSectionProps) {
  const timeline = [
    {
      dateEn: "Dec 19, 2025",
      dateHi: "19 दिसंबर, 2025",
      eventEn: "Bhoomi Pujan Ceremony",
      eventHi: "भूमि पूजन समारोह",
      descEn: "Inaugural ceremony marking the beginning of preparations",
      descHi: "तैयारियों की शुरुआत का उद्घाटन समारोह",
    },
    {
      dateEn: "Jan 29, 2026",
      dateHi: "29 जनवरी, 2026",
      eventEn: "Fair Opening Day",
      eventHi: "मेला उद्घाटन दिवस",
      descEn: "Grand opening with inauguration ceremony and special programs. Fair opens from 10:00 AM to 9:00 PM",
      descHi: "उद्घाटन समारोह और विशेष कार्यक्रमों के साथ भव्य उद्घाटन। मेला सुबह 10:00 बजे से रात 9:00 बजे तक खुला रहेगा",
    },
    {
      dateEn: "Jan 30, 2026",
      dateHi: "30 जनवरी, 2026",
      eventEn: "Day 2 - Science & Innovation",
      eventHi: "दिन 2 - विज्ञान और नवाचार",
      descEn: "Science Model Competition (10 AM), Startup Pitch Session (2 PM), Job Fair continues",
      descHi: "विज्ञान मॉडल प्रतियोगिता (सुबह 10:00), स्टार्टअप पिच सत्र (दोपहर 2:00), नौकरी मेला जारी",
    },
    {
      dateEn: "Jan 31, 2026",
      dateHi: "31 जनवरी, 2026",
      eventEn: "Day 3 - Cultural Competitions",
      eventHi: "दिन 3 - सांस्कृतिक प्रतियोगिताएं",
      descEn: "Rangoli Competition (10 AM), Mehendi Competition (2 PM), Mr. & Mrs. Bilaspur Contest (6 PM)",
      descHi: "रंगोली प्रतियोगिता (सुबह 10:00), मेहंदी प्रतियोगिता (दोपहर 2:00), मिस्टर और मिसेज बिलासपुर प्रतियोगिता (शाम 6:00)",
    },
    {
      dateEn: "Feb 1, 2026",
      dateHi: "1 फरवरी, 2026",
      eventEn: "Day 4 - Youth & Performance",
      eventHi: "दिन 4 - युवा और प्रदर्शन",
      descEn: "Youth Marathon (6 AM), Inter-School Group Dance (4 PM), Solo Singing Competition (6 PM)",
      descHi: "युवा मैराथन (सुबह 6:00), अंतर-विद्यालय समूह नृत्य (शाम 4:00), एकल गायन प्रतियोगिता (शाम 6:00)",
    },
    {
      dateEn: "Feb 2, 2026",
      dateHi: "2 फरवरी, 2026",
      eventEn: "Day 5 - Main Exhibition",
      eventHi: "दिन 5 - मुख्य प्रदर्शनी",
      descEn: "Full day of business exhibitions, networking, and cultural programs. Job Fair continues",
      descHi: "व्यावसायिक प्रदर्शनियां, नेटवर्किंग और सांस्कृतिक कार्यक्रमों का पूरा दिन। नौकरी मेला जारी",
    },
    {
      dateEn: "Feb 3, 2026",
      dateHi: "3 फरवरी, 2026",
      eventEn: "Closing Day & Awards",
      eventHi: "समापन दिवस और पुरस्कार",
      descEn: "Mass Yoga Session (6 AM), Award ceremonies, and grand closing ceremony",
      descHi: "सामूहिक योग सत्र (सुबह 6:00), पुरस्कार समारोह और भव्य समापन समारोह",
    },
  ]

  return (
    <section className="relative w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Event Timeline" : "कार्यक्रम का समय सारणी"}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors">
                    <div className="text-sm font-semibold text-accent mb-2">
                      {language === "en" ? item.dateEn : item.dateHi}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {language === "en" ? item.eventEn : item.eventHi}
                    </h3>
                    <p className="text-muted-foreground">{language === "en" ? item.descEn : item.descHi}</p>
                  </div>
                </div>

                <div className={`hidden md:flex items-center justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
                </div>

                <div className={`md:hidden ${index % 2 === 1 ? "" : ""}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
