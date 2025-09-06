import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import useScrollDirection from "../../lib/scroll-direction";

function Header() {
  const scrollDirection = useScrollDirection();
  const isAtTop = typeof window !== 'undefined' && window.pageYOffset === 0;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' && !isAtTop ? '-100%' : '0%' }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none"
    >
      <div className="flex items-center justify-between w-full h-20 px-6 mt-6 transition-all duration-300 rounded-full shadow-md pointer-events-auto bg-white/80 max-w-7xl backdrop-blur-xl">
        <Link to='/'>
          <img src="/logo.svg" alt="Logo" className="pl-2 h-14" />
        </Link>
        <div>
          <ul className="flex gap-10 text-sm font-medium text-black font-montserrat">
            <li className="transition-all duration-200 hover:text-primary hover:scale-105">
              <Link to="/proyectos">PROYECTOS</Link>
            </li>
            <li className="transition-all duration-200 hover:text-primary hover:scale-105">
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li className="transition-all duration-200 hover:text-primary hover:scale-105">
              <Link to="/">CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button className="h-12 px-10 text-white rounded-full bg-gray-950">
            COTIZAR
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;