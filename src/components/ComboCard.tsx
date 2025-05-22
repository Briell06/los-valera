import type { Combo } from "@/types/types.ts";

interface Props {
  combo: Combo;
}

function ComboCard({ combo }: Props) {
  return <div>{combo.nombre}</div>;
}

export default ComboCard;
