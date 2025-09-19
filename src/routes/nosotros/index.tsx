import { createFileRoute } from "@tanstack/react-router";
import AnimatedTitle from "../components/animated-title";
import Header from "../components/header";
import { Footer } from "../components/footer";
import ProjectImageCard from "../components/animated-proyection";

export const Route = createFileRoute("/nosotros/")({
  component: RouteComponent,
});

const items = [
  {
    id: 0,
    index: 2,
    x: -650,
    scale: 0,
    img: "/urban-residential-interior-with-industrial-element.png",
    title: "Casa de Campo Moderna",
  },
  {
    id: 1,
    index: 1,
    x: -530,
    scale: 1,
    img: "/urban-residential-interior-with-industrial-element.png",
    title: "Villa Mediterránea",
  },
  {
    id: 2,
    index: 0,
    x: 0,
    scale: 2,
    img: "/urban-residential-interior-with-industrial-element.png",
    title: "Villa Mediterránea",
  },
  {
    id: 3,
    index: 4,
    x: 530,
    scale: 1,
    img: "/urban-residential-interior-with-industrial-element.png",
    title: "Villa Mediterránea",
  },
  {
    id: 4,
    index: 3,
    x: 650,
    scale: 0,
    img: "/urban-residential-interior-with-industrial-element.png",
    title: "Villa Mediterránea",
  },
];

function RouteComponent() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen gap-8 p-20 bg-gray-100">
        <AnimatedTitle title={items[0].title} trigger={1} />

        <div>
          <ProjectImageCard slug="casa-de-campo-moderna" img={items[0].img} className="w-44"/>
        </div>
      </div>
      <Footer />
    </main>
  );
}
