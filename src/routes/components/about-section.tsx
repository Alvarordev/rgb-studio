import { Link } from "@tanstack/react-router";
import AnimatedImage from "./animated-image";
import { ArrowUpRight } from "lucide-react";

function AboutSection() {
  return (
    <section className="flex flex-col w-full bg-background text-foreground">
      <div className="container grid w-full grid-cols-6 py-32 mx-auto px-15">
        <div className="flex flex-col items-center col-span-6 pb-20">
          <p className="font-medium tracking-wider uppercase text-medium font-oswald">
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