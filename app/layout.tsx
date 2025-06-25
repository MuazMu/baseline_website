import React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Baseline Computer Trading PLC - Your Trusted IT Solutions Partner",
  description: "Delivering excellence in IT with innovative solutions tailored to your business needs since 2005.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo_Baseline.png" />
        <link rel="apple-touch-icon" href="/logo_Baseline.png" />
      </head>
      <body className={`${inter.className} relative overflow-hidden`}>
        {/* Global Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 rounded-bl-[200px]"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        {/* Page Content (on top of background) */}
        <div className="relative z-10">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
