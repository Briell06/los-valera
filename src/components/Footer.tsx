import { RiCopyrightFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import video from "@/assets/logo-video.mp4";

function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 py-8 text-center text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <video
              src={video}
              className="mx-auto h-40 w-40 rounded-full"
              width={100}
              height={100}
              autoPlay={true}
              muted
            />
            <h2 className="-center text-4xl font-extrabold text-white transition">
              Los Varela
            </h2>
            <p className="mt-2 text-sm">
              Construyendo grandes experiencias juntos
            </p>
          </div>

          <div className="mx-auto flex flex-col gap-4 font-bold md:flex-row md:gap-8">
            {/*   Nav Links   */}
            <NavLink to={"/"}>
              <button className="relative w-full p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800" />
                <div className="group active-child relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                  INICIO
                </div>
              </button>
            </NavLink>
            <NavLink to={"/contacto"}>
              <button className="relative w-full p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800" />
                <div className="group active-child relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                  CONTACTO
                </div>
              </button>
            </NavLink>
            <NavLink to={"/productos"}>
              <button className="relative w-full p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800" />
                <div className="group active-child relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                  PRODUCTOS
                </div>
              </button>
            </NavLink>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col items-center justify-between text-sm md:flex-row">
          <p>
            {<RiCopyrightFill className="inline" />} {new Date().getFullYear()}{" "}
            <span className="font-bold">Los Varela</span>. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
