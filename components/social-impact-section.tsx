"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SocialImpactSectionProps {
  language: "en" | "hi"
}

const initiatives = [
  {
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    titleEn: "Healthcare Support",
    titleHi: "स्वास्थ्य सेवा सहायता",
    descriptionEn: "Free health check-ups and blood donation drives for community welfare",
    descriptionHi: "सामुदायिक कल्याण के लिए मुफ्त स्वास्थ्य जांच और रक्तदान अभियान",
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
    titleEn: "Employment Opportunities",
    titleHi: "रोजगार के अवसर",
    descriptionEn: "Job fair with 100+ companies providing employment opportunities for youth",
    descriptionHi: "100+ कंपनियों के साथ नौकरी मेला, युवाओं के लिए रोजगार के अवसर प्रदान करता है",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    titleEn: "Education & Skill Development",
    titleHi: "शिक्षा और कौशल विकास",
    descriptionEn: "Educational institutions, career guidance, and skill development programs",
    descriptionHi: "शैक्षणिक संस्थान, करियर मार्गदर्शन और कौशल विकास कार्यक्रम",
  },
  {
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    titleEn: "Community Development",
    titleHi: "सामुदायिक विकास",
    descriptionEn: "Supporting local businesses, artisans, and promoting regional culture",
    descriptionHi: "स्थानीय व्यवसायों, कारीगरों का समर्थन और क्षेत्रीय संस्कृति को बढ़ावा देना",
  },
]

export default function SocialImpactSection({ language }: SocialImpactSectionProps) {
  return (
    <section className="relative w-full py-12 sm:py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Social Impact & Initiatives" : "सामाजिक प्रभाव और पहल"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Contributing to community development and social welfare"
              : "सामुदायिक विकास और सामाजिक कल्याण में योगदान"}
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-accent/50 hover:shadow-lg transition-all text-center"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-accent/10 rounded-full overflow-hidden border-2 border-accent/20">
                <Image
                  src={initiative.image}
                  alt={language === "en" ? initiative.titleEn : initiative.titleHi}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                {language === "en" ? initiative.titleEn : initiative.titleHi}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {language === "en" ? initiative.descriptionEn : initiative.descriptionHi}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-accent/5 border border-accent/20 rounded-xl text-center"
        >
          <p className="text-foreground text-base sm:text-lg font-medium mb-2">
            {language === "en"
              ? "BNI Bilaspur is committed to social responsibility"
              : "बीएनआई बिलासपुर सामाजिक जिम्मेदारी के प्रति प्रतिबद्ध है"}
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            {language === "en"
              ? "A portion of the fair proceeds will be donated for community welfare initiatives, including healthcare equipment for local hospitals"
              : "मेले की आय का एक हिस्सा सामुदायिक कल्याण पहलों के लिए दान किया जाएगा, जिसमें स्थानीय अस्पतालों के लिए स्वास्थ्य उपकरण शामिल हैं"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
