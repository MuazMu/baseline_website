"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Router, Monitor, Database, Cpu, Camera } from "lucide-react"

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("network")

  const productCategories = [
    {
      id: "network",
      name: "Network Equipment",
      icon: <Router className="h-5 w-5" />,
      products: [
        {
          name: "Enterprise Servers",
          image: "/images/network-server.jpg",
          description: "High-performance servers for business applications",
        },
        {
          name: "Network Switches",
          image: "/images/network-switch.jpg",
          description: "Managed switches for reliable network connectivity",
        },
        {
          name: "Wireless Access Points",
          image: "/images/wireless-ap.jpg",
          description: "Enterprise-grade WiFi solutions",
        },
        {
          name: "Firewalls",
          image: "/images/firewall.jpg",
          description: "Next-generation security appliances",
        },
      ],
    },
    {
      id: "banking",
      name: "Banking Equipment",
      icon: <Monitor className="h-5 w-5" />,
      products: [
        {
          name: "Passbook Printers",
          image: "/images/passbook-printer.jpg",
          description: "High-speed passbook printing solutions",
        },
        {
          name: "Check Scanners",
          image: "/images/check-scanner.jpg",
          description: "Accurate and efficient check processing",
        },
        {
          name: "Note Counters",
          image: "/images/note-counter.jpg",
          description: "Currency counting and counterfeit detection",
        },
        {
          name: "Queue Management",
          image: "/images/queue-management.jpg",
          description: "Complete queue management systems",
        },
      ],
    },
    {
      id: "software",
      name: "Software Solutions",
      icon: <Cpu className="h-5 w-5" />,
      products: [
        {
          name: "Microsoft Products",
          image: "/images/microsoft.jpg",
          description: "Complete Microsoft software solutions",
        },
        {
          name: "Antivirus Software",
          image: "/images/antivirus.jpg",
          description: "Enterprise-grade security software",
        },
        {
          name: "Recovery Software",
          image: "/images/recovery.jpg",
          description: "Data recovery and backup solutions",
        },
        {
          name: "Enterprise Solutions",
          image: "/images/enterprise.jpg",
          description: "Comprehensive business software packages",
        },
      ],
    },
    {
      id: "datacenter",
      name: "Data Center",
      icon: <Database className="h-5 w-5" />,
      products: [
        {
          name: "HVAC Systems",
          image: "/images/hvac.jpg",
          description: "Precision cooling for data centers",
        },
        {
          name: "Fire Suppression",
          image: "/images/fire-suppression.jpg",
          description: "Advanced fire protection systems",
        },
        {
          name: "Power Distribution",
          image: "/images/power-distribution.jpg",
          description: "Reliable power management solutions",
        },
        {
          name: "Monitoring Systems",
          image: "/images/monitoring.jpg",
          description: "Environmental monitoring and control",
        },
      ],
    },
    {
      id: "security",
      name: "Security Systems",
      icon: <Camera className="h-5 w-5" />,
      products: [
        {
          name: "IP Cameras",
          image: "/images/ip-camera.jpg",
          description: "High-definition surveillance cameras",
        },
        {
          name: "CCTV Systems",
          image: "/images/cctv.jpg",
          description: "Complete surveillance solutions",
        },
        {
          name: "Access Control",
          image: "/images/access-control.jpg",
          description: "Biometric and PIN-based access systems",
        },
        {
          name: "Alarm Systems",
          image: "/images/alarm.jpg",
          description: "Intrusion detection and alerting",
        },
      ],
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of high-quality products designed to meet your technology needs.
          </p>
        </div>

        <Tabs defaultValue="network" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.products.map((product, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.1 },
                        }}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                          <Button
                            variant="outline"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            Learn More
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
