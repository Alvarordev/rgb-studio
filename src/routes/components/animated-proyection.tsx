import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";

function ProjectImageCard({
  slug,
  img,
  className,
}: {
  slug: string;
  img: string;
  className?: string;
}) {
  const navigation = useNavigate();

  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);
  const maskSize = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(circle at ${maskX}px ${maskY}px, black 0px, black ${maskSize}px, transparent ${maskSize}px)`;

  const projectLink = `/proyectos/${slug}`;

  return (
    <motion.div
      onPointerMove={(e) => {
        const { top, left } = e.currentTarget.getBoundingClientRect();
        maskX.set(e.clientX - (left * 1.16));
        maskY.set(e.clientY - (top * 1.5));
      }}
      onHoverStart={() => animate(maskSize, 50)}
      onHoverEnd={() => animate(maskSize, 0)}
      onPointerDown={() => animate(maskSize, 40)}
      className="relative h-full overflow-hidden cursor-pointer w-44"
      onClick={() => navigation({ to: projectLink })}
    >
      <img
        src={img}
        alt={slug}
        className={cn("object-cover w-full h-full overflow-hidden", className)}
      />

      <motion.div
        style={{ WebkitMaskImage: maskImage, maskImage }}
        className="absolute inset-0 flex items-center justify-center text-lg font-bold tracking-wider text-white uppercase transition-opacity duration-300 bg-gray-900/70"
      >
        ver proyecto
      </motion.div>
    </motion.div>
  );
}

export default ProjectImageCard;
