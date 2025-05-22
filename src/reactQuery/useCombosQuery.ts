import type { Combo } from "@/types/types.ts";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/apiClient.ts";

const apiClient = new ApiClient<Combo>("combos/");

const useCombosQuery = () => {
  return useQuery({
    queryKey: ["combos"],
    queryFn: () => apiClient.getAll(),
  });
};

export default useCombosQuery;
