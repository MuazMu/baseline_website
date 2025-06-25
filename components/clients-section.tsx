"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Building, Building2, Landmark, BadgeCheck } from "lucide-react"
import Image from "next/image"

export default function ClientsSection() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const governmentLogos = [
    {
      src: "/images/logos/senedoch.webp",
      alt: "Document Authentication & Registration Office (DARO)",
      name: "DARO",
    },
    {
      src: "/images/logos/ministry-of-finance.webp",
      alt: "Ministry of Finance & Economy Development",
      name: "MoFED",
    },
    {
      src: "/images/logos/erpa.jpeg",
      alt: "Ethiopia Radiation Protection Authority",
      name: "ERPA",
    },
    {
      src: "/images/logos/gebiwoch.jpeg",
      alt: "Ethiopia Revenue and Customs Authority",
      name: "ERCA",
    },
    {
      src: "/images/logos/addis-ababa-labor.jpeg",
      alt: "Addis Ababa City Gov. Bureau of Labor & Social Affairs",
      name: "AA Labor Bureau",
    },
  ]

  const bankingLogos = [
    {
      src: "/images/logos/dashen-bank.jpeg",
      alt: "Dashen Bank",
      name: "Dashen Bank",
    },
    {
      src: "/images/logos/berhan-bank.jpeg",
      alt: "Berhan International Bank",
      name: "Berhan Int. Bank",
    },
    {
      src: "/images/logos/zemen-bank.webp",
      alt: "Zemen Bank",
      name: "Zemen Bank",
    },
    {
      src: "/images/logos/addis-int-bank.png",
      alt: "Addis International Bank",
      name: "Addis Int. Bank",
    },
    {
      src: "/images/logos/lion-bank.webp",
      alt: "Lion International Bank",
      name: "Lion Int. Bank",
    },
    {
      src: "/images/logos/negd-bank.webp",
      alt: "Negd Bank",
      name: "Negd Bank",
    },
  ]

  const organizationLogos = [
    {
      src: "/images/logos/ecx.jpeg",
      alt: "Ethiopia Commodity Exchange",
      name: "Ethiopia Commodity Exchange (ECX)",
    },
    {
      src: "/images/logos/berhan-ena-selam.png",
      alt: "Berhan na Selam Printing Enterprise",
      name: "Berhan na Selam Printing Press",
    },
    {
      src: "/images/logos/huawei.png",
      alt: "Huawei Technology in Ethiopia",
      name: "Huawei Technology in Ethiopia",
    },
    {
      src: "/images/logos/sos.png",
      alt: "SOS Children's Villages",
      name: "SOS",
    },
    {
      src: "/images/logos/saint-mary-school.jpeg",
      alt: "St. Mary's Catholic Church School",
      name: "St. Mary's Catholic Church School",
    },
    {
      src: "/images/logos/snv.png",
      alt: "Netherlands Development Organization (Ethiopia)",
      name: "Netherlands Development Organization (Ethiopia)",
    },
  ]

  const reasons = [
    {
      icon: <BadgeCheck className="h-12 w-12 text-primary" />,
      title: "20+ Years of Excellence",
      description:
        "With over 20 years of experience in the IT industry, we have built a solid reputation for reliability and expertise.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Expert Technical Team",
      description:
        "Our highly skilled professionals are certified experts in their respective fields, ensuring top quality service delivery.",
    },
    {
      icon: <Landmark className="h-12 w-12 text-primary" />,
      title: "Customer-Focused Approach",
      description:
        "We prioritize customer satisfaction by understanding your unique needs and providing tailored solutions.",
    },
  ]

  const MarqueeRow = ({
    logos,
    direction = "left",
    speed = 50,
  }: {
    logos: any[]
    direction?: "left" | "right"
    speed?: number
  }) => {
    return (
      <>
        {/* Desktop Marquee */}
        <div className="hidden md:block relative overflow-hidden py-4">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: direction === "left" ? [0, -1000] : [-1000, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: speed,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                style={{ minWidth: "200px", height: "120px" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Horizontal Scroll Marquee */}
        <div className="md:hidden overflow-x-auto py-4">
          <div className="flex gap-4 px-2 w-max">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-2 flex items-center justify-center"
                style={{ width: "80px", height: "60px" }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={60}
                  height={40}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Distinguished Clients</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since its establishment, Baseline has achieved immense success in its activities. During its period of
            operation, it has acquired different customers who willingly testify to the efficiency of our supply and
            after-sales service.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {/* Government Institutions */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Government Institutions</h3>
            </div>
            <MarqueeRow logos={governmentLogos} direction="left" speed={40} />
          </div>

          {/* Banking Sector */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <Landmark className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Banking Sector</h3>
            </div>
            <MarqueeRow logos={bankingLogos} direction="right" speed={35} />
          </div>

          {/* Other Organizations */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <Building2 className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Other Organizations</h3>
            </div>
            <MarqueeRow logos={organizationLogos} direction="left" speed={45} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Baseline?</h3>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Become Our Client
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
