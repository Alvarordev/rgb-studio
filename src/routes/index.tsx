import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "./components/footer";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import ProjectSection from "./components/projects-section";
import { ServicesSection } from "./components/services-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative w-full text-white font-montserrat">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ServicesSection/>
      <Footer />
    </div>
  );
}
