import type { Combo } from "@/types/types.ts";
import { Link } from "react-router-dom";

interface Props {
  combo: Combo;
}

function ComboCard({ combo: { precio, id, imagen, nombre } }: Props) {
  return (
    <Link
      to={"/combos/" + String(id)}
      className="mx-auto flex flex-col overflow-hidden rounded-lg px-5 py-2 shadow-lg dark:shadow-slate-950"
    >
      <p className="font-montserrat my-2 text-center text-xl font-semibold">
        {nombre}
      </p>
      <img src={imagen} className="rounded" alt="imagen del combo" />
      <p className="text-end">${precio}</p>
    </Link>
  );
}

export default ComboCard;
