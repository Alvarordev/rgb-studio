import Carousel from "./carousel";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full min-h-screen py-20 bg-foreground text-background"
    >
      <div className="flex flex-col items-center pb-40 text-center">
        <div className="flex flex-col items-center">
          <p className="font-medium tracking-wider uppercase text-balance font-oswald">
            Nuestros Proyectos
          </p>
          <div className="h-[2px] w-36 bg-[#315139] mt-3 saturate-200 "></div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-20">
        <Carousel    />
      </div>
    </section>
  );
};

export default ProjectSection;