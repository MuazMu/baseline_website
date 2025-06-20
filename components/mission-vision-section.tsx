"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Eye, Lightbulb, Users } from "lucide-react"

export default function MissionVisionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To provide innovative, reliable, and cost-effective IT solutions that empower businesses and organizations
              to achieve their goals through cutting-edge technology and exceptional service delivery.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Deliver innovative technology solutions tailored to client needs</p>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Build long-term partnerships with our clients through exceptional service
                </p>
              </div>
              <div className="flex items-start">
                <Target className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Continuously improve and adapt to emerging technologies</p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To be the leading IT solutions provider in Ethiopia, recognized for our excellence in technology
              innovation, customer satisfaction, and contribution to the digital transformation of businesses and
              institutions.
            </p>
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision 2030</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Market leader in Ethiopian IT solutions sector
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Trusted partner for digital transformation initiatives
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Recognized for innovation and technological excellence
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Expanding presence across East Africa
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
