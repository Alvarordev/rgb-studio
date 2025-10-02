import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Compass, Home, Palette, Ruler, Lightbulb, Building } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Diseño Arquitectónico",
    description: "Creamos espacios únicos que reflejan tu visión y estilo de vida.",
    color: "hover:bg-[#592B31]/80 "
  },
  {
    icon: Home,
    title: "Diseño Residencial",
    description: "Transformamos casas en hogares con diseños personalizados y funcionales.",
    color: "hover:bg-[#315139]/80"
  },
  {
    icon: Building,
    title: "Proyectos Comerciales",
    description: "Espacios comerciales que maximizan la funcionalidad y el impacto visual.",
    color: "hover:bg-[#2F5567]/80"
  },
  {
    icon: Palette,
    title: "Consultoría de Color",
    description: "Selección experta de paletas que armonizan con tu espacio.",
    color: "hover:bg-[#2F5567]/80"
  },
  {
    icon: Ruler,
    title: "Planificación Espacial",
    description: "Optimizamos cada metro cuadrado con estrategias inteligentes.",
    color: "hover:bg-[#315139]/80"
  },
  {
    icon: Lightbulb,
    title: "Remodelación",
    description: "Renovamos espacios existentes con soluciones innovadoras.",
    color: "hover:bg-[#592B31]/80"
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="w-full min-h-screen py-20 mx-auto bg-background max-w-7xl">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-base font-medium tracking-wider uppercase text-foreground font-oswald">Lo Que Hacemos</p>
          <div className="h-[2px] w-28 bg-[#2F5567] mt-3 saturate-200"></div>
          {/* <h2 className="mb-6 text-4xl font-medium md:text-2xl text-foreground">
            Estamos Aquí Para Crear
            <br />
            <span>Tu Diseño Arquitectónico Ideal</span>
          </h2> */}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className={cn(`transition-all duration-300 rounded-none group hover:shadow-lg bg-card hover:text-white hover:saturate-200`, service.color)}> 
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 transition-colors rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <service.icon className="w-8 h-8 text-foreground/80" />
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold transition-colors select-none text-foreground group-hover:text-muted">{service.title}</h3>
                <p className="leading-relaxed transition-colors select-none text-muted-foreground group-hover:text-muted">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}