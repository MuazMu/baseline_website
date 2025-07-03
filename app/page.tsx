import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BusinessValues from "@/components/business-values"
import ClientsSection from "@/components/clients-section"
import ProductsPreview from "@/components/products-preview"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesPreview from "@/components/services-preview"
// import CorporateObjectives from "@/components/corporate-objectives"
// import WhyChooseBaseline from "@/components/why-choose-baseline"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <ProductsPreview />
      <BusinessValues />
      <ClientsSection />
      {/* <WhyChooseBaseline /> */}
      <Footer />
    </main>
  )
}
