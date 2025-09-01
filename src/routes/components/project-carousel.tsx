import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

const projects = [
  {
    id: 1,
    title: "Casa Moderna en Kieveskoe",
    description:
      "Diseño contemporáneo con espacios abiertos y luz natural que maximiza la conexión con el entorno exterior.",
    image: "/modern-minimalist-living-room-with-neutral-tones.png",
    number: "01",
  },
  {
    id: 2,
    title: "Residencia Urbana Central",
    description:
      "Arquitectura urbana con elementos industriales refinados que crean un ambiente sofisticado y moderno.",
    image: "/urban-residential-interior-with-industrial-element.png",
    number: "02",
  },
  {
    id: 3,
    title: "Villa Mediterránea",
    description: "Elegancia clásica con toques modernos y vistas panorámicas que integran el paisaje natural.",
    image: "/mediterranean-villa-interior-with-panoramic-views.png",
    number: "03",
  },
  {
    id: 4,
    title: "Loft Contemporáneo",
    description: "Espacios amplios con diseño minimalista y funcional que optimiza cada metro cuadrado.",
    image: "/contemporary-loft-with-minimalist-design.png",
    number: "04",
  },
  {
    id: 5,
    title: "Casa de Campo Moderna",
    description: "Integración perfecta entre naturaleza y arquitectura contemporánea en un entorno rural.",
    image: "/modern-country-house-interior-with-natural-integra.png",
    number: "05",
  },
]

export function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getPrevProject = () => {
    return (currentProject - 1 + projects.length) % projects.length
  }

  const getNextProject = () => {
    return (currentProject + 1) % projects.length
  }

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-wider ">Nuestros Proyectos</p>
          <div className="h-[1px] w-36 bg-muted-foreground mt-3 "></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 items-center min-h-[600px]">
            {/* Left Preview - Previous Project */}
            <div className="col-span-2 flex flex-col items-center cursor-pointer group" onClick={prevProject}>
              <div className="text-6xl font-bold text-muted-foreground/40 mb-4 group-hover:text-primary/60 transition-colors">
                {projects[getPrevProject()].number}
              </div>
              <div className="w-24 h-24 rounded-lg overflow-hidden mb-2 group-hover:scale-105 transition-transform">
                <img
                  src={projects[getPrevProject()].image || "/placeholder.svg"}
                  alt={projects[getPrevProject()].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center leading-tight">
                {projects[getPrevProject()].title}
              </p>
            </div>

            {/* Center - Current Project */}
            <div className="col-span-8">
              <div className="overflow-hidden bg-card">
                <div className="relative">
                  <div className="relative h-96 md:h-[400px]">
                    <img
                      src={projects[currentProject].image || "/placeholder.svg"}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="text-8xl font-bold text-white/20">{projects[currentProject].number}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed text-center max-w-2xl mx-auto">
                      {projects[currentProject].description}
                    </p>
                    <p className="text-sm text-muted-foreground text-center mb-6">Diseño por RGB Studio</p>

                    <div className="flex justify-center">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Link to={`/proyectos/$proyectoId`} params={{ proyectoId: projects[currentProject].id.toString() }}>
                          Ver Detalles del Proyecto
                        
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Preview - Next Project */}
            <div className="col-span-2 flex flex-col items-center cursor-pointer group" onClick={nextProject}>
              <div className="text-6xl font-bold text-muted-foreground/40 mb-4 group-hover:text-primary/60 transition-colors">
                {projects[getNextProject()].number}
              </div>
              <div className="w-24 h-24 rounded-lg overflow-hidden mb-2 group-hover:scale-105 transition-transform">
                <img
                  src={projects[getNextProject()].image || "/placeholder.svg"}
                  alt={projects[getNextProject()].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center leading-tight">
                {projects[getNextProject()].title}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}