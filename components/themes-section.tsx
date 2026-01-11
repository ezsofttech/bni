"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ThemesSectionProps {
  language: "en" | "hi"
}

const themes = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    titleEn: "Business",
    titleHi: "व्यापार",
    descriptionEn: "Connect with 300+ stalls, leading companies, and explore business opportunities across diverse sectors",
    descriptionHi: "300+ स्टॉल, प्रमुख कंपनियों से जुड़ें और विविध क्षेत्रों में व्यावसायिक अवसरों का अन्वेषण करें",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/10",
  },
  {
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    titleEn: "Innovation",
    titleHi: "नवाचार",
    descriptionEn: "Discover startups, science models, new technologies, and innovative solutions shaping the future",
    descriptionHi: "स्टार्टअप, विज्ञान मॉडल, नई प्रौद्योगिकियों और भविष्य को आकार देने वाले नवाचार समाधानों की खोज करें",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    image: "https://images.unsplash.com/photo-1537365587684-f490102e1225?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titleEn: "Entertainment",
    titleHi: "मनोरंजन",
    descriptionEn: "Enjoy cultural programs, competitions, performances, food, and fun activities for the whole family",
    descriptionHi: "सांस्कृतिक कार्यक्रम, प्रतियोगिताएं, प्रदर्शन, भोजन और पूरे परिवार के लिए मजेदार गतिविधियों का आनंद लें",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500/10",
  },
]

export default function ThemesSection({ language }: ThemesSectionProps) {
  return (
    <section className="relative w-full py-12 sm:py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Something for Everyone" : "सभी के लिए कुछ न कुछ"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto mb-2">
            {language === "en"
              ? "Where it is for everyone"
              : "जहाँ सभी के लिए है"}
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-accent">
            {language === "en" ? "Much More!" : "बहुत कुछ!"}
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`p-8 sm:p-10 bg-card border-2 border-border rounded-2xl hover:border-accent/50 transition-all ${theme.bgColor} hover:shadow-2xl`}>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:scale-110 transition-transform border-2 border-border">
                  <Image
                    src={theme.image}
                    alt={language === "en" ? theme.titleEn : theme.titleHi}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {language === "en" ? theme.titleEn : theme.titleHi}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {language === "en" ? theme.descriptionEn : theme.descriptionHi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
