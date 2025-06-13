"use client"

import { motion } from "framer-motion"
import { Award, Users, HeartHandshake, Scale, CheckCircle2 } from "lucide-react"

export default function BusinessValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Honesty",
      description:
        "We engage with our customers in open and honest communication at all times, providing reliable information and ensuring transparency.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Teamwork",
      description:
        "We value every member of our team and acknowledge that we can perform better and serve our customers more efficiently when we work together cohesively.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Customer Satisfaction",
      description:
        "We aspire to develop with our customers a mutually beneficial relationship that extends beyond our products and services.",
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description:
        "We conduct our business with high regard for proper business ethics and perform our tasks to the best of our abilities.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Accountability",
      description:
        "We take responsibility for all our actions; we set clear and achievable goals and consistently measure our results to improve our business operations.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In everything we do and in every business decision we make, we are driven by the following core business
              values:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
