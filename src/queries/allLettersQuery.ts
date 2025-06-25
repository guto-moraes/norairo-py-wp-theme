import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { SEARCH_LETTERS, TOTAL_LETTERS } from "@/graphql/letters";
import type { AllLettersTypes, totalLettersTypes } from "@/types/letters";

const BASE_GRAPHQL_URL = import.meta.env.VITE_BASE_GRAPHQL_URL;

const fetchListAndSearchLetters = async (
  per_page: number,
  offset: number,
  searchQuery: string
) => {
  return await request<AllLettersTypes>(BASE_GRAPHQL_URL, SEARCH_LETTERS, {
    per_page,
    offset,
    searchQuery,
  });
};

export const useListLetters = (
  first: number,
  offset: number,
  searchQuery: string
) => {
  return useQuery<AllLettersTypes>({
    queryKey: ["letters", first, offset, searchQuery],
    queryFn: () => fetchListAndSearchLetters(first, offset, searchQuery),
    notifyOnChangeProps: ["data"],
  });
};

const fetchAllLetters = async () => {
  return await request<totalLettersTypes>(BASE_GRAPHQL_URL, TOTAL_LETTERS);
};

export const useAllLetters = () => {
  return useQuery<totalLettersTypes>({
    queryKey: ["all-letters"],
    queryFn: () => fetchAllLetters(),
  });
};
