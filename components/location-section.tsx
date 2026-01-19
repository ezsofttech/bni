"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Car, Bus, Navigation } from "lucide-react"

interface LocationSectionProps {
  language: "en" | "hi"
}

export default function LocationSection({ language }: LocationSectionProps) {
  return (
    <section className="relative w-full py-12 sm:py-20 bg-background z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Location & Directions" : "स्थान और दिशा-निर्देश"}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {language === "en" ? "Venue" : "स्थल"}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {language === "en" ? "Science College Ground" : "साईंस कॉलेज मैदान"}
                    <br />
                    {language === "en" ? "Sarkanda, Bilaspur" : "सरकण्डा, बिलासपुर"}
                    <br />
                    {language === "en" ? "Chhattisgarh, India" : "छत्तीसगढ़, भारत"}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {language === "en" ? "Timings" : "समय"}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {language === "en" ? "Daily: 10:00 AM - 9:00 PM" : "प्रतिदिन: सुबह 10:00 - रात 9:00"}
                    <br />
                    {language === "en" ? "January 29 - February 3, 2026" : "29 जनवरी - 3 फरवरी, 2026"}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Navigation className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {language === "en" ? "How to Reach" : "कैसे पहुंचें"}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground text-sm sm:text-base">
                        {language === "en" ? "Private vehicles - Ample parking available" : "निजी वाहन - पर्याप्त पार्किंग उपलब्ध"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bus className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground text-sm sm:text-base">
                        {language === "en" ? "Public transport - Well connected" : "सार्वजनिक परिवहन - अच्छी तरह से जुड़ा हुआ"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Navigation className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground text-sm sm:text-base">
                        {language === "en" ? "Auto-rickshaws - Easily available" : "ऑटो-रिक्शा - आसानी से उपलब्ध"}
                      </span>
                    </div>
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
            className="relative h-64 sm:h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.718851881604!2d82.16647247553804!3d22.098551550177497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280baa9e1795d1%3A0x71733dfef5ba9cc8!2sScience%20College%20Ground!5e0!3m2!1sen!2sin!4v1768124952499!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title={language === "en" ? "Science College Ground, Sarkanda, Bilaspur" : "साईंस कॉलेज मैदान, सरकण्डा, बिलासपुर"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
