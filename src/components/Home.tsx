import { TypewriterEffect } from "@/components/ui/typewriter-effect.tsx";

const Home = () => {
  return (
    <TypewriterEffect
      className="text-4xl"
      cursorClassName="h-6 "
      words={[
        { text: "Combos", className: "dark:text-slate-100" },
        { text: "Principales", className: "dark:text-slate-100" },
        {
          text: "Disponibles.",
          className: "text-blue-500",
        },
      ]}
    />
  );
};
export default Home;
