import HeroSection from "@/components/hero-section"
import CorporateObjectives from "@/components/corporate-objectives"
import BusinessValues from "@/components/business-values"
import ClientsSection from "@/components/clients-section"
import ProductsPreview from "@/components/products-preview"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesPreview from "@/components/services-preview"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesPreview />
      <CorporateObjectives />
      <BusinessValues />
      <ClientsSection />
      <ProductsPreview />
      <Footer />
    </main>
  )
}
