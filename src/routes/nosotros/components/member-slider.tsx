import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedTitle from "../../components/animated-title";

interface Member {
  name: string;
  description: string;
  imageUrl: string;
  position: string;
}

export const MemberSlider = ({ team }: { team: Member[] }) => {
  const [active, setActive] = useState(0);

  const handlePrev = () => setActive((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  const handleNext = () => setActive((prev) => (prev === team.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex items-center w-full gap-8">
      <div className="flex items-center justify-center w-20 h-20 antialiased border-[1.5px] border-white rounded-full cursor-pointer" onClick={handlePrev}>
        <ArrowLeft />
      </div>
      <div className="flex items-center justify-center flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={team[active].name}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="relative flex w-full mx-auto "
          >
            <img
              src={team[active].imageUrl}
              alt={team[active].name}
              className="2xl:h-[65vh] h-[60vh] 2xl:min-w-[55vh] min-w-[50vh] object-cover"
            />
            <div className="flex flex-col items-start pl-16 2xl:pl-32">
              <AnimatedTitle
                title={team[active].name}
                trigger={active}
                className="text-5xl font-medium uppercase xl:text-6xl text-start"
              />

              <p className="mt-4 font-semibold text-background/40">
                {team[active].position}
              </p>
              <p className="mt-10 text-sm leading-6 text-left">
                {team[active].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center w-20 h-20 antialiased border-[1.5px] border-white rounded-full cursor-pointer" onClick={handleNext}>
        <ArrowRight />
      </div>
    </div>
  );
};