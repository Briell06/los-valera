import logo from "../assets/Logo.jpg";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input.tsx";
import { MoonIcon, SunIcon } from "lucide-react";
import useTheme from "@/hooks/useTheme.ts";

function NavBar() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="mx-4 mt-3">
      <div className="flex items-center justify-between rounded-3xl bg-gray-900 px-3 py-3 text-white shadow-lg shadow-gray-700 dark:shadow-black">
        <div className="flex basis-25 items-center">
          <img src={logo} alt="logo" className={"h-16 w-16 rounded-full"} />
          <h3 className="font-montserrat ms-4 hidden text-2xl font-bold text-white sm:block">
            Los Varela
          </h3>
        </div>
        <div className="flex items-center justify-end gap-1">
          <div className={""}>
            <PlaceholdersAndVanishInput
              onChange={() => {}}
              onSubmit={() => {}}
              placeholders={["Buscar", "Encuentre su producto"]}
            />
          </div>
          <button
            onClick={handleTheme}
            className="rounded-full bg-transparent p-2 text-white duration-200 hover:bg-gray-800"
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
