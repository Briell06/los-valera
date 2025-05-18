import logo from "../assets/Logo.jpg";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input.tsx";

function NavBar() {
  return (
    <div className="container mx-auto mt-3">
      <div className="mx-5 flex items-center justify-between rounded-3xl bg-gray-900 px-4 py-3 text-white shadow-lg shadow-black">
        <div className="flex items-center">
          <img src={logo} alt="logo" className={"h-16 w-16 rounded-full"} />
          <h3 className="font-poppins ms-4 hidden text-2xl text-white md:block">
            Los Varela
          </h3>
        </div>
        <div className="mx-5 flex-1">
          <PlaceholdersAndVanishInput
            onChange={() => {}}
            onSubmit={() => {}}
            placeholders={["Buscar", "Encuentre su producto"]}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
