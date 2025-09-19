import { createFileRoute } from "@tanstack/react-router";
import Header from "./components/header";
import { Footer } from "./components/footer";
import AboutSection from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import Carousel from "./components/carousel";
import AnimatedTitle from "./components/animated-title";
import AnimatedImage from "./components/animated-image";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative w-full text-white font-montserrat">
      <section className="flex flex-col items-center w-full h-screen bg-foreground">
        <Header />
        <div className="flex flex-col flex-1 w-full h-full px-20 py-20">
          <div className="grid w-full h-full grid-cols-10">
            <div className="flex flex-col justify-end h-full col-span-3 gap-4 pb-10 max-w-80">
              <AnimatedImage
                img="public/contemporary-loft-with-minimalist-design.png"
                classname="object-cover w-64 h-44"
              />
              <p className="text-sm font-light uppercase text-wrap">
                Creamos espacios <br/> arquitectónicos únicos <br/> que combinan
                funcionalidad, <br/> estética y sostenibilidad.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 h-full col-span-4 gap-6">
              <AnimatedImage
                img="public/urban-residential-interior-with-industrial-element.png"
                classname="object-cover w-[380px] h-[500px]"
              />

              <h1>
                <AnimatedTitle
                  title="RGB STUDIO"
                  trigger={1}
                  className="items-start font-medium text-7xl"
                />
              </h1>
            </div>

            <div className="flex flex-col items-end w-full h-full col-span-3 gap-4 pt-10 justify-baseline">
              <AnimatedImage
                img="public/modern-minimalist-living-room-with-neutral-tones.png"
                classname="object-cover w-64 h-44"
              />
              <p className="text-sm uppercase text-end">
                Creamos espacios <br/> arquitectónicos únicos <br/> que combinan
                funcionalidad, <br/> estética y sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <section className="flex flex-col items-center w-full min-h-screen py-32 bg-foreground">
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
