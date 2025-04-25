import Link from "next/link"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Logo } from "@/components/logo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Learn Easy - Language Learning Flashcards",
  description: "Learn vocabulary in multiple languages with customizable flashcards",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <Logo />
              <nav className="hidden md:flex gap-6">
                <Link href="/settings" className="text-gray-600 hover:text-primary">
                  Settings
                </Link>
                <Link href="/study" className="text-gray-600 hover:text-primary">
                  Study
                </Link>
                <Link href="/statistics" className="text-gray-600 hover:text-primary">
                  Statistics
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
