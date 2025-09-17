import Header from "../components/Header";
import Hero from "../components/Hero";
import GymScannerSection from "../components/GymScannerSection"
import WhyPeopleLoveSection from "../components/WhyPeopleLoveSection"
import RealExperiencesSection from "../components/RealExperiencesSection"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <div className="antialiased">
      <Header />
      <main>
        <Hero />
        <GymScannerSection />
        <WhyPeopleLoveSection />
        <RealExperiencesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
