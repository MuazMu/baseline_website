import ProductsGallery from "@/components/products-gallery"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <ProductsGallery />
      </div>
      <Footer />
    </main>
  )
}
