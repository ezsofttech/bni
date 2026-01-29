"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface HighlightsSectionProps {
  language: "en" | "hi"
}

const highlights = [
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    titleEn: "Mobile App",
    titleHi: "मोबाइल ऐप",
    descriptionEn: "Dedicated mobile application with comprehensive fair information, stall maps, and schedules",
    descriptionHi: "व्यापक मेला जानकारी, स्टॉल मैप और समय सारणी के साथ विशेष मोबाइल एप्लिकेशन",
    color: "from-blue-500 to-cyan-500",
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
    titleEn: "50K+ Visitors",
    titleHi: "50 हजार+ दर्शक",
    descriptionEn: "Expected footfall of over 50,000 visitors every day",
    descriptionHi: "प्रतिदिन 50,000 से अधिक आगंतुकों की अपेक्षित भीड़",
    color: "from-purple-500 to-pink-500",
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
    titleEn: "Job Fair",
    titleHi: "नौकरी मेला",
    descriptionEn: "100+ companies offering employment opportunities with on-the-spot interviews",
    descriptionHi: "100+ कंपनियां तुरंत साक्षात्कार के साथ रोजगार के अवसर प्रदान कर रही हैं",
    color: "from-green-500 to-emerald-500",
  },
  {
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    titleEn: "Health Services",
    titleHi: "स्वास्थ्य सेवाएं",
    descriptionEn: "Free health check-ups, blood donation drives, and wellness programs",
    descriptionHi: "मुफ्त स्वास्थ्य जांच, रक्तदान अभियान और कल्याण कार्यक्रम",
    color: "from-red-500 to-rose-500",
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    titleEn: "Cultural Programs",
    titleHi: "सांस्कृतिक कार्यक्रम",
    descriptionEn: "Competitions, poetry sessions, cultural performances, and entertainment",
    descriptionHi: "प्रतियोगिताएं, कवि सम्मेलन, सांस्कृतिक प्रदर्शन और मनोरंजन",
    color: "from-orange-500 to-amber-500",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    titleEn: "Innovation Hub",
    titleHi: "नवाचार केंद्र",
    descriptionEn: "Startup pitch sessions, science model competitions, and innovation showcases",
    descriptionHi: "स्टार्टअप पिच सत्र, विज्ञान मॉडल प्रतियोगिताएं और नवाचार प्रदर्शन",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function HighlightsSection({ language }: HighlightsSectionProps) {
  return (
    <section className="relative w-full py-12 sm:py-20 bg-linear-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Key Highlights" : "मुख्य विशेषताएं"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Discover what makes this mela special"
              : "जानें कि यह मेला क्या खास बनाता है"}
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 sm:p-8 bg-card border border-border rounded-xl hover:shadow-xl transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="relative">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden mb-4 sm:mb-6 border border-border/50 shadow-lg">
                  <Image
                    src={highlight.image}
                    alt={language === "en" ? highlight.titleEn : highlight.titleHi}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {language === "en" ? highlight.titleEn : highlight.titleHi}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {language === "en" ? highlight.descriptionEn : highlight.descriptionHi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
