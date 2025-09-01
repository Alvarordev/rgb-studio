import { BrushIcon, UsersIcon } from "lucide-react";

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
    <section className="flex flex-col justify-center w-full pt-20 text-foreground min-h-screen bg-gray-100">
      <div className="grid grid-cols-12 max-w-7xl w-full mx-auto gap-10">
        <div className="flex flex-col gap-5 col-span-6 pt-10">
          <h3 className="text-xs">RGB STUDIO</h3>
          <h2 className="text-5xl font-bold">
            Arquitectura Que <br /> <span className="text-primary"> Inspira Vida </span> 
          </h2>
          <p>
            En RGB Studio, cada proyeto es una oportunidad de crear espacios que
            mejoren la calidad de vida. Combinamos técnica, creatividad y
            sostenibilidad para diseñar arquitectura contemporánea.
          </p>

          <div className="space-y-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-foreground/60 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="col-span-6">
            <div className="">
              <img src="/bedroom.png" alt="about image" className="rounded-xl" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
