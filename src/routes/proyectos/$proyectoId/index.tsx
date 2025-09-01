import { getProjectById, projects } from '@/lib/mock'
import Header from '@/routes/components/header'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/proyectos/$proyectoId/')({
  component: RouteComponent,
  loader: ({params}) => fetch(params.proyectoId)
})

function RouteComponent() {
  const {proyectoId} = Route.useParams()

  const project = getProjectById(proyectoId)

  if (!project) return

  const currentIndex = projects.findIndex((p) => p.id === proyectoId)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

      {/* Back Button */}
      <div className="px-4 py-8 mx-auto mt-40 max-w-7xl">
        <Link
          to="/proyectos"
          className="inline-flex items-center space-x-2 transition-colors text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a proyectos</span>
        </Link>
      </div>

      {/* Main Content */}
      <main className="w-full px-4 pb-16 mx-auto max-w-7xl">
        {/* Project Header */}
        <div className="mb-16">
          <div className="flex items-baseline mb-8 space-x-6">
            <span className="font-light text-8xl md:text-9xl text-muted-foreground/30">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <h1 className="mb-4 text-4xl font-light md:text-6xl text-foreground text-balance">{project.title}</h1>
              <p className="mb-6 text-xl text-muted-foreground text-pretty">{project.subtitle}</p>
              <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
                <div>
                  <span className="block text-muted-foreground">Año</span>
                  <span className="font-medium text-foreground">{project.year}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Ubicación</span>
                  <span className="font-medium text-foreground">{project.location}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Área</span>
                  <span className="font-medium text-foreground">{project.area}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Tipo</span>
                  <span className="font-medium text-foreground">{project.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <div className="grid gap-8">
            {/* Main Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full"
              />
            </div>

            {/* Additional Images Grid - Using same image repeated for now */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Vista 2`}
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Vista 3`}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Detalle 1`}
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Detalle 2`}
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Detalle 3`}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6 text-2xl font-light text-foreground">Descripción del Proyecto</h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-16 border-t border-border/40">
          {prevProject ? (
            <Link
              to='/proyectos/$proyectoId'
              params = {{proyectoId: prevProject.id}}
              className="flex items-center space-x-4 transition-colors group hover:text-primary"
            >
              <ArrowLeft className="w-5 h-5" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Proyecto anterior</div>
                <div className="font-medium transition-colors group-hover:text-primary">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextProject ? (
            <Link
              to='/proyectos/$proyectoId'
              params={{ proyectoId: nextProject.id }}
              className="flex items-center space-x-4 text-right transition-colors group hover:text-primary"
            >
              <div>
                <div className="text-sm text-muted-foreground">Siguiente proyecto</div>
                <div className="font-medium transition-colors group-hover:text-primary">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </div>
  )
}
