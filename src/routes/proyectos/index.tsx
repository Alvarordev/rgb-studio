import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '../components/header'
import { Footer } from '../components/footer'
import { projects } from '@/lib/mock'

export const Route = createFileRoute('/proyectos/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>

      <main className="max-w-7xl w-full mx-auto px-4 py-16 mt-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-4 text-balance">NUESTROS</h1>
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-8 text-balance">PROYECTOS</h1>
          <div className="w-24 h-px bg-primary mx-auto"></div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <Link key={project.id} to="/proyectos/$proyectoId" params={{ proyectoId: project.id }} className="group block">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-baseline space-x-6">
                    <span className="text-8xl md:text-9xl font-light text-muted-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2 group-hover:text-primary transition-colors text-balance">
                        {project.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-4 text-pretty">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.area}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer/>
    </div>
  )
}