import useCombosQuery from "@/reactQuery/useCombosQuery";
import ComboCard from "./ComboCard";
import Loader from "./Loader";

const ComboContainer = () => {
  const { data, error, isLoading } = useCombosQuery();
  if (error)
    return (
      <h1 className="text-destructive mx-auto text-center">{error.message}</h1>
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
