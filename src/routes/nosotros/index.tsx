import { createFileRoute } from "@tanstack/react-router";
import AnimatedTitle from "../components/animated-title";
import Header from "../components/header";
import HoverSlideIn from "../components/hover-slide-in";
import { Footer } from "../components/footer";
import { MemberSlider } from "./components/member-slider";

export const Route = createFileRoute("/nosotros/")({
  component: RouteComponent,
});

const team = [
  {
    name: "Alvaro Rojas",
    position: "Arquitecto & Socio-Fundador",
    description:
      "Graduado con una licenciatura en Arquitectura por la Universidad Peruana de Ciencias Aplicadas (UPC), Álvaro comenzó su carrera en un estudio de diseño de interiores de alta gama. Escaló hasta ser diseñador senior, produciendo diseños que le valieron premios nacionales e internacionales. Su experiencia combina un gran conocimiento y pasión en el sector de diseño interior residencial y comercial de lujo.",
    imageUrl: "/about/alv.webp",
  },
  {
    name: "Alessandra Diaz",
    position: "Arquitecta & Socia-Fundador",
    description:
      "Tras obtener su título de Arquitectura por la Universidad Peruana de Ciencias Aplicadas (UPC), Katherine se unió a un prestigioso estudio de diseño de lujo. Ascendió a diseñadora principal, liderando proyectos reconocidos con importantes galardones de diseño global. Katherine aporta una experiencia vasta, enfocada en la estética y el conocimiento técnico profundo en el diseño de interiores premium residencial y comercial.",
    imageUrl: "/about/kat.webp",
  },
  {
    name: "Marjorie Fribourg",
    position: "Arquitecta & Socia-Fundador",
    description:
      "Después de licenciarse como Arquitecta en la Universidad Peruana de Ciencias Aplicadas (UPC), Marjorie se integró a una reconocida firma de diseño interior premium. Creció hasta convertirse en diseñadora senior, donde sus propuestas creativas ganaron múltiples premios de diseño a nivel nacional e internacional. Marjorie posee una experiencia completa, con dominio experto en proyectos de diseño de interiores en los segmentos comercial y residencial de lujo.",
    imageUrl: "/about/mar.webp",
  },
];

function RouteComponent() {
  return (
    <main className="font-montserrat bg-foreground">
      <section className="container flex flex-col items-center w-full gap-8 mx-auto mb-40 bg-foreground text-card">
        <Header />

        <AnimatedTitle
          title="NOSOTROS"
          trigger={1}
          className="mt-10 font-medium xl:mt-20 xl:text-8xl text-7xl font-oswald"
        />

        <div className="flex flex-col items-center justify-between w-full mt-4 2xl:px-20">
          <p className="w-full max-w-4xl mb-20 text-base leading-8 text-center">
            RGB es un estudio de arquitectura y diseño que busca crear espacios
            únicos, funcionales y atemporales, adaptados a la visión y
            necesidades de cada cliente. Trabajamos cada proyecto de manera
            cercana y colaborativa, transformando ideas en lugares que inspiran
            y perduran en el tiempo.
          </p>
          <div className="container grid justify-between grid-cols-6 gap-10 mx-auto xl:px-12">
            <div className="col-span-2 h-[50vh]">
              <HoverSlideIn src="/about/boca.webp" alt="boca" color="red" />
            </div>
            <div className="col-span-2 h-[50vh]">
              <HoverSlideIn src="/about/oidos.webp" alt="boca" color="green" />
            </div>
            <div className="col-span-2 h-[50vh]">
              <HoverSlideIn src="/about/ojos.webp" alt="boca" color="blue" />
            </div>
          </div>
        </div>
      </section>

      <section className="container flex justify-between h-screen py-32 mx-auto xl:px-28 text-card">
        <h2 className="2xl:text-[4.8rem] text-6xl 2xl:leading-20 leading-18 uppercase font-oswald">
          comprometidos <br /> en entregar <br /> excepcionales <br />{" "}
          resultados
        </h2>

        <div className="flex flex-col items-center w-full gap-20 pl-56 2xl:pt-8 2xl:pl-72">
          <p className="text-sm leading-7 uppercase 2xl:leading-9 2xl:text-base">
            Cada proyecto lo abordamos con la misma pasión y compromiso,
            cuidando los detalles y buscando siempre un equilibrio entre
            estética, funcionalidad y sostenibilidad. Nos inspira trabajar de
            manera colaborativa, compartiendo visiones y experiencias que
            enriquecen el proceso creativo y hacen que cada propuesta sea única.
          </p>
          <img
            src="/logos/logo-reducido-blanco.png"
            alt="logo reducido"
            className="w-64"
          />
        </div>
      </section>

      <section className="container w-full h-screen mx-auto xl:px-20 bg-foreground text-card">
        <h3 className="text-5xl font-oswald text-medium">NUESTRO EQUIPO</h3>

        <div className="w-full bg-white h-[1px] my-15"></div>

        <div className="flex flex-col w-full">
          <MemberSlider team={team} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
