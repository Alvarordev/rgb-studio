import { BrushIcon, UsersIcon } from "lucide-react";
import AnimatedImage from "./animated-image";

function AboutSection() {
  const features = [
    {
      icon: BrushIcon,
      title: "Diseño Arquitectónico Integral",
      description:
        "Desarrollamos proyectos completos desde la conceptualización hasta la ejecución final.",
    },
    {
      icon: UsersIcon,
      title: "Planificación Espacial Innovadora",
      description:
        "Optimizamos cada metro cuadrado con soluciones creativas y funcionales.",
    },
  ];

  return (
    <section className="flex flex-col justify-center w-full min-h-screen pt-20 bg-sidebar text-foreground">
      <div className="grid w-full grid-cols-12 gap-10 mx-auto max-w-7xl">
        <div className="flex flex-col col-span-6 gap-5 pt-10">
          <h3 className="text-xs">RGB STUDIO</h3>
          <h2 className="text-5xl font-bold">
            Arquitectura Que <br /> <span className="text-primary"> Inspira Vida </span> 
          </h2>
          <p>
            En RGB Studio, cada proyeto es una oportunidad de crear espacios que
            mejoren la calidad de vida. Combinamos técnica, creatividad y
            sostenibilidad para diseñar arquitectura contemporánea.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/60">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="col-span-6">
          <AnimatedImage img="/bedroom.png"/>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
