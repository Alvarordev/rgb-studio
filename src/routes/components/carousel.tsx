import { motion, type Transition } from "framer-motion";
import { useState } from "react";
import AnimatedTitle from "./animated-title";
import AnimatedNumber from "./animated-number";

const transition: Transition = {
  type: "tween",
  duration: 0.9,
};

const items = [
  {
    id: 0,
    index: 2,
    x: -650,
    scale: 0,
    img: "/modern-country-house-interior-with-natural-integra.png",
    title: "Casa de Campo Moderna",
  },
  {
    id: 1,
    index: 1,
    x: -530,
    scale: 1,
    img: "/contemporary-loft-with-minimalist-design.png",
    title: "Casa Moderna en Kieveskoe",
  },
  {
    id: 2,
    index: 0,
    x: 0,
    scale: 2,
    img: "/urban-residential-interior-with-industrial-element.png",
    title: "Residencia Urbana Central",
  },
  {
    id: 3,
    index: 4,
    x: 530,
    scale: 1,
    img: "/mediterranean-villa-interior-with-panoramic-views.png",
    title: "Villa Mediterránea",
  },
  {
    id: 4,
    index: 3,
    x: 650,
    scale: 0,
    img: "/modern-minimalist-living-room-with-neutral-tones.png",
    title: "Loft Contemporáneo",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(0);

  const handleAnimateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTriggerAnimation((prev) => prev + 1);
  };

  const handleAnimateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTriggerAnimation((prev) => prev + 1);
  };

  return (
    <>
      <div className="relative flex justify-center w-[500px] h-80">
        {items.map((item, index) => {
          const newIndex = (index + currentIndex) % items.length;
          const animateState = {
            x: items[newIndex].x,
            scale: items[newIndex].scale,
          };
          const isHidden = animateState.scale === 0;

          return (
            <motion.div
              key={item.id}
              className={`w-56 h-56 absolute top-0`}
              initial={{ x: item.x, scale: item.scale }}
              animate={animateState}
              transition={transition}
              style={{
                zIndex: isHidden ? 0 : 1,
                visibility: isHidden ? "hidden" : "visible",
              }}
            >
              
              <img
                src={item.img}
                alt={`Image ${item.id}`}
                className="object-cover h-full mx-auto w-44"
              />

              <AnimatedNumber value={currentIndex != item.index ? (item.id == 0 ? "05" : "0" + item.id) : ""} trigger={triggerAnimation} />

              <AnimatedTitle
                title={
                  currentIndex == item.index ? item.title.toUpperCase() : ""
                }
                trigger={triggerAnimation}
              />
            </motion.div>
          );
        })}

        <div
          className="absolute z-10 w-48 h-56 -left-[380px] cursor-pointer group"
          onClick={handleAnimateRight}
        />
        <div
          className="absolute z-10 w-48 h-56 -right-[380px] cursor-pointer"
          onClick={handleAnimateLeft}
        />
      </div>

      {/* <div className="flex gap-4 mt-10">
        <button
          onClick={handleAnimateLeft}
          className="px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
        >
          Animate Left
        </button>
        <button
          onClick={handleAnimateRight}
          className="px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
        >
          Animate Right
        </button>
      </div> */}
    </>
  );
}

export default Carousel;
