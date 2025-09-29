export const projects = [
  {
    id: 0,
    title: "Baño Sevilla",
    slug: "baño-sevilla",
    imgs: [
      "/01/01-1.jpg",
      "/01/01-2.jpg",
      "/01/01-3.jpg",
      "/01/01-4.jpg",
      "/01/01-5.jpg",
      "/01/01-6.jpg",
      "/01/01-7.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    year: "2023",
    location: "Sevilla, España",
    area: "15 m²",
    type: "Baño",
    number: "01",
  },
  {
    id: 1,
    title: "Casa Trujillo",
    slug: "casa-trujillo",
    imgs: [
      "/02/02-1.jpg",
      "/02/02-2.png",
      "/02/02-3.jpg",
      "/02/02-4.jpg",
      "/02/02-5.jpg",
      "/02/02-6.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    year: "2023",
    location: "Trujillo, Perú",
    area: "15 m²",
    type: "Baño",
    number: "01",
  },
  {
    id: 2,
    title: "Terraza",
    slug: "terraza",
    imgs: [
      "/03/03-1.jpeg",
      "/03/03-2.png",
      "/03/03-3.png",
      "/03/03-4.png",
      "/03/03-5.png",
      "/03/03-6.jpeg",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    year: "2023",
    location: "Trujillo, Perú",
    area: "15 m²",
    type: "Baño",
    number: "01",
  },
  {
    id: 3,
    title: "Casa Verde",
    slug: "casa-verde",
    imgs: [
      "/04/04-1.png",
      "/04/04-2.png",
      "/04/04-3.png",
      "/04/04-4.png",
      "/04/04-5.png",
      "/04/04-6.png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    year: "2023",
    location: "Lima, Perú",
    area: "15 m²",
    type: "Baño",
    number: "01",
  },
  {
    id: 4,
    title: "Dormitorio hombre",
    slug: "dormitorio-hombre",
    imgs: [
      "/05/05-1.jpg",
      "/05/05-2.jpg",
      "/05/05-3.jpg",
      "/05/05-4.jpg",
      "/05/05-5.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    year: "2023",
    location: "Trujillo, Perú",
    area: "15 m²",
    type: "Baño",
    number: "01",
  },
];

export function getProjectById(param: string) {
  return projects.find((project) => project.slug === param)
}