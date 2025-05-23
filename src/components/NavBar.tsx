import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input.tsx";
import useTheme from "@/hooks/useTheme.ts";
import { MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";

function NavBar() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="mx-4 mt-3">
      <div className="flex items-center justify-between rounded-3xl bg-white px-3 py-3 text-gray-800 shadow-md shadow-gray-200 ring-gray-100 transition-all duration-300 dark:bg-gray-900 dark:text-white dark:shadow-black">
        <Link to={"/"} className="flex basis-25 items-center sm:basis-auto">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-16 rounded-full shadow-sm"
          />
          <h3 className="font-montserrat ms-4 hidden text-2xl font-bold text-gray-900 sm:block dark:text-white">
            Los Varela
          </h3>
        </Link>
        <div className="flex items-center justify-end gap-3">
          <div className="transition-all duration-200 hover:scale-105">
            <PlaceholdersAndVanishInput
              onChange={() => {}}
              onSubmit={() => {}}
              placeholders={["Buscar", "Encuentre su producto"]}
            />
          </div>
          <button
            onClick={handleTheme}
            className="rounded-full bg-gradient-to-r p-2 text-blue-600 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-100 active:scale-95 dark:bg-slate-950 dark:text-white dark:hover:bg-black"
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
