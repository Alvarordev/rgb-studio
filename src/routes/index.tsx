import { createFileRoute } from '@tanstack/react-router'
import Header from './components/header'
import { Footer } from './components/footer'
import AboutSection from './components/about-section'
import { ProjectCarousel } from './components/project-carousel'
import { ServicesSection } from './components/services-section'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full text-white relative font-montserrat">
      <Header />
      <section
        className="w-full min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/modern-architectural-interior-with-dark-walls-and-.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='max-w-7xl w-full mx-auto pt-6'>
          <h1 className='text-7xl font-medium'>
            Transforma <br />
            Tu Espacio
          </h1>
          <p className='mt-4 text-lg max-w-2xl'>
            En RGB studios creamos espacios arquitectónicos únicos que combinan funcionalidad, estética y sostenibilidad. Transformamos ideas en realidades habitables.
          </p>
        </div>
      </section>
      <AboutSection />
      <ProjectCarousel />
      <ServicesSection />
      <Footer />
    </div>
  )
}
