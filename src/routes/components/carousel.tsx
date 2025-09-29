import { motion, type Transition } from "framer-motion";
import { useState } from "react";
import AnimatedTitle from "./animated-title";
import AnimatedNumber from "./animated-number";
import ProjectImageCard from "./animated-proyection";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const transition: Transition = {
  type: "tween",
  duration: 0.9,
};

const fiveProjects = projects.filter((project) => project.id < 5);

const projectsIndex = fiveProjects.map((project, index) => ({
  ...project,
  index: index == 0 ? 2 : index == 1 ? 1 : index == 2 ? 0 : index == 3 ? 4 : 3,
  x:
    index === 0
      ? -700
      : index === 1
      ? -580
      : index === 2
      ? 0
      : index === 3
      ? 580
      : 700,
  scale: index === 0 || index === 4 ? 0 : index === 1 || index === 3 ? 1 : 2,
}));



console.log(projectsIndex);

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(0);

  const handleAnimateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsIndex.length);
    setTriggerAnimation((prev) => prev + 1);
  };

  const handleAnimateLeft = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projectsIndex.length) % projectsIndex.length
    );
    setTriggerAnimation((prev) => prev + 1);
  };

  return (
    <>
      <div className="relative flex justify-center w-[500px] h-80">
        {projectsIndex.map((item, index) => {
          const newIndex = (index + currentIndex) % projectsIndex.length;
          const isCenter = currentIndex === item.index;
          const animateState = {
            x: projectsIndex[newIndex].x,
            scale: projectsIndex[newIndex].scale,
            y: isCenter ? 0 : 100,
          };
          const isHidden = animateState.scale === 0;

          return (
            <motion.div
              key={item.id}
              className={`w-56 h-56 absolute top-0 group`}
              initial={{ x: item.x, scale: item.scale }}
              animate={animateState}
              transition={transition}
              style={{
                zIndex: isHidden ? 0 : 1,
                visibility: isHidden ? "hidden" : "visible",
              }}
            >
              {isCenter ? (
                <div className="flex justify-center w-full h-full ">
                  <ProjectImageCard slug={item.slug} img={item.imgs[0]} />
                </div>
              ) : (
                <>
                  <img
                    src={item.imgs[0]}
                    alt={`Image ${item.id}`}
                    className="object-cover h-full mx-auto cursor-pointer w-44"
                    onClick={() => {
                      // Si la imagen está a la izquierda (index < 2), animar a la derecha
                      // Si está a la derecha (index > 2), animar a la izquierda
                      if (projectsIndex[newIndex].index < 2) {
                        handleAnimateLeft();
                      } else if (projectsIndex[newIndex].index > 2) {
                        handleAnimateRight();
                      }
                    }}
                  />
                </>
              )}

              <AnimatedNumber
                value={!isCenter ? (item.id == 0 ? "05" : "0" + item.id) : ""}
                trigger={triggerAnimation}
                className={cn(
                  "transition-colors group-hover:saturate-150",
                  { [projectsIndex[newIndex].index < 2 ? "group-hover:text-[#B89B9E]" : "group-hover:text-primary-foreground"]: true }
                )}
              />

              <AnimatedTitle
                title={isCenter ? item.title.toUpperCase() : ""}
                trigger={triggerAnimation}
                className="text-2xl transition-colors group-hover:text-[#7BAA96] group-hover:saturate-150"
              />
            </motion.div>
          );
        })}

        {/* <div
          className="absolute z-10 w-48 h-56 -bottom-[5px] -left-[380px] cursor-pointer group"
          onClick={handleAnimateRight}
        />
        <div
          className="absolute z-10 w-48 h-56 -bottom-[5px] -right-[380px] cursor-pointer"
          onClick={handleAnimateLeft}
        /> */}
      </div>
    </>
  );
}

export default Carousel;
