import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mege Tours and Holidays | Explore Sri Lanka",
  description:
    "Discover the beauty of Sri Lanka with Mege Tours and Holidays. Offering one-day tours, multi-day packages, and customized travel experiences across the pearl of the Indian Ocean.",
  keywords: [
    "Sri Lanka tours",
    "Sri Lanka travel",
    "tours in Sri Lanka",
    "Sri Lanka holidays",
    "Colombo tours",
    "Kandy tours",
    "Galle tours",
    "Sri Lanka beaches",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Mege Tours and Holidays | Explore Sri Lanka",
    description: "Discover the beauty of Sri Lanka with Mege Tours and Holidays",
    type: "website",
  },
  icons: {
    icon: "/Mege.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#1A202C" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
