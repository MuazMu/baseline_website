"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Building, Building2, Landmark, BadgeCheck } from "lucide-react"

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

  const clients = {
    government: [
      "Document Authentication & Registration Office (DARO)",
      "Ministry of Finance & Economy Development (MoFED)",
      "Ethiopia Radiation Protection Authority (ERPA)",
      "Ethiopia Revenue and Customs Authority (ERCA)",
      "Addis Ababa City Gov. Bureau of Labor & Social Affairs",
    ],
    banking: ["Dashen Bank", "Berhan Int. Bank", "Zemen Bank", "Addis Int. Bank", "Lion Int. Bank"],
    organizations: [
      "Ethiopia Commodity Exchange (ECX)",
      "Berhan na Selam Printing Press",
      "Huawei Technology in Ethiopia",
      "SOS",
      "St. Mary's Catholic Church School",
      "Netherlands Development Organization (Ethiopia)",
    ],
  }

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Government Institutions</h3>
            </div>
            <ul className="space-y-2">
              {clients.government.map((client, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  {client}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Landmark className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Banking Sector</h3>
            </div>
            <ul className="space-y-2">
              {clients.banking.map((client, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  {client}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Building2 className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Other Organizations</h3>
            </div>
            <ul className="space-y-2">
              {clients.organizations.map((client, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  {client}
                </li>
              ))}
            </ul>
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
