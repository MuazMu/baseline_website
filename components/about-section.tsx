"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Users, label: "Years of Experience", value: "20+" },
    { icon: Award, label: "Satisfied Clients", value: "500+" },
    { icon: Globe, label: "Projects Completed", value: "1000+" },
    { icon: TrendingUp, label: "Success Rate", value: "99%" },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Baseline</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Your Trusted IT Solutions Partner Since 2005</p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Baseline Computer Trading PLC was established in 2005 in Addis Ababa, Ethiopia. We are a solution-driven
                IT company specializing in network equipment supply and installation, banking equipment support,
                software solutions, surveillance systems, biometric solutions, GPS solutions, heavy-duty UPS supply and
                support, data center solutions, IT security services, and other related business sectors.
              </p>
              <p>
                With an extreme focus on using technology to better reach and service our customers, and to streamline
                processes, we have become one of the most efficient companies in our industry. This efficiency has given
                us an edge above the competition and allows us to move further into new market segments.
              </p>
              <p>
                In recent years, there has been tremendous growth in providing networking, banking, and data center
                solutions in the country, and Baseline was established to provide consumers with more buying options
                that suit their technology and electronics needs, as well as their budget.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/office.png" alt="Baseline Office" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Company Location */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Location</h3>
          <p className="text-gray-600">
            Africa Avenue Road (Bole Road), Yeshi Building 4th Floor, Addis Ababa, Ethiopia
          </p>
        </motion.div>
      </div>
    </section>
  )
}
