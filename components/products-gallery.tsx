"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import {
  Network,
  Building2,
  Shield,
  Database,
  Camera,
  Home,
  Server,
  Wifi,
  HardDrive,
  Router,
  Scan,
  Calculator,
  Users,
  CreditCard,
  Monitor,
  Zap,
  Wind,
  Flame,
  Eye,
  Lock,
  Copy,
  Cable,
  Wrench,
  DoorOpen,
  Tv,
} from "lucide-react"

export default function ProductsGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const productCategories = [
    {
      title: "Network Equipment",
      icon: Network,
      description: "Complete networking solutions for enterprise connectivity",
      products: [
        { name: "Servers", icon: Server, image: "/images/network/servers.jpg" },
        { name: "Routers", icon: Router, image: "/images/network/routers.jpg" },
        { name: "Switches", icon: Network, image: "/images/network/switches.jpg" },
        { name: "Firewalls", icon: Shield, image: "/images/network/firewalls.jpg" },
        { name: "Access Points", icon: Wifi, image: "/images/network/access-points.jpg" },
        { name: "Patch Panels", icon: Network, image: "/images/network/patch-panels.jpg" },
        { name: "Rack Cabinets", icon: Server, image: "/images/network/rack-cabinets.jpg" },
        { name: "Cables and more", icon: Cable, image: "/images/network/cables.jpg" },
      ],
    },
    {
      title: "Banking Equipment",
      icon: Building2,
      description: "Specialized equipment for banking and financial institutions",
      products: [
        { name: "Passbook Printers", icon: Copy, image: "/images/products/banking/passbook-printer.jpg" },
        { name: "Check Scanners", icon: Scan, image: "/images/products/banking/check-scanner.jpg" },
        { name: "Note Counters/Detectors", icon: Calculator, image: "/images/products/banking/note-counter.jpg" },
        { name: "Queue Management Solutions", icon: Users, image: "/images/products/banking/queue-management.jpg" },
        { name: "ATM Accessories", icon: CreditCard, image: "/images/products/banking/atm-accessory.jpg" },
      ],
    },
    {
      title: "Software Solutions",
      icon: Monitor,
      description: "Enterprise software and applications for business efficiency",
      products: [
        { name: "Microsoft Products", icon: Monitor, image: "/images/microsoft.jpg" },
        { name: "Antivirus Software", icon: Shield, image: "/images/products/software/antivirus.jpg" },
        { name: "Recovery Software", icon: HardDrive, image: "/images/products/software/recovery.jpg" },
        { name: "Enterprise Solutions", icon: Building2, image: "/images/products/software/enterprise.jpg" },
        { name: "Geophysics Software", icon: Database, image: "/images/products/software/geophysics.jpg" },
        { name: "Data Center Monitoring", icon: Monitor, image: "/images/products/software/datacenter-monitoring.jpg" },
      ],
    },
    {
      title: "Data Center Solutions",
      icon: Database,
      description: "Complete data center infrastructure and management systems",
      products: [
        { name: "HVAC Systems", icon: Wind, image: "/images/products/datacenter/hvac.jpg" },
        { name: "Environmental Management", icon: Monitor, image: "/images/products/datacenter/environmental.jpg" },
        { name: "Fire Extinguishing Systems", icon: Flame, image: "/images/products/datacenter/fire-extinguishing.jpg" },
        { name: "Power System Cabling", icon: Zap, image: "/images/products/datacenter/cabling.jpg" },
        { name: "Power Distribution", icon: Zap, image: "/images/products/datacenter/power-distribution.jpg" },
        { name: "Grounding and Bonding", icon: Zap, image: "/images/products/datacenter/grounding.jpg" },
      ],
    },
    {
      title: "Security Systems",
      icon: Shield,
      description: "Advanced security and surveillance solutions",
      products: [
        { name: "IP-Based Cameras", icon: Camera, image: "/images/products/security/ip-camera.jpg" },
        { name: "CCTV Systems", icon: Eye, image: "/images/products/security/cctv.jpg" },
        { name: "IPTV", icon: Tv, image: "/images/enterprise.jpg" },
        { name: "SMATV", icon: Tv, image: "/images/microsoft.jpg" },
        { name: "Firewalls", icon: Shield, image: "/images/products/security/firewall.jpg" },
        { name: "Biometric/PIN Door Access", icon: Lock, image: "/images/products/security/biometric-door.jpg" },
      ],
    },
    {
      title: "Home Automation",
      icon: Home,
      description: "Smart home solutions and automation systems",
      products: [
        { name: "Smart Home Indoor Monitor", icon: Monitor, image: "/images/products/homeauto/smart-home-monitor.jpg" },
        { name: "Video Door Entry Systems", icon: DoorOpen, image: "/images/products/homeauto/video-door-entry.jpg" },
        { name: "Indoor Monitors", icon: Monitor, image: "/images/products/homeauto/indoor-monitor.jpg" },
        { name: "IP Systems", icon: Network, image: "/images/products/homeauto/ip-system.jpg" },
        { name: "Outdoor Panels", icon: Camera, image: "/images/products/homeauto/outdoor-panel.jpg" },
      ],
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of IT products and equipment to meet all your technology needs
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-20">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full mr-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + productIndex * 0.05 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <product.icon className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
