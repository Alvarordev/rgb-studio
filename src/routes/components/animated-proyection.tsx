import { motion } from "framer-motion";
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

  const projectLink = `/proyectos/${slug}`;

  return (
    <motion.div
      className="relative w-40 h-full overflow-hidden transition-transform duration-500 cursor-pointer xl:w-44 hover:scale-105"
      onClick={() => navigation({ to: projectLink, reloadDocument: true })}
    >
      <img
        src={img}
        alt={slug}
        className={cn("object-cover w-full h-full overflow-hidden transition-all duration-700" , className)}
      />
    </motion.div>
  );
}

export default ProjectImageCard;
