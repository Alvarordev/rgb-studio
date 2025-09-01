import { Card, CardContent } from "@/components/ui/card"
import { Compass, Home, Palette, Ruler, Lightbulb, Building } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Diseño Arquitectónico",
    description: "Creamos espacios únicos que reflejan tu visión y estilo de vida.",
  },
  {
    icon: Home,
    title: "Diseño Residencial",
    description: "Transformamos casas en hogares con diseños personalizados y funcionales.",
  },
  {
    icon: Building,
    title: "Proyectos Comerciales",
    description: "Espacios comerciales que maximizan la funcionalidad y el impacto visual.",
  },
  {
    icon: Palette,
    title: "Consultoría de Color",
    description: "Selección experta de paletas que armonizan con tu espacio.",
  },
  {
    icon: Ruler,
    title: "Planificación Espacial",
    description: "Optimizamos cada metro cuadrado con estrategias inteligentes.",
  },
  {
    icon: Lightbulb,
    title: "Remodelación",
    description: "Renovamos espacios existentes con soluciones innovadoras.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background max-w-7xl w-full mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">Lo Que Hacemos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Estamos Aquí Para Crear
            <br />
            <span className="text-primary">Tu Diseño Arquitectónico Ideal</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card hover:bg-primary-foreground hover:text-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-muted transition-colors select-none">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-muted transition-colors select-none">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}