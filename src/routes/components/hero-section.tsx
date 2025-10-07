import { Button } from "@/components/ui/button";
import AnimatedImage from "./animated-image";
import AnimatedTitle from "./animated-title";
import Header from "./header";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full h-screen bg-foreground text-card">
      <Header/>
      <div className="container flex flex-col items-center justify-center w-full h-[90vh] xl:px-15">
        <div className="grid w-full grid-cols-10 2xl:py-12">
          <div className="flex flex-col justify-end h-full col-span-3 gap-4 max-w-80">
            <AnimatedImage
              img="03/03-1.png"
              classname="object-cover w-56 2xl:w-64 2xl:h-44 h-36"
            />
            <p className="text-xs font-medium uppercase text-wrap ">
              Creamos espacios <br /> arquitectónicos únicos <br /> que combinan
              funcionalidad, <br /> estética y estilo.
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 h-full col-span-4 gap-6 2xl:gap-8">
            <AnimatedImage
              img="03/03-5.png"
              classname="object-cover 2xl:w-[350px] w-[300px] 2xl:h-[460px] xl:h-[50vh]"
            />

            <h1 className="items-start font-medium font-oswald 2xl:mt-6">
              <AnimatedTitle
                title="RGB STUDIO"
                trigger={1}
                className="items-start font-medium 2xl:text-8xl xl:text-7xl lg:text-6xl font-oswald"
              />
            </h1>

            <Button className="uppercase bg-transparent border rounded-full text-card border-card font-oswald hover:bg-primary hover:text-card hover:saturate-150">
              Explore More
            </Button>

            {/* <AnimatedTitle
              title="ESTUDIO DE ARQUITECTURA & DISEÑO DE INTERIORES"
              firstLineWords={3}
              secondLineWords={3}
              trigger={1}
              className="text-xs font-medium text-center"
            /> */}
          </div>

          <div className="flex flex-col items-end w-full h-full col-span-3 gap-4 justify-baseline">
            <AnimatedImage
              img="03/03-3.png"
              classname="object-cover w-56 h-36 2xl:w-64 2xl:h-44"
            />
            <p className="text-xs font-medium uppercase text-end">
              Lo que eres <br /> lo que vives <br /> lo que habitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
