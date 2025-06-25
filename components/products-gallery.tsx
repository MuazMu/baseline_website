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
        { name: "Servers", icon: Server, image: "/images/network-server.jpg" },
        { name: "Routers", icon: Router, image: "/images/firewall.jpg" },
        { name: "Switches", icon: Network, image: "/images/network-switch.jpg" },
        { name: "Firewalls", icon: Shield, image: "/images/firewall.jpg" },
        { name: "Access Points", icon: Wifi, image: "/images/network-switch.jpg" },
        { name: "Patch Panels", icon: Network, image: "/images/network-server.jpg" },
        { name: "Network Tool Kits", icon: Wrench, image: "/images/firewall.jpg" },
        { name: "Rack Cabinets", icon: Server, image: "/images/network-server.jpg" },
        { name: "Cables and more", icon: Cable, image: "/images/network-switch.jpg" },
      ],
    },
    {
      title: "Banking Equipment",
      icon: Building2,
      description: "Specialized equipment for banking and financial institutions",
      products: [
        { name: "Passbook Printers", icon: Copy, image: "/images/passbook-printer.jpg" },
        { name: "Check Scanners", icon: Scan, image: "/images/check-scanner.jpg" },
        { name: "Note Counters/Detectors", icon: Calculator, image: "/images/note-counter.jpg" },
        { name: "Queue Management Solutions", icon: Users, image: "/images/queue-management.jpg" },
        { name: "ATM Accessories", icon: CreditCard, image: "/images/check-scanner.jpg" },
      ],
    },
    {
      title: "Software Solutions",
      icon: Monitor,
      description: "Enterprise software and applications for business efficiency",
      products: [
        { name: "Microsoft Products", icon: Monitor, image: "/images/microsoft.jpg" },
        { name: "Antivirus Software", icon: Shield, image: "/images/antivirus.jpg" },
        { name: "Recovery Software", icon: HardDrive, image: "/images/recovery.jpg" },
        { name: "Enterprise Solutions", icon: Building2, image: "/images/enterprise.jpg" },
        { name: "Geophysics Software", icon: Database, image: "/images/microsoft.jpg" },
        { name: "Data Center Monitoring", icon: Monitor, image: "/images/enterprise.jpg" },
      ],
    },
    {
      title: "Data Center Solutions",
      icon: Database,
      description: "Complete data center infrastructure and management systems",
      products: [
        { name: "HVAC Systems", icon: Wind, image: "/images/network-server.jpg" },
        { name: "Environmental Management", icon: Monitor, image: "/images/enterprise.jpg" },
        { name: "Fire Extinguishing Systems", icon: Flame, image: "/images/firewall.jpg" },
        { name: "Power System Cabling", icon: Zap, image: "/images/network-switch.jpg" },
        { name: "Power Distribution", icon: Zap, image: "/images/network-server.jpg" },
        { name: "Grounding and Bonding", icon: Zap, image: "/images/firewall.jpg" },
      ],
    },
    {
      title: "Security Systems",
      icon: Shield,
      description: "Advanced security and surveillance solutions",
      products: [
        { name: "IP-Based Cameras", icon: Camera, image: "/images/ip-camera.jpg" },
        { name: "CCTV Systems", icon: Eye, image: "/images/ip-camera.jpg" },
        { name: "IPTV", icon: Tv, image: "/images/enterprise.jpg" },
        { name: "SMATV", icon: Tv, image: "/images/microsoft.jpg" },
        { name: "Firewalls", icon: Shield, image: "/images/firewall.jpg" },
        { name: "Biometric/PIN Door Access", icon: Lock, image: "/images/access-control.jpg" },
      ],
    },
    {
      title: "Home Automation",
      icon: Home,
      description: "Smart home solutions and automation systems",
      products: [
        { name: "Smart Home Indoor Monitor", icon: Monitor, image: "/images/enterprise.jpg" },
        { name: "Video Door Entry Systems", icon: DoorOpen, image: "/images/access-control.jpg" },
        { name: "Indoor Monitors", icon: Monitor, image: "/images/microsoft.jpg" },
        { name: "IP Systems", icon: Network, image: "/images/network-switch.jpg" },
        { name: "Outdoor Panels", icon: Camera, image: "/images/ip-camera.jpg" },
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
              className="bg-gray-50 rounded-lg p-4 md:p-8"
            >
              {/* Category Header */}
              <div className="text-center mb-8 md:mb-12">
                <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                  <div className="bg-primary/10 p-3 md:p-4 rounded-full mb-2 md:mb-0 md:mr-4">
                    <category.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">{category.description}</p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + productIndex * 0.05 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={categoryIndex === 0 && productIndex < 4}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-3 md:p-4">
                      <div className="flex items-center mb-2">
                        <product.icon className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 flex-shrink-0" />
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
                          {product.name}
                        </h3>
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
