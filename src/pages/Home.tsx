import ComboContainer from "@/components/ComboContainer.tsx";
import { TypewriterEffect } from "@/components/ui/typewriter-effect.tsx";

const words = [
  { text: "Combos", className: "dark:text-slate-100" },
  { text: "Principales", className: "dark:text-slate-100" },
  {
    text: "Disponibles.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen text-black dark:text-white">
      <TypewriterEffect
        className="text-4xl"
        cursorClassName="h-6"
        words={words}
      />
      <ComboContainer />
    </div>
  );
};
export default Home;
