import { createFileRoute } from "@tanstack/react-router";
import Header from "./components/header";
import { Footer } from "./components/footer";
import AboutSection from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import Carousel from "./components/carousel";
import AnimatedTitle from "./components/animated-title";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative w-full text-white font-montserrat">
      <Header />
      <section
        className="flex items-center w-full min-h-screen"
        style={{
          backgroundImage:
            "url('/modern-architectural-interior-with-dark-walls-and-.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full pt-6 mx-auto max-w-7xl">
          <h1>
            <AnimatedTitle title="Transforma tu Espacio" trigger={1} className="items-start text-7xl" />
          </h1>
          <p className="max-w-2xl mt-4 text-lg">
            En RGB studios creamos espacios arquitectónicos únicos que combinan
            funcionalidad, estética y sostenibilidad. Transformamos ideas en
            realidades habitables.
          </p>
        </div>
      </section>
      <AboutSection />
      <section className="flex flex-col items-center w-full min-h-screen py-32 bg-primary/80">
        <div className="flex flex-col items-center pb-40 text-center">
          <p className="text-sm tracking-wider uppercase text-card ">
            Nuestros Proyectos
          </p>
          <div className="h-[1px] w-36 bg-card mt-3 "></div>
        </div>
        <div className="flex justify-center w-full">
          <Carousel />
        </div>
      </section>
      <ServicesSection />
      <Footer />
    </div>
  );
}
