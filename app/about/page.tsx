import AboutSection from "@/components/about-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
