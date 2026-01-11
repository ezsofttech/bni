"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface StallCategoriesSectionProps {
  language: "en" | "hi"
}

const categories = [
  { image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop", nameEn: "Handicrafts", nameHi: "हस्तशिल्प" },
  { image: "https://images.unsplash.com/photo-1638722661753-9b3ab8b4252b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", nameEn: "Handloom", nameHi: "हथकरघा" },
  { image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop", nameEn: "Domestic Products", nameHi: "घरेलू उत्पाद" },
  { image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop", nameEn: "Real Estate", nameHi: "रियल एस्टेट" },
  { image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop", nameEn: "Lifestyle", nameHi: "लाइफस्टाइल" },
  { image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop", nameEn: "Automobiles", nameHi: "ऑटोमोबाइल" },
  { image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop", nameEn: "Tourism", nameHi: "पर्यटन" },
  { image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop", nameEn: "Communication", nameHi: "संचार" },
  { image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop", nameEn: "Education", nameHi: "शिक्षा" },
  { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop", nameEn: "Banking", nameHi: "बैंकिंग" },
  { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop", nameEn: "Insurance", nameHi: "बीमा" },
  { image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop", nameEn: "Electronics", nameHi: "इलेक्ट्रॉनिक्स" },
  { image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop", nameEn: "Electricals", nameHi: "इलेक्ट्रिकल्स" },
  { image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop", nameEn: "Industrial", nameHi: "औद्योगिक" },
  { image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop", nameEn: "Healthcare", nameHi: "स्वास्थ्य सेवा" },
]

export default function StallCategoriesSection({ language }: StallCategoriesSectionProps) {
  return (
    <section className="relative w-full py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Stall Categories" : "स्टॉल श्रेणियां"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Explore diverse sectors and categories at the mela"
              : "मेले में विविध क्षेत्रों और श्रेणियों का अन्वेषण करें"}
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-card border border-border rounded-lg sm:rounded-xl hover:border-accent/50 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-accent/10 group-hover:bg-accent/20 transition-colors border-2 border-border group-hover:border-accent/50">
                  <Image
                    src={category.image}
                    alt={language === "en" ? category.nameEn : category.nameHi}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground">
                  {language === "en" ? category.nameEn : category.nameHi}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
