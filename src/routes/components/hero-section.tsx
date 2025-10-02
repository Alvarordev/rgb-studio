import AnimatedImage from "./animated-image";
import AnimatedTitle from "./animated-title";
import Header from "./header";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full h-screen bg-foreground">
      <Header />
      <div className="container flex flex-col flex-1 w-full h-full py-20 xl:px-20">
        <div className="grid w-full h-full grid-cols-10 xl:pt-12">
          <div className="flex flex-col justify-end h-full col-span-3 gap-4 pb-2 xl:pb-15 max-w-80">
            <AnimatedImage
              img="02/02-1.jpg"
              classname="object-cover w-56 xl:w-64 xl:h-44 h-36"
            />
            <p className="text-xs font-medium uppercase text-wrap text-card/70">
              Creamos espacios <br /> arquitectónicos únicos <br /> que combinan
              funcionalidad, <br /> estética y estilo.
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 h-full col-span-4 gap-6 xl:gap-8">
            <AnimatedImage
              img="04/04-1.png"
              classname="object-cover xl:w-[350px] w-[300px] xl:h-[460px] h-[400px]"
            />

            <h1 className="items-start font-medium text-[5.2rem] font-oswald">
              <AnimatedTitle
                title="RGB STUDIO"
                trigger={1}
                className="items-start font-medium xl:text-[5.2rem] text-7xl font-oswald"
              />
            </h1>

            <AnimatedTitle
              title="ESTUDIO DE ARQUITECTURA & DISEÑO DE INTERIORES"
              firstLineWords={3}
              secondLineWords={3}
              trigger={1}
              className="text-xs font-medium text-center text-card/40"
            />
          </div>

          <div className="flex flex-col items-end w-full h-full col-span-3 gap-4 justify-baseline">
            <AnimatedImage
              img="03/03-1.jpeg"
              classname="object-cover w-56 h-36 xl:w-64 xl:h-44"
            />
            <p className="text-xs font-medium uppercase text-end text-card/70">
              Lo que eres <br /> lo que vives <br /> lo que habitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
