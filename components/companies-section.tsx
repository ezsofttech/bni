"use client"

import { motion } from "framer-motion"

interface CompaniesSectionProps {
  language: "en" | "hi"
}

const companies = [
  "SECL",
  "Apollo Hospitals",
  "Domino's",
  "L&T",
  "Hero Honda",
  "Renault",
  "Volkswagen",
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Bajaj",
  "Mahindra",
  "Tata",
  "Reliance",
  "Adani",
]

export default function CompaniesSection({ language }: CompaniesSectionProps) {
  return (
    <section className="relative w-full py-12 sm:py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Participating Companies" : "भाग लेने वाली कंपनियां"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Leading brands and companies showcasing their products and services"
              : "अपने उत्पादों और सेवाओं को प्रदर्शित करने वाले प्रमुख ब्रांड और कंपनियां"}
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-background border border-border rounded-lg sm:rounded-xl hover:border-accent/50 hover:shadow-md transition-all text-center"
            >
              <div className="font-semibold text-sm sm:text-base text-foreground">
                {company}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm sm:text-base">
            {language === "en"
              ? "And 385+ more companies across various sectors"
              : "और विभिन्न क्षेत्रों में 385+ अधिक कंपनियां"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
