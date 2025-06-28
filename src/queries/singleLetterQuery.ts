import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { SINGLE_LETTER } from "@/graphql/letters";
import type { singleLetterTypes } from "@/types/letters";

const BASE_GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_BASE_URL;

type LetterTypes = {
  oficio: singleLetterTypes;
};

const fetchSingleLetter = async (id: string) => {
  return await request<LetterTypes>(BASE_GRAPHQL_URL, SINGLE_LETTER, {
    id,
  });
};

export const useSingleLetter = (id: string) => {
  return useQuery<LetterTypes>({
    queryKey: ["single-letter", id],
    queryFn: () => fetchSingleLetter(id),
    staleTime: 60 * 5 * 1000
  });
};
