import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";


function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <div className="flex px-6 mt-6 bg-white/80 max-w-7xl w-full justify-between rounded-full items-center shadow-md backdrop-blur-xl transition-all duration-300 pointer-events-auto h-20">
        <Link to='/'>
          <img src="/logo.svg" alt="Logo" className="h-14 pl-2" />
        </Link>
        <div>
          <ul className="flex gap-10 text-sm font-montserrat font-medium text-black">
            <li className="hover:text-primary hover:scale-105 transition-all duration-200">
              <Link to="/proyectos">PROYECTOS</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition-all duration-200">
              <Link to="/proyectos">SERVICIOS</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition-all duration-200">
              <Link to="/">NOSOTROS</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition-all duration-200">
              <Link to="/">CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button className="rounded-full h-12 px-10 bg-gray-950 text-white">
            COTIZAR
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header;
