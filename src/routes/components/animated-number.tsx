import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import type { Key } from "react";

function AnimatedNumber({
  value,
  trigger,
  className,
}: {
  value: string;
  trigger: Key;
  className?: string;
}) {
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
    <div className="mt-2 overflow-hidden">
      <motion.div
        key={trigger}
        variants={lineVariants}
        className={cn("text-6xl font-semibold text-center", className)}
        initial="hidden"
        animate="visible"
      >
        {value}
      </motion.div>
    </div>
  );
}

export default AnimatedNumber;
