import { Link } from "@tanstack/react-router";
import AnimatedImage from "./animated-image";
import { ArrowUpRight } from "lucide-react";

function AboutSection() {
  return (
    <section className="flex flex-col w-full border-t bg-background text-foreground">
      <div className="container grid w-full grid-cols-6 mx-auto py-28 xl:py-32 xl:px-15">
        <div className="flex flex-col items-center col-span-6 pb-20">
          <p className="font-medium tracking-wider uppercase text-medium font-oswald">
            SOBRE NOSOTROS
          </p>
          <div className="h-[2px] w-28 bg-[#592B31] mt-3 1] saturate-200 "></div>
        </div>

        <div className="relative col-span-3 pl-20">
          <AnimatedImage
            img="/02/02-3.jpg"
            classname="w-[80%] xl:h-[70vh] h-[65vh] object-cover"
          />

          <div className="w-[80%] xl:mt-40 mt-32 xl:text-base text-sm">
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
          <div className="w-[80%] xl:text-base text-sm">
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
              img="/02/02-8.jpg"
              classname="xl:mt-40 mt-32 xl:h-[70vh] h-[65vh] object-cover w-full"
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