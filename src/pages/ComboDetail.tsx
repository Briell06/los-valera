import useSingleComboQuery from "@/reactQuery/useSingleComboQuery.ts";

function ComboDetail() {
  const { data } = useSingleComboQuery();

  return (
    <div className="grid grid-cols-2 gap-5">
      {data?.items?.map((item) => (
        <div key={item.id}>
          {item.nombre} {item.precio}
        </div>
      ))}
    </div>
  );
}

export default ComboDetail;
