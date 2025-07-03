"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Server, Monitor, Database, Cpu, Camera, Home } from "lucide-react"
import TopSectionBackground from "@/components/ui/top-section-background"

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const services = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Network Equipment",
      items: ["Servers", "Routers", "Switches", "Firewalls", "Access Points"],
      image: "/images/services/network.jpg",
    },
    {
      icon: <Monitor className="h-10 w-10 text-primary" />,
      title: "Banking Equipment",
      items: [
        "Passbook Printers",
        "Check Scanners",
        "Note Counters/Detectors",
        "Queue Management Solutions",
        "ATM Accessories",
      ],
      image: "/images/services/banking.jpg",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Software Solutions",
      items: [
        "Microsoft Products",
        "Antivirus Software",
        "Recovery Software",
        "Enterprise Solutions",
        "Data Center Monitoring",
      ],
      image: "/images/services/software.jpg",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Center Solutions",
      items: [
        "HVAC Systems",
        "Environmental Management",
        "Fire Extinguishing Systems",
        "Power Distribution",
        "Grounding and Bonding",
      ],
      image: "/images/services/datacenter.jpg",
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Security Systems",
      items: ["IP-Based Cameras", "CCTV Systems", "IPTV", "SMATV", "Biometric/PIN Door Access"],
      image: "/images/services/security.jpg",
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Home Automation",
      items: [
        "Smart Home Indoor Monitor",
        "Video Door Entry Systems",
        "Indoor Monitors",
        "IP Systems",
        "Outdoor Panels",
      ],
      image: "/images/services/homeauto.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <TopSectionBackground />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Offerings</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Baseline's sales department, with its experience to the height of technology, is unique in our market for
            complete & effective supply.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group"
            >
              <div className="mb-4 w-full h-32 flex items-center justify-center overflow-hidden rounded-md">
                <Image src={service.image} alt={service.title} width={300} height={128} className="object-cover w-full h-full" />
              </div>
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Department</h3>
              <p className="text-gray-600 mb-6">
                Baseline's technical department is the backbone of the company, fully responsible for responding to
                customer requests. Our main activities include:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Support service for all supplied equipment and solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>LAN & WAN installation and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Free technical consultancy service for customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Maintenance & support of all IT equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Developing technical capacity of the company</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Research on new technologies and knowledge transfer to customers</span>
                </li>
              </ul>
              <Button className="mt-6 bg-primary hover:bg-primary/90">Learn More</Button>
            </div>
            <div>
              <Image
                src="/images/technical_department.png"
                alt="Technical Support Team"
                width={500}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
