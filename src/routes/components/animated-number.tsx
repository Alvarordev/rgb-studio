import { motion, type Variants } from "framer-motion";
import type { Key } from "react";

function AnimatedNumber({ value, trigger }: { value: string; trigger: Key }) {
  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <div className="mt-4 overflow-hidden">
      <motion.div
        key={trigger}
        variants={lineVariants}
        className="text-5xl font-bold text-center text-card/90"
        initial="hidden"
        animate="visible"
      >
        {value}
      </motion.div>
    </div>
  );
}

export default AnimatedNumber;
