import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import ArchitectureSection from "../components/home/ArchitectureSection";
import FeaturesSection from "../components/home/FeaturesSection";
import NamariFlowSection from "../components/home/NamariFlowSection";
import UseCasesSection from "../components/home/UseCasesSection";
import SecuritySection from "../components/home/SecuritySection";
import CTASection from "../components/home/CTASection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <ProblemSection />
      <ArchitectureSection />
      <FeaturesSection />
      <NamariFlowSection />
      <UseCasesSection />
      <SecuritySection />
      <CTASection />

      <Footer />
    </>
  );
}