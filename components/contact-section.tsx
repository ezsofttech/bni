"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Building2 } from "lucide-react"

interface ContactSectionProps {
  language: "en" | "hi"
}

export default function ContactSection({ language }: ContactSectionProps) {
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
            {language === "en" ? "Contact Us" : "संपर्क करें"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            {language === "en"
              ? "Get in touch with BNI Bilaspur for stall bookings, registrations, and inquiries"
              : "स्टॉल बुकिंग, पंजीकरण और पूछताछ के लिए बीएनआई बिलासपुर से संपर्क करें"}
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {language === "en" ? "Business Education and Training Academy (BETA)" : "व्यावसायिक शिक्षा और प्रशिक्षण अकादमी (BETA)"}
                </h3>
                <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p>
                      Chawla Chambers, Dayalband
                      <br />
                      Bilaspur – 495001
                      <br />
                      Chhattisgarh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              {language === "en" ? "Contact Information" : "संपर्क जानकारी"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base mb-1">
                    {language === "en" ? "Phone:" : "फोन:"}
                  </p>
                  <a
                    href="tel:+918982206820"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    +91 89822-06820
                  </a>
                  <br />
                  <a
                    href="tel:+919827957786"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    +91 98279-57786
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base mb-1">
                    {language === "en" ? "Email:" : "ईमेल:"}
                  </p>
                  <a
                    href="mailto:info@betaindia.in"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base block"
                  >
                    info@betaindia.in
                  </a>
                  <a
                    href="mailto:kiranpal@bni-india.in"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base block"
                  >
                    kiranpal@bni-india.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm sm:text-base">
            {language === "en"
              ? "Organized by BNI Bilaspur - Part of Business Network International (BNI), a global business networking organization"
              : "बीएनआई बिलासपुर द्वारा आयोजित - बिज़नेस नेटवर्क इंटरनेशनल (BNI) का हिस्सा, एक वैश्विक व्यावसायिक नेटवर्किंग संगठन"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
