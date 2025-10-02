import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "../components/header";
import { Footer } from "../components/footer";
import { projects } from "@/lib/projects";
import AnimatedTitle from "../components/animated-title";

export const Route = createFileRoute("/proyectos/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-neutral-400/40 font-montserrat">
      <Header />

      <main className="w-full px-4 pb-16 mx-auto mt-20 max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedTitle title="NUESTROS PROYECTOS" firstLineWords={1} secondLineWords={1} trigger={1} className="font-medium text-8xl font-oswald"/>
          <div className="w-48 h-px mx-auto mt-4 bg-primary"></div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/proyectos/$proyectoId"
              params={{ proyectoId: project.slug }}
              className="block group"
            >
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="flex items-baseline space-x-6">
                    <span className="font-normal text-8xl md:text-9xl text-muted-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="mb-2 text-3xl font-light transition-colors md:text-4xl text-foreground group-hover:text-primary text-balance">
                        {project.title}
                      </h2>
                      <p className="mb-4 text-lg text-muted-foreground text-pretty">
                        {project.title}
                      </p>
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
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <img
                    src={project.imgs[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-colors duration-300 bg-black/20 group-hover:bg-black/10"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
