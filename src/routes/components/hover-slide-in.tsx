import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { useState } from "react";

const HoverSlideIn = ({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color: "blue" | "red" | "green";
}) => {
  const variants = cva(
    "absolute bottom-0 left-0 w-full h-full pointer-events-none",
    {
      variants: {
        color: {
          blue: "bg-primary/70",
          red: "bg-[#5C2D33]/70",
          green: "bg-[#32523A]/70",
        },
      },
    }
  );

  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} className="object-cover w-full h-full" />
      <motion.div
        className={cn(variants({ color }))}
        initial={{ y: "100%" }}
        animate={{ y: hovered ? "0%" : "0%" }}
        transition={{ type: "tween", duration: 0.4 }}
        style={{ backdropFilter: "blur(0.4px)" }}
      />
    </div>
  );
};

export default HoverSlideIn;
