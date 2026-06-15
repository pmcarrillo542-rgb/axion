import Loader from "./Loader";

import HeroSection from "../components/HeroSection";
import BackgroundEffects from "../components/BackgroundEffects";
import TechStack from "../components/TechStack";
import Stats from "../components/Stats";
import Process from "../components/Process";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import WhyAxion from "../components/WhyAxion";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AXIONAssistant from "../components/AXIONAssistant";

export default function Home() {
  return (
    <>
      <Loader />

      <BackgroundEffects />

      <HeroSection />

      <TechStack />

      <Stats />

      <Process />

      <Services />

      <Showcase />

      <Testimonials />

      <WhyAxion />

      <CTA />

      <Footer />

      <WhatsAppButton />

      <AXIONAssistant />
    </>
  );
}