import { useQuery } from "@tanstack/react-query";
import type { Item } from "@/types/types";
import ApiClient from "@/services/apiClient.ts";

const apiClient = new ApiClient<Item>("/items");

const useItemsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: apiClient.getAll,
  });
};

export default useItemsQuery;
