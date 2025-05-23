import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/apiClient.ts";
import type { Combo } from "@/types/types.ts";

const apiClient = new ApiClient<Combo>("/combos");

const useSingleComboQuery = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ["combo", id],
    queryFn: () => apiClient.getOne(Number(id)),
  });
};

export default useSingleComboQuery;
