import { RiCopyrightFill } from "react-icons/ri";
import { Link } from "react-router-dom";
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
            <p className="mt-2 text-sm">Construyendo grandes experiencias</p>
          </div>

          <div className="mx-auto flex flex-col gap-4 font-bold md:flex-row md:gap-8">
            {/*   Nav Links   */}
            <button className="relative p-[3px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800" />
              <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                <Link to={"/"}>INICIO</Link>
              </div>
            </button>{" "}
            <button className="relative p-[3px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800" />
              <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                <Link to={"/contacto"}>CONTACTO</Link>
              </div>
            </button>{" "}
            <button className="relative p-[3px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800" />
              <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
                <Link to={"/productos"}>SERVICIOS</Link>
              </div>
            </button>
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
