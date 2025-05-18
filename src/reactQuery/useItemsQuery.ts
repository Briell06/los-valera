import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Item {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  precio: number;
}

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
