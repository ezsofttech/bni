"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FooterProps {
  language: "en" | "hi"
}

export default function Footer({ language }: FooterProps) {
  return (
    <motion.footer
      className="relative bg-gradient-to-t from-card/50 to-background border-t border-accent/30 py-10 sm:py-16 z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="relative w-20 sm:w-24 h-auto flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="BNI Bilaspur South Logo"
                  width={96}
                  height={48}
                  className="object-contain w-full h-auto"
                />
              </div>
              <h4 className="font-bold text-foreground text-sm sm:text-lg">
                {language === "en" ? "BNI Bilaspur Vyapar Evam Udyog Mela 2026" : "बीएनआई बिलासपुर व्यापार एवं उद्योग मेला 2026"}
              </h4>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {language === "en"
                ? "Bilaspur's Premier Trade and Industry Fair."
                : "बिलासपुर का प्रमुख व्यापार और उद्योग मेला।"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-3 text-sm sm:text-base">
              {language === "en" ? "Events & Activities" : "कार्यक्रम और गतिविधियां"}
            </h4>
            <ul className="text-muted-foreground text-xs sm:text-sm space-y-1.5 sm:space-y-2">
              <li>{language === "en" ? "Science Model Competition" : "विज्ञान मॉडल प्रतियोगिता"}</li>
              <li>{language === "en" ? "Startup Pitch" : "स्टार्टअप पिच"}</li>
              <li>{language === "en" ? "Cultural Programs" : "सांस्कृतिक कार्यक्रम"}</li>
              <li>{language === "en" ? "Job Fair" : "नौकरी मेला"}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-3 text-sm sm:text-base">
              {language === "en" ? "Location" : "स्थान"}
            </h4>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {language === "en" ? "Science College Ground" : "साईंस कॉलेज मैदान"}
              <br />
              {language === "en" ? "Sarkanda, Bilaspur" : "सरकण्डा, बिलासपुर"}
              <br />
              {language === "en" ? "Chhattisgarh, India" : "छत्तीसगढ़, भारत"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground mb-3 text-sm sm:text-base">
              {language === "en" ? "Event Dates" : "कार्यक्रम की तारीख"}
            </h4>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {language === "en" ? "January 29 - February 3, 2026" : "29 जनवरी - 3 फरवरी, 2026"}
              <br />
              <span className="text-accent font-semibold">
                {language === "en" ? "5 Days of Business & Culture" : "5 दिन व्यापार और संस्कृति"}
              </span>
            </p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-accent/20 pt-6 sm:pt-8 text-center text-muted-foreground text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">
            {language === "en"
              ? "© 2026 BNI Bilaspur Vyapar Evam Udyog Mela. Connecting Businesses, Building Communities."
              : "© 2026 बीएनआई बिलासपुर व्यापार एवं उद्योग मेला। व्यवसायों को जोड़ना, समुदायों का निर्माण।"}
          </p>
          <p>
            {language === "en" ? "Made with" : "से बनाया गया"}
            <span className="text-red-500 mx-1">❤️</span>
            {language === "en" ? "by" : ""}
            <a
              href="https://www.ezsofttech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold transition-colors ml-1"
            >
              Ez Soft Tech
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
