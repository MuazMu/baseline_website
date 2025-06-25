"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsPreview() {
  const featuredProducts = [
    {
      name: "Enterprise Servers",
      image: "/images/network-server.jpg",
      category: "Network Equipment",
      description: "High-performance servers for business applications",
    },
    {
      name: "Check Scanners",
      image: "/images/check-scanner.jpg",
      category: "Banking Equipment",
      description: "Accurate and efficient check processing",
    },
    {
      name: "Microsoft Products",
      image: "/images/microsoft.jpg",
      category: "Software Solutions",
      description: "Complete Microsoft software solutions",
    },
    {
      name: "CCTV Systems",
      image: "/images/cctv.jpg",
      category: "Security Systems",
      description: "Complete surveillance solutions",
    },
  ]

  return (
    <section id="products-preview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of high-quality products designed to meet your technology needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1">
                  {product.category}
                </div>
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

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
