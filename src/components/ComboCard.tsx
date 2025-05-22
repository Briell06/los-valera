import type { Combo } from "@/types/types.ts";

interface Props {
  combo: Combo;
}

function ComboCard({ combo }: Props) {
  return (
    <div className="mx-auto">
      <img src={combo.imagen} alt="imagen del combo" />
    </div>
  );
}

export default ComboCard;
