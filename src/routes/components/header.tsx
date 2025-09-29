import { Link, useRouterState } from "@tanstack/react-router";

function Header({ lightMode = false }: { lightMode?: boolean }) {
  const router = useRouterState();
  const path = router.location.pathname;

  return (
    <header
      className={`flex justify-center w-full pointer-events-none transition-all ${
        lightMode ? "bg-background" : "bg-foreground"
      }`}
    >
      <div
        className={`container flex items-center w-full h-20 transition-all pointer-events-auto cotainer px-15 ${
          lightMode ? "bg-background" : "bg-foreground"
        } text-card`}
      >
        <div className="flex items-center flex-1">
          <Link to="/">
            {lightMode ? (
              <img src="/logos/logo-colores.png" alt="logo" className="w-24" />
            ) : (
              <img src="/logos/logo-colores.png" alt="logo" className="h-36" />
            )}
          </Link>
        </div>
        <div className="flex items-center justify-center flex-none">
          <ul
            className={`flex gap-6 text-xs font-medium font-montserrat ${
              lightMode ? "text-foreground" : "text-card"
            }`}
          >
            <li
              className={`transition-all duration-200 hover:text-card hover:scale-105 hover:saturate-150 ${
                path === "/" ? "text-card underline underline-offset-8" : ""
              }`}
            >
              <Link to="/">HOME</Link>
            </li>
            <li
              className={`transition-all duration-200 hover:text-primary-foreground hover:scale-105 hover:saturate-150 ${
                path === "/proyectos"
                  ? "text-primary-foreground underline underline-offset-8"
                  : ""
              }`}
            >
              <Link to="/proyectos">PROYECTOS</Link>
            </li>
            <li
              className={`transition-all duration-200 hover:text-[#B89B9E] hover:scale-105 hover:saturate-150 ${
                path === "/nosotros"
                  ? "text-[#B89B9E] underline underline-offset-8"
                  : ""
              }`}
            >
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li
              className={`transition-all duration-200 hover:text-[#7BAA96] hover:scale-105 hover:saturate-150 ${
                path === "/contacto"
                  ? "text-[#7BAA96] underline underline-offset-8"
                  : ""
              }`}
            >
              <Link to="/contacto">CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end flex-1">
          <p
            className={`text-xs font-medium text-end ${
              lightMode ? "text-foreground/60" : "text-card/40"
            }`}
          >
            ESTUDIO DE ARQUITECTURA <br /> & DISEÑO DE INTERIORES
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
