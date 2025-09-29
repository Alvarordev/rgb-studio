import { createFileRoute } from "@tanstack/react-router";
import AnimatedTitle from "../components/animated-title";
import Header from "../components/header";
import HoverSlideIn from "../components/hover-slide-in";

export const Route = createFileRoute("/nosotros/")({
  component: RouteComponent,
});

const team = [
  {
    name: "Alvaro Diaz",
    description:
      "Graduado con una licenciatura en Arquitectura por la Universidad Peruana de Ciencias Aplicadas (UPC), Álvaro comenzó su carrera en un estudio de diseño de interiores de alta gama. Escaló hasta ser diseñador senior, produciendo diseños que le valieron premios nacionales e internacionales. Su experiencia combina un gran conocimiento y pasión en el sector de diseño interior residencial y comercial de lujo.",
    imageUrl: "/about/alv.png",
  },
  {
    name: "Katherine Diaz",
    description:
      "Tras obtener su título de Arquitectura por la Universidad Peruana de Ciencias Aplicadas (UPC), Katherine se unió a un prestigioso estudio de diseño de lujo. Ascendió a diseñadora principal, liderando proyectos reconocidos con importantes galardones de diseño global. Katherine aporta una experiencia vasta, enfocada en la estética y el conocimiento técnico profundo en el diseño de interiores premium residencial y comercial.",
    imageUrl: "/about/kat.png",
  },
  {
    name: "Marjorie Fribourg",
    description:
      "Después de licenciarse como Arquitecta en la Universidad Peruana de Ciencias Aplicadas (UPC), Marjorie se integró a una reconocida firma de diseño interior premium. Creció hasta convertirse en diseñadora senior, donde sus propuestas creativas ganaron múltiples premios de diseño a nivel nacional e internacional. Marjorie posee una experiencia completa, con dominio experto en proyectos de diseño de interiores en los segmentos comercial y residencial de lujo.",
    imageUrl: "/about/mar.png",
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
          className="mt-20 font-light text-8xl"
        />

        <div className="flex px-20 mt-20">
          <img
            src="/about/grupal.png"
            alt="nosotros"
            className="min-w-[60vh] h-[80vh]  object-cover"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptas facere rem eaque harum enim porro, quisquam, deserunt
            laborum soluta esse. Voluptates harum sit consequatur, dignissimos
            delectus molestiae dolorum expedita.
          </p>
        </div>
      </section>


      <section className="container flex justify-between py-32 mx-auto px-28 text-card">
        <h2 className="uppercase text-7xl">We take pride <br/> in delivering <br/> Exceptional <br/> Results </h2>

        <div className="flex flex-col items-center w-1/2 gap-20 pl-40">
          <p className="leading-8 text-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, dignissimos, accusamus temporibus libero deleniti saepe dolore eligendi quisquam fuga culpa eius aliquam, optio nostrum autem! </p>
          <img src="/logos/logo-reducido-blanco.png" alt="logo reducido" className="w-72" />
        </div>
      </section>

      <section className="w-full h-screen py-20 text-card">
        <div className="flex flex-col items-center pb-20">
          <p className="text-sm font-medium tracking-wider uppercase">
            Nuestro Equipo
          </p>
          <div className="h-[1px] w-28 bg-background mt-3 "></div>

          <p className="mt-10 text-background/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit laborum, optio, voluptas enim itaque aperiam debitis dolorem eos possimus esse fuga.</p>
        </div>
        <div className="container grid justify-between grid-cols-6 gap-20 px-20 mx-auto">
          <div className="col-span-2 h-[50vh]">
            <HoverSlideIn src="/about/boca.png" alt="boca" color="red" />
          </div>
          <div className="col-span-2 h-[50vh]">
            <HoverSlideIn src="/about/oidos.png" alt="boca" color="green" />
          </div>
          <div className="col-span-2 h-[50vh]">
            <HoverSlideIn src="/about/ojos.png" alt="boca" color="blue" />
          </div>
        </div>
      </section>

      <section className="w-full h-full bg-foreground text-card">
        <div className="flex flex-col w-full gap-20">
          {team.map((member) => (
            <div
              key={member.name}
              className="relative flex justify-between w-full max-w-6xl mx-auto"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="h-[720px] min-w-[610px] object-cover"
              />
              <div className="flex flex-col pl-32">
                <AnimatedTitle
                  title={member.name}
                  trigger={1}
                  className="text-6xl font-medium uppercase text-start"
                />
                <p className="mt-auto text-sm leading-6 text-left">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
