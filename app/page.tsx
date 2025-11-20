import Header from "@/components/Header"
import Hero from "@/components/Hero"
import GetStarted from "@/components/GetStarted"
import MediaSection from "@/components/MediaSection"
import Benefits from "@/components/Benefits"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />
      <GetStarted />
      <MediaSection />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}