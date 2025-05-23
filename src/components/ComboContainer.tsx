import useCombosQuery from "@/reactQuery/useCombosQuery";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ComboCard from "./ComboCard";
import Loader from "./Loader";

const ComboContainer = () => {
  const { data, error, isLoading } = useCombosQuery();
  if (error)
    return (
      <p className="text-destructive mx-auto mt-5 text-center">
        {error.message}
      </p>
    );
  if (isLoading)
    return (
      <div className="mx-auto">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="mt-10 flex items-center justify-end gap-2">
        <Link to={"/all-combos"}>Ver más</Link>
        <ArrowRightIcon />
      </div>
      <div className="mx-auto grid w-full grid-cols-1 gap-4 rounded-2xl py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((combo) => <ComboCard key={combo.id} combo={combo} />)}
      </div>
    </>
  );
};

export default ComboContainer;
