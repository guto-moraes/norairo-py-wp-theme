import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import {
  LETTERS_BY_CATEGORY,
  SEARCH_LETTERS,
  SINGLE_LETTER,
  TOTAL_LETTERS,
} from "@/graphql/letters";
import type {
  AllLettersTypes,
  LetterTypes,
  totalLettersTypes,
} from "@/types/letters";

const BASE_GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_BASE_URL;

/**
 * Fetch all letters with search query or not
 * @param per_page
 * @param offset
 * @param searchQuery
 * @returns
 */
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

/**
 * Fetch all letters without params
 */
const fetchAllLetters = async () => {
  return await request<totalLettersTypes>(BASE_GRAPHQL_URL, TOTAL_LETTERS);
};

export const useAllLetters = () => {
  return useQuery<totalLettersTypes>({
    queryKey: ["all-letters"],
    queryFn: () => fetchAllLetters(),
  });
};

/**
 * Fetch all letters by category
 * @param per_page
 * @param offset
 * @param searchQuery
 * @returns
 */
const fetchLettersByCategory = async (
  per_page: number,
  offset: number,
  slug: string
) => {
  return await request<AllLettersTypes>(BASE_GRAPHQL_URL, LETTERS_BY_CATEGORY, {
    per_page,
    offset,
    slug,
  });
};

export const useLettersByCategory = (
  first: number,
  offset: number,
  slug: string
) => {
  return useQuery<AllLettersTypes>({
    queryKey: ["letters", first, offset, slug],
    queryFn: () => fetchLettersByCategory(first, offset, slug),
    notifyOnChangeProps: ["data"],
  });
};

/**
 * Fetch single letter by id
 * @param id
 * @returns
 */
const fetchSingleLetter = async (id: string) => {
  return await request<LetterTypes>(BASE_GRAPHQL_URL, SINGLE_LETTER, {
    id,
  });
};

export const useSingleLetter = (id: string) => {
  return useQuery<LetterTypes>({
    queryKey: ["single-letter", id],
    queryFn: () => fetchSingleLetter(id),
    staleTime: 60 * 5 * 1000,
  });
};
