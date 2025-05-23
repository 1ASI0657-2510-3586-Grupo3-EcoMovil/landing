import { AboutSection } from "./components/about-section";
import { CTASection } from "./components/cta-section";
import { DownloadSection } from "./components/download-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { PricingSection } from "./components/pricing-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <AboutSection />
        <DownloadSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
