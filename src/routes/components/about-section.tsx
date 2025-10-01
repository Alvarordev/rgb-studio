import { Link } from "@tanstack/react-router";
import AnimatedImage from "./animated-image";
import { ArrowUpRight } from "lucide-react";

function AboutSection() {
  return (
    <section className="flex flex-col w-full bg-background text-foreground">
      <div className="container grid w-full grid-cols-6 py-32 mx-auto px-15">
        <div className="flex flex-col items-center col-span-6 pb-20">
          <p className="text-sm font-medium tracking-wider uppercase">
            SOBRE NOSOTROS
          </p>
          <div className="h-[1px] w-28 bg-foreground mt-3 "></div>
        </div>

        <div className="relative col-span-3 pl-20">
          <AnimatedImage
            img="/02/02-3.jpg"
            classname="w-[80%] h-[70vh] object-cover"
          />

          <div className="w-[80%] mt-40">
            <p className="mb-4 text-foreground">
              En RGB creemos en la arquitectura como una forma de transformar ideas en espacios con identidad propia. 
            </p>
            <p className=" text-foreground">
              Nuestro estudio combina creatividad, técnica y colaboración para diseñar proyectos que transmiten equilibrio entre funcionalidad, estética y sostenibilidad. Cada detalle refleja el compromiso de nuestro equipo con la innovación y la calidad.
            </p>

            <p className="mt-4 text-foreground">
              Trabajamos con pasión y dedicación, creando propuestas únicas que buscan inspirar, conectar y trascender en el tiempo.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end col-span-3 pr-20">
          <div className="w-[80%]">
             <p className="mb-4 text-foreground">
              En RGB creemos en la arquitectura como una forma de transformar ideas en espacios con identidad propia. 
            </p>
            <p className=" text-foreground">
              Nuestro estudio combina creatividad, técnica y colaboración para diseñar proyectos que transmiten equilibrio entre funcionalidad, estética y sostenibilidad. Cada detalle refleja el compromiso de nuestro equipo con la innovación y la calidad.
            </p>

            <p className="mt-4 text-foreground">
              Trabajamos con pasión y dedicación, creando propuestas únicas que buscan inspirar, conectar y trascender en el tiempo.
            </p>
            <AnimatedImage
              img="/about/grupal.png"
              classname="mt-40 h-[70vh] object-cover w-full"
            />


            <Link to="/nosotros" reloadDocument className="flex items-center justify-end mt-5 text-xs font-medium uppercase transition-all hover:scale-105">
              <span>Explora más sobre nosotros</span>
              <ArrowUpRight className="inline w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

{
  /* <section className="flex flex-col justify-center w-full h-screen pt-20 bg-neutral-400/40 text-foreground">
    //   <div className="grid w-full grid-cols-12 gap-10 mx-auto max-w-7xl">
    //     <div className="flex flex-col col-span-6 gap-5 pt-10">
    //       <h3 className="text-xs">RGB STUDIO</h3>
    //       <h2 className="text-5xl font-bold">
    //         Arquitectura Que <br /> <span className="text-primary-foreground"> Inspira Vida </span> 
    //       </h2>
    //       <p>
    //         En RGB Studio, cada proyeto es una oportunidad de crear espacios que
    //         mejoren la calidad de vida. Combinamos técnica, creatividad y
    //         sostenibilidad para diseñar arquitectura contemporánea.
    //       </p>

    //       <div className="mt-8 space-y-6">
    //         {features.map((feature, index) => (
    //           <div key={index} className="flex gap-4">
    //             <div className="flex-shrink-0">
    //               <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/60">
    //                 <feature.icon className="w-6 h-6 text-foreground" />
    //               </div>
    //             </div>

    //             <div>
    //               <h3 className="mb-1 text-lg font-semibold text-foreground">
    //                 {feature.title}
    //               </h3>
    //               <p className="text-foreground">{feature.description}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //     </div>

    //     <div className="col-span-6">
    //       <AnimatedImage img="/bedroom.png"/>
    //     </div>
    //   </div>
    // </section> */
}
