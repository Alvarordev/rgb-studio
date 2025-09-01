import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <div
            className="absolute rounded-2xl"
          >
            <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
          </div>

          <div className="relative z-10 text-center py-20 px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo Para Comenzar Tu
              <br />
              <span className="text-primary-foreground">Proyecto Arquitectónico?</span>
            </h2>
            <Button size="lg" className="bg-primary hover:bg-primary/90  px-8 py-4 text-lg">
              Solicitar Cotización →
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-background/20">
          <div>
            <h3 className="text-2xl font-bold text-background mb-4">RGBStudio</h3>
            <p className="text-background/80 mb-6">
              Transformamos espacios en experiencias únicas a través del diseño arquitectónico innovador.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary-foreground hover:bg-background/10">
              <a href="https://www.instagram.com/rgb.studio.pe/">
                <Instagram className="h-5 w-5" />

              </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary-foreground hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary-foreground hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary-foreground hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Enlaces Útiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Síguenos</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/rgb.studio.pe/" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 mt-8 border-t border-background/20">
          <p className="text-background/60">© {year} RGBStudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
