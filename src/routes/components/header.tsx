import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

function Header() {

  return (
    <header
      className="flex justify-center w-full pointer-events-none"
    >
      <div className="flex items-center justify-between w-full h-20 px-6 transition-all pointer-events-auto bg-foreground text-card">
        <Link to='/'>
          <p className="h-10 pl-2" >
            RGB STUDIO
          </p>
        </Link>
        <div>
          <ul className="flex gap-10 text-sm font-medium font-montserrat">
            <li className="transition-all duration-200 hover:text-primary-foreground hover:scale-105">
              <Link to="/proyectos">PROYECTOS</Link>
            </li>
            <li className="transition-all duration-200 hover:text-primary-foreground hover:scale-105">
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li className="transition-all duration-200 hover:text-primary-foreground hover:scale-105">
              <Link to="/">CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button className="h-12 px-10 transition-all bg-white rounded-full text-foreground hover:bg-primary-foreground">
            COTIZAR
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;