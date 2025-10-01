import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons";

export const Route = createFileRoute("/contacto/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="w-full h-screen overflow-hidden bg-foreground font-montserrat">
      <Header />
      <div className="container flex flex-col justify-end flex-1 h-full px-20 py-16 mx-auto ">
        <div className="flex justify-between pb-30">
          <img
            src="/logos/Entrega_Marca Completa-RGB studio-Blanca SIN FONDO.png"
            alt="logo"
            className="h-[450px]"
          />

          <div className="flex flex-col gap-8 text-card max-w-80">
            <div>
              <p className="text-xs font-semibold text-card/40">CORREO</p>
              <p className="pt-2 text-sm">INFO@RGBSTUDIO.COM</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-card/40">TELEFONO</p>
              <p className="pt-2 text-sm">+51 999 999 999</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-card/40">
                NUESTRAS REDES
              </p>
              <div className="flex gap-4 pt-2">
                <InstagramIcon size={20} />
                <TikTokIcon size={20} />
              </div>
            </div>
            <div className="pt-8">
              <p className="text-xs font-semibold">CONTACTANOS</p>
              <p className="pt-2 text-sm">
                Para discutir tu proyecto en detalle, o para consultas sobre los
                servicios que ofrecemos.
              </p>
            </div>
            <div>
              <button className="flex items-center justify-center w-20 h-20 gap-2 mt-4 text-sm font-medium text-green-600 transition-all duration-300 border-2 border-green-600 rounded-full cursor-pointer hover:bg-green-600 hover:scale-105 hover:saturate-150 hover:text-white">
                <WhatsAppIcon size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


