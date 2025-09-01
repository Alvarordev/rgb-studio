import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { projects } from "@/lib/mock"


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
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-sm tracking-wider uppercase text-muted-foreground ">Nuestros Proyectos</p>
          <div className="h-[1px] w-36 bg-muted-foreground mt-3 "></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-4 items-center min-h-[600px]">
            {/* Left Preview - Previous Project */}
            <div className="flex flex-col items-center col-span-2 cursor-pointer group" onClick={prevProject}>
              <div className="mb-4 text-6xl font-bold transition-colors text-muted-foreground/40 group-hover:text-primary/60">
                {projects[getPrevProject()].number}
              </div>
              <div className="w-24 h-24 mb-2 overflow-hidden transition-transform rounded-lg group-hover:scale-105">
                <img
                  src={projects[getPrevProject()].image || "/placeholder.svg"}
                  alt={projects[getPrevProject()].title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs leading-tight text-center text-muted-foreground">
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
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="font-bold text-8xl text-white/20">{projects[currentProject].number}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="mb-4 text-3xl font-bold text-center md:text-4xl text-foreground">
                      {projects[currentProject].title}
                    </h3>
                    <p className="max-w-2xl mx-auto mb-6 text-lg leading-relaxed text-center text-muted-foreground">
                      {projects[currentProject].description}
                    </p>
                    <p className="mb-6 text-sm text-center text-muted-foreground">Diseño por RGB Studio</p>

                    <div className="flex justify-center">
                      <Button className="bg-primary hover:bg-primary/90">
                        <Link
                          to={`/proyectos/$proyectoId`}
                          params={{ proyectoId: projects[currentProject].id }}
                          resetScroll={true}
                        >
                          Ver Detalles del Proyecto
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Preview - Next Project */}
            <div className="flex flex-col items-center col-span-2 cursor-pointer group" onClick={nextProject}>
              <div className="mb-4 text-6xl font-bold transition-colors text-muted-foreground/40 group-hover:text-primary/60">
                {projects[getNextProject()].number}
              </div>
              <div className="w-24 h-24 mb-2 overflow-hidden transition-transform rounded-lg group-hover:scale-105">
                <img
                  src={projects[getNextProject()].image || "/placeholder.svg"}
                  alt={projects[getNextProject()].title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs leading-tight text-center text-muted-foreground">
                {projects[getNextProject()].title}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
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