"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Globe } from "@/components/ui/globe"

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToNextSection = () => {
    if (scrollRef.current) {
      const nextSection = scrollRef.current.nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section
      ref={scrollRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Globe className="absolute inset-0 w-full h-full" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 rounded-bl-[200px]"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-block mb-6 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium">Established in 2005</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Your Trusted <span className="text-primary">IT Solutions</span> Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Delivering excellence in IT with innovative solutions tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  DB
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                  ZB
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">
                  EC
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
              </div>
              <p className="ml-4 text-sm text-gray-600">Trusted by leading organizations across Ethiopia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl transform -rotate-3">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero-datacenter-tech.webp"
                    alt="Enterprise IT Solutions"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                        Featured
                      </div>
                      <h3 className="text-white text-xl font-bold">Enterprise Network Solutions</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -right-10 -bottom-10 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">20+ Years</p>
                    <p className="text-xs text-gray-500">of Excellence</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -left-10 top-1/4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Trusted Partner</p>
                    <p className="text-xs text-gray-500">for IT Solutions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-10 w-10 text-primary" />
      </motion.div>
    </section>
  )
}
