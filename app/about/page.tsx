import AboutSection from "@/components/about-section"
import MissionVisionSection from "@/components/mission-vision-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="relative pt-20">
        {/* Background for top section */}
        <div className="absolute inset-0 top-0 h-72 w-full bg-gradient-to-b from-blue-50 to-white z-0" />
        <div className="relative z-10">
          <AboutSection />
          <MissionVisionSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
