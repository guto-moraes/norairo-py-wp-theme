import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { ALL_ARTICLES_BLOG } from "@/graphql/article";
import type { allArticlesTypes } from "@/types/article";

const BASE_GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_BASE_URL;

const fetchBlog = async (per_page: number, offset: number) => {
  return await request<allArticlesTypes>(BASE_GRAPHQL_URL, ALL_ARTICLES_BLOG, {
    per_page,
    offset,
  });
};

export const useQueryBlog = (first: number, offset: number) => {
  return useQuery<allArticlesTypes>({
    queryKey: ["blog"],
    queryFn: () => fetchBlog(first, offset),
    staleTime: 60 * 5 * 1000,
  });
};
