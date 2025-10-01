import { projects } from "@/lib/projects";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Image = ({src, id}: {src: string, id: number}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const y = useParallax(scrollYProgress, 300);

  const scale = useTransform(scrollYProgress, [0,1], [0.5,1]);

  return (
    <section
      ref={container}
      className="h-[100vh] flex justify-center items-center relative perspective-[500px] snap-center"
    >
      <div ref={container} className="h-[400px] w-[300px] relative max-h-[90vh] overflow-hidden">
        <motion.img style={{scale}} src={src} alt="a" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-transform" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
};

export const ParallaxTeam = () => {

  return (
    <div className="snap-mandatory">
      {
        projects.map((project, index) => (
            <Image key={index} src={project.imgs[0]} id={index} />
        ))
      }
    </div>
  );
};
