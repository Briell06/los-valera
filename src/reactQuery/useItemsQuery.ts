import { useQuery } from "@tanstack/react-query";
import type { Item } from "@/types/types";
import axios from "axios";

const useItemsQuery = () => {
  return useQuery<Item[], Error>({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Item[]>("http://localhost:8000/db/items")
        .then((res) => res.data),
  });
};

export default useItemsQuery;
