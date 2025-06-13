import ProductsSection from "@/components/products-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <ProductsSection />
      </div>
      <Footer />
    </main>
  )
}
