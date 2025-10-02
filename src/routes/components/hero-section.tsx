import AnimatedImage from "./animated-image";
import AnimatedTitle from "./animated-title";
import Header from "./header";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full h-screen bg-foreground">
      <Header />
      <div className="container flex flex-col flex-1 w-full h-full xl:py-12 2xl:py-12 2xl:px-20 xl:px-16">
        <div className="grid w-full h-full grid-cols-10 2xl:py-12">
          <div className="flex flex-col justify-end h-full col-span-3 gap-4 max-w-80 2xl:pb-8">
            <AnimatedImage
              img="02/02-1.jpg"
              classname="object-cover w-56 2xl:w-64 2xl:h-44 h-36"
            />
            <p className="text-xs font-medium uppercase text-wrap text-card/70">
              Creamos espacios <br /> arquitectónicos únicos <br /> que combinan
              funcionalidad, <br /> estética y estilo.
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 h-full col-span-4 gap-6 2xl:gap-8">
            <AnimatedImage
              img="04/04-1.png"
              classname="object-cover 2xl:w-[350px] w-[300px] 2xl:h-[460px] xl:h-[50vh]"
            />

            <h1 className="items-start font-medium text-[5.2rem] font-oswald">
              <AnimatedTitle
                title="RGB STUDIO"
                trigger={1}
                className="items-start font-medium 2xl:text-[5.2rem] text-72xl font-oswald"
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
              classname="object-cover w-56 h-36 2xl:w-64 2xl:h-44"
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
