import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Title bhi bni vyapar evm Udyog mela 2026",
  description:
    "Celebrate talent and culture at Rising Star of Bilaspur 3.0 - featuring music, dance, art, and cooking competitions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
