"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  language: "en" | "hi"
  onLanguageChange: (lang: "en" | "hi") => void
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-gradient-to-b from-background via-background/95 to-background/80 backdrop-blur-xl border-b border-accent/30 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center gap-2 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 cursor-pointer min-w-fit"
        >
          <div className="relative w-24 sm:w-32 h-auto flex-shrink-0">
            <Image
              src="/logo.png"
              alt="BNI Bilaspur South Logo"
              width={128}
              height={64}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm sm:text-lg text-foreground leading-tight">
              {language === "en" ? "BNI Bilaspur" : "बीएनआई बिलासपुर"}
            </div>
            <div className="text-xs font-semibold text-accent">{language === "en" ? "Vyapar Evam Udyog Mela 2026" : "व्यापार एवं उद्योग मेला 2026"}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-1.5 sm:gap-2"
        >
          <Button
            variant={language === "en" ? "default" : "outline"}
            size="sm"
            onClick={() => onLanguageChange("en")}
            className="font-semibold px-2.5 sm:px-4 py-2 sm:py-2 text-xs sm:text-sm rounded-lg transition-all hover:scale-105 active:scale-95"
          >
            EN
          </Button>
          <Button
            variant={language === "hi" ? "default" : "outline"}
            size="sm"
            onClick={() => onLanguageChange("hi")}
            className="font-semibold px-2.5 sm:px-4 py-2 sm:py-2 text-xs sm:text-sm rounded-lg transition-all hover:scale-105 active:scale-95"
          >
            HI
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}
