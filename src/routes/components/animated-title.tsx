import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { type Key } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Este valor controla cuándo empieza la animación del siguiente elemento.
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100, 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
    },
  },
};

const AnimatedTitle = ({
  title,
  trigger,
  className,
}: {
  title: string;
  trigger: Key;
  className?: string;
}) => {
  const words = title.split(" ");
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  return (
    <motion.div
      key={trigger} 
      className={cn(
        "flex flex-col items-center overflow-hidden text-xl font-bold text-center",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={lineVariants}>{firstLine}</motion.div>
      {secondLine && (
        <motion.div variants={lineVariants}>{secondLine}</motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedTitle;
