"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface DetailsSectionProps {
  language: "en" | "hi"
}

export default function DetailsSection({ language }: DetailsSectionProps) {
  const stats = [
    {
      numberEn: "300+",
      labelEn: "Stalls",
      numberHi: "३०० +",
      labelHi: "स्टॉल",
    },
    {
      numberEn: "100+",
      labelEn: "Job Opportunities",
      numberHi: "१०० +",
      labelHi: "नौकरी के अवसर",
    },
    {
      numberEn: "6",
      labelEn: "Days",
      numberHi: "६",
      labelHi: "दिन",
    },
    {
      numberEn: "24/7",
      labelEn: "Mobile App",
      numberHi: "२४/७",
      labelHi: "मोबाइल ऐप",
    },
  ]

  return (
    <section className="relative w-full py-12 sm:py-20 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 bg-background rounded-lg sm:rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
            >
              <div className="text-2xl sm:text-5xl font-bold text-accent mb-2">
                {language === "en" ? stat.numberEn : stat.numberHi}
              </div>
              <div className="text-xs sm:text-base text-muted-foreground font-medium leading-tight">
                {language === "en" ? stat.labelEn : stat.labelHi}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-64 sm:h-96 rounded-lg sm:rounded-xl overflow-hidden shadow-xl order-2 sm:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
              alt="Event showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 sm:order-2"
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
              {language === "en" ? "About BNI Bilaspur Vyapar Evam Udyog Mela 2026" : "बीएनआई बिलासपुर व्यापार एवं उद्योग मेला 2026 के बारे में"}
            </h2>

            <div className="space-y-4 sm:space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                {language === "en"
                  ? "The BNI Bilaspur Vyapar & Udyog Mela is a large trade and industry fair organized by BNI Bilaspur to promote businesses, entrepreneurship, products, and services across sectors. It attracts both local visitors and exhibitors from various industries. This fair is part of BNI's efforts to grow the business network and commercial activities in Bilaspur and its surrounding region."
                  : "बीएनआई बिलासपुर व्यापार एवं उद्योग मेला बीएनआई बिलासपुर द्वारा आयोजित एक बड़ा व्यापार और उद्योग मेला है जो विभिन्न क्षेत्रों में व्यवसायों, उद्यमिता, उत्पादों और सेवाओं को बढ़ावा देता है। यह स्थानीय आगंतुकों और विभिन्न उद्योगों के प्रदर्शकों को आकर्षित करता है। यह मेला बिलासपुर और उसके आसपास के क्षेत्र में व्यावसायिक नेटवर्क और वाणिज्यिक गतिविधियों को बढ़ाने के लिए BNI के प्रयासों का हिस्सा है।"}
              </p>

              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                  {language === "en" ? "Event Highlights:" : "कार्यक्रम की मुख्य विशेषताएं:"}
                </h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>
                    {language === "en"
                      ? "Around 300+ stalls with participation from diverse industries including Handicrafts & Handloom, Education & Academies, Tourism, Real Estate & Industry, Automobile & Electronics, Banking & Insurance, and more"
                      : "विविध उद्योगों से भागीदारी के साथ लगभग 300+ स्टॉल जिसमें हस्तशिल्प और हथकरघा, शिक्षा और अकादमियां, पर्यटन, रियल एस्टेट और उद्योग, ऑटोमोबाइल और इलेक्ट्रॉनिक्स, बैंकिंग और बीमा, और बहुत कुछ शामिल है"}
                  </li>
                  <li>
                    {language === "en"
                      ? "A dedicated mobile app providing complete information about stalls, map, zones, and events for easy navigation"
                      : "स्टॉल, मानचित्र, क्षेत्रों और कार्यक्रमों के बारे में पूरी जानकारी प्रदान करने वाला एक विशेष मोबाइल ऐप, आसान नेविगेशन के लिए"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Zonal layout organizing products and exhibitors into zones such as lifestyle, electronics, communication, etc., making it easier for visitors to explore"
                      : "उत्पादों और प्रदर्शकों को लाइफस्टाइल, इलेक्ट्रॉनिक्स, संचार आदि जैसे क्षेत्रों में व्यवस्थित करने वाला जोनल लेआउट, जिससे आगंतुकों के लिए अन्वेषण करना आसान हो जाता है"}
                  </li>
                  <li>
                    {language === "en"
                      ? "100+ job opportunities offered by employers and companies through the fair"
                      : "मेले के माध्यम से नियोक्ताओं और कंपनियों द्वारा प्रदान किए गए 100+ नौकरी के अवसर"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Cultural programs, health camps, blood donation camps, literary and social events as part of the 6-day fair activities"
                      : "6 दिवसीय मेला गतिविधियों के हिस्से के रूप में सांस्कृतिक कार्यक्रम, स्वास्थ्य शिविर, रक्तदान शिविर, साहित्यिक और सामाजिक कार्यक्रम"}
                  </li>
                </ul>
              </div>

              <p>
                {language === "en"
                  ? "The fair operates from 10:00 AM to 9:00 PM daily from January 29 to February 3, 2026, with free entry for all visitors. This event serves as a significant platform for local businesses, entrepreneurs, and industrialists to showcase their products and services, while also contributing to community development through social initiatives and employment opportunities."
                  : "मेला 29 जनवरी से 3 फरवरी, 2026 तक प्रतिदिन सुबह 10:00 बजे से रात 9:00 बजे तक चलता है, सभी आगंतुकों के लिए निःशुल्क प्रवेश। यह कार्यक्रम स्थानीय व्यवसायों, उद्यमियों और उद्योगपतियों के लिए अपने उत्पादों और सेवाओं को प्रदर्शित करने का एक महत्वपूर्ण मंच है, साथ ही सामाजिक पहल और रोजगार के अवसरों के माध्यम से सामुदायिक विकास में योगदान देता है।"}
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow active:scale-95 text-sm sm:text-base"
            >
              {language === "en" ? "Register Now" : "अभी रजिस्टर करें"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
