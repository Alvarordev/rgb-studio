export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  year: string
  location: string
  area: string
  type: string
}


export const projects: Project[] = [
  {
    id: "casa-moderna-kieveskoe",
    title: "Casa Moderna en Kieveskoe",
    subtitle: "Diseño contemporáneo con espacios abiertos",
    description:
      "Una residencia moderna que combina líneas limpias con materiales naturales, creando espacios luminosos y funcionales para la vida contemporánea.",
    image: "/contemporary-loft-with-minimalist-design.png",
    year: "2024",
    location: "Kieveskoe, Ucrania",
    area: "280 m²",
    type: "Residencial",
  },
  {
    id: "residencia-urbana-central",
    title: "Residencia Urbana Central",
    subtitle: "Elegancia en el corazón de la ciudad",
    description:
      "Un proyecto que redefine la vida urbana con espacios sofisticados y una integración perfecta entre interior y exterior.",
    image: "/modern-minimalist-living-room-with-neutral-tones.png",
    year: "2023",
    location: "Centro, Madrid",
    area: "320 m²",
    type: "Residencial",
  },
  {
    id: "villa-mediterranea",
    title: "Villa Mediterránea",
    subtitle: "Lujo frente al mar",
    description: "Una villa que captura la esencia mediterránea con materiales locales y vistas panorámicas al océano.",
    image: "/mediterranean-villa-interior-with-panoramic-views.png",
    year: "2023",
    location: "Costa Brava, España",
    area: "450 m²",
    type: "Residencial",
  },
  {
    id: "loft-contemporaneo",
    title: "Loft Contemporáneo",
    subtitle: "Espacios industriales refinados",
    description:
      "Transformación de un espacio industrial en un loft moderno que conserva su carácter original mientras abraza el confort contemporáneo.",
    image: "/modern-minimalist-living-room-with-neutral-tones.png",
    year: "2024",
    location: "Barcelona, España",
    area: "180 m²",
    type: "Residencial",
  },
  {
    id: "casa-campo-moderna",
    title: "Casa de Campo Moderna",
    subtitle: "Naturaleza y arquitectura en armonía",
    description:
      "Una residencia que se integra perfectamente con el paisaje natural, utilizando materiales sostenibles y diseño bioclimático.",
    image: "/urban-residential-interior-with-industrial-element.png",
    year: "2024",
    location: "Segovia, España",
    area: "380 m²",
    type: "Residencial",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}