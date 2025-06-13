"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Award, Users, HeartHandshake, Scale, CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Baseline</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Established in 2005 in Addis Ababa, Ethiopia, we are a solution-driven IT company specializing in network
            equipment, banking solutions, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/office.jpg"
              alt="Baseline Office"
              width={600}
              height={600}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              Baseline Computer Trading PLC was established in 2005 in Addis Ababa, Ethiopia. We are a solution-driven
              IT company specializing in network equipment supply and installation, banking equipment support, software
              solutions, surveillance systems, biometric solutions, GPS solutions, heavy-duty UPS supply and support,
              data center solutions, IT security services, and other related business sectors.
            </p>
            <p className="text-gray-600">
              With an extreme focus on using technology to better reach and service our customers, and to streamline
              processes, we have become one of the most efficient companies in our industry. This efficiency has given
              us an edge above the competition and allows us to move further into new market segments.
            </p>
            <p className="text-gray-600">
              In recent years, there has been tremendous growth in providing networking, banking, and data center
              solutions in the country, and Baseline was established to provide consumers with more buying options that
              suit their technology and electronics needs, as well as their budget. Over the years, our customer base
              has increased tremendously from various regional cities in Ethiopia.
            </p>
            <p className="font-medium">
              Company Location: Africa Avenue Road (Bole Road), Yeshi Building 4th Floor, Addis Ababa, Ethiopia
            </p>
          </motion.div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Objectives</h3>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Baseline Computer Trading PLC is committed to building mutually beneficial working relationships with
              customers through our guarantee of secure and reliable transactions, expeditious shipment of the best
              quality products, and our delivery of exceptional and dedicated customer service at all times.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Values</h3>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
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
