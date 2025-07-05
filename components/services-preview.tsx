import Link from "next/link"
import { Server, Monitor, Cpu, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const previewServices = [
  {
    image: "/images/services/network.jpg",
    title: "Network Equipment", items: ["Servers", "Routers", "Switches"]
  },
  {
    image: "/images/services/banking.jpg",
    title: "Banking Equipment", items: ["Passbook Printers", "Check Scanners"]
  },
  {
    image: "/images/services/software.jpg",
    title: "Software Solutions", items: ["Microsoft Products", "Antivirus Software"]
  },
  {
    image: "/images/services/homeauto.jpg",
    title: "Home Automation", items: ["Smart Home Monitors", "Video Door Entry"]
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Key Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Explore a few of the core services we offer to empower your business with technology.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {previewServices.map((service, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow border border-gray-100 flex flex-col items-center">
              <div className="mb-3 w-20 h-20 relative">
                <Image src={service.image} alt={service.title + ' image'} fill className="object-cover rounded-md" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">Read More</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
 