import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { PAGES } from "@/graphql/pages";

const BASE_GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_BASE_URL;

type pageTypes = {
    page: {
        title: string;
        content: string;
    }
}

const fetchPage = async (id: string) => {
    return await request<pageTypes>(BASE_GRAPHQL_URL, PAGES, {
        id
    })
}

export const useQueryPage = (id: string) => {
  return useQuery<pageTypes>({
    queryKey: ["page", id],
    queryFn: () => fetchPage(id),
    staleTime: 60 * 5 * 1000,
  });
};
