"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface FAQSectionProps {
  language: "en" | "hi"
}

export default function FAQSection({ language }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    {
      questionEn: "What is BNI Bilaspur Vyapar Evam Udyog Mela 2026?",
      questionHi: "बीएनआई बिलासपुर व्यापार एवं उद्योग मेला 2026 क्या है?",
      answerEn:
        "BNI Bilaspur Vyapar Evam Udyog Mela 2026 is a comprehensive five-day trade and industry fair organized by Business Network International (BNI) at Science College Ground, Sipat Road, Bilaspur. The event features over 400 stalls showcasing products and services across diverse sectors including handicrafts, handloom, domestic products, real estate, lifestyle, automobiles, tourism, communication, education, banking, insurance, electronics, and electricals.",
      answerHi:
        "बीएनआई बिलासपुर व्यापार एवं उद्योग मेला 2026 बिज़नेस नेटवर्क इंटरनेशनल (BNI) द्वारा विज्ञान कॉलेज मैदान, सीपत रोड, बिलासपुर में आयोजित एक व्यापक पांच दिवसीय व्यापार और उद्योग मेला है। कार्यक्रम में 400 से अधिक स्टॉल शामिल हैं जो हस्तशिल्प, हथकरघा, घरेलू उत्पाद, रियल एस्टेट, लाइफस्टाइल, ऑटोमोबाइल, पर्यटन, संचार, शिक्षा, बैंकिंग, बीमा, इलेक्ट्रॉनिक्स और इलेक्ट्रिकल्स जैसे विविध क्षेत्रों में उत्पादों और सेवाओं को प्रदर्शित करते हैं।",
    },
    {
      questionEn: "What are the timings of the fair?",
      questionHi: "मेले का समय क्या है?",
      answerEn:
        "The fair operates daily from 10:00 AM to 9:00 PM from January 29 to February 3, 2026. All visitors are welcome during these hours to explore the stalls, participate in activities, and enjoy the cultural programs.",
      answerHi:
        "मेला 29 जनवरी से 3 फरवरी, 2026 तक प्रतिदिन सुबह 10:00 बजे से रात 9:00 बजे तक चलता है। इन घंटों के दौरान सभी आगंतुक स्टॉल देखने, गतिविधियों में भाग लेने और सांस्कृतिक कार्यक्रमों का आनंद लेने के लिए आमंत्रित हैं।",
    },
    {
      questionEn: "Is there a mobile app for the fair?",
      questionHi: "क्या मेले के लिए मोबाइल ऐप है?",
      answerEn:
        "Yes! A dedicated mobile application has been launched for the fair, providing comprehensive information about stalls, event schedules, fairground maps, and registration details. The app allows users to easily navigate the fair and access all event information at their fingertips.",
      answerHi:
        "हां! मेले के लिए एक विशेष मोबाइल एप्लिकेशन लॉन्च किया गया है, जो स्टॉल, कार्यक्रम समय सारणी, मेला मैदान के नक्शे और पंजीकरण विवरण के बारे में व्यापक जानकारी प्रदान करता है। ऐप उपयोगकर्ताओं को मेले में आसानी से नेविगेट करने और सभी कार्यक्रम जानकारी तक पहुंचने की अनुमति देता है।",
    },
    {
      questionEn: "What is the entry fee?",
      questionHi: "प्रवेश शुल्क क्या है?",
      answerEn:
        "Entry to the fair is free for all visitors. However, some activities, competitions, and food items may have separate charges. Check individual stall or activity details for specific pricing.",
      answerHi: "मेले में प्रवेश सभी आगंतुकों के लिए निःशुल्क है। हालांकि, कुछ गतिविधियों, प्रतियोगिताओं और खाद्य वस्तुओं पर अलग शुल्क हो सकता है। विशिष्ट मूल्य निर्धारण के लिए व्यक्तिगत स्टॉल या गतिविधि विवरण देखें।",
    },
    {
      questionEn: "What activities are available at the fair?",
      questionHi: "मेले में कौन सी गतिविधियां उपलब्ध हैं?",
      answerEn:
        "The fair features a wide range of activities including business exhibitions, startup pitch sessions, cultural competitions (singing, dancing, rangoli, mehendi), science model competitions, youth marathon, mass yoga sessions, health check-ups, blood donation drives, poetry sessions (Kavi Sammelan), job fair with 100+ companies, and various entertainment programs. There's something for everyone!",
      answerHi:
        "मेले में व्यापक गतिविधियां शामिल हैं जैसे व्यावसायिक प्रदर्शनियां, स्टार्टअप पिच सत्र, सांस्कृतिक प्रतियोगिताएं (गायन, नृत्य, रंगोली, मेहंदी), विज्ञान मॉडल प्रतियोगिताएं, युवा मैराथन, सामूहिक योग सत्र, स्वास्थ्य जांच, रक्तदान अभियान, कवि सम्मेलन, 100+ कंपनियों के साथ नौकरी मेला और विभिन्न मनोरंजन कार्यक्रम। सभी के लिए कुछ न कुछ है!",
    },
    {
      questionEn: "Which companies are participating?",
      questionHi: "कौन सी कंपनियां भाग ले रही हैं?",
      answerEn:
        "Leading companies and brands participating include SECL, Apollo Hospitals, Domino's, L&T, Hero Honda, Renault, Volkswagen, and many more across various sectors. The fair attracts both local and national brands.",
      answerHi:
        "भाग लेने वाली प्रमुख कंपनियों और ब्रांडों में SECL, Apollo Hospitals, Domino's, L&T, Hero Honda, Renault, Volkswagen और विभिन्न क्षेत्रों में कई अन्य शामिल हैं। मेला स्थानीय और राष्ट्रीय दोनों ब्रांडों को आकर्षित करता है।",
    },
    {
      questionEn: "Where is the event located and how do I get there?",
      questionHi: "कार्यक्रम कहां स्थित है और मैं वहां कैसे पहुंचूं?",
      answerEn:
        "The fair is held at Science College Ground, Sarkanda, Bilaspur, Chhattisgarh. The venue is easily accessible by public transport, private vehicles, and auto-rickshaws. Ample parking space is available. Detailed directions and parking information will be provided closer to the event date.",
      answerHi:
        "मेला साईंस कॉलेज मैदान, सरकण्डा, बिलासपुर, छत्तीसगढ़ में आयोजित किया जाता है। यह स्थल सार्वजनिक परिवहन, निजी वाहनों और ऑटो-रिक्शा से आसानी से पहुंचा जा सकता है। पर्याप्त पार्किंग स्थान उपलब्ध है। विस्तृत दिशा-निर्देश और पार्किंग जानकारी कार्यक्रम की तारीख के करीब प्रदान की जाएगी।",
    },
  ]

  return (
    <section className="relative w-full py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Frequently Asked Questions" : "अक्सर पूछे जाने वाले प्रश्न"}
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 bg-background border border-border rounded-xl text-left hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {language === "en" ? faq.questionEn : faq.questionHi}
                  </h3>
                  <div
                    className={`text-accent ml-4 transition-transform duration-300 ${
                      expandedIndex === index ? "transform rotate-180" : ""
                    }`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-muted-foreground leading-relaxed"
                  >
                    {language === "en" ? faq.answerEn : faq.answerHi}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
