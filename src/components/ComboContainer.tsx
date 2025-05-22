import useCombosQuery from "@/reactQuery/useCombosQuery";
import ComboCard from "./ComboCard";
import Loader from "./Loader";

const ComboContainer = () => {
  const { data, error, isLoading } = useCombosQuery();
  if (error)
    return (
      <p className="text-destructive mx-auto text-center">{error.message}</p>
    );
  if (isLoading)
    return (
      <div className="mx-auto">
        <Loader />
      </div>
    );
  return <div>{data?.map((combo) => <ComboCard combo={combo} />)}</div>;
};

export default ComboContainer;
