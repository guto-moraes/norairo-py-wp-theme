import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { FOOTER_MENU, MAIN_MENU } from "@/graphql/menus";
import type { FooterMenuTypes, MainMenuTypes } from "@/types/menus";

const BASE_GRAPHQL_URL = import.meta.env.VITE_BASE_GRAPHQL_URL;

const fetchMainMenu = async () => {
  return await request<MainMenuTypes>(BASE_GRAPHQL_URL, MAIN_MENU);
};

const fetchFooterMenu = async () => {
  return await request<FooterMenuTypes>(BASE_GRAPHQL_URL, FOOTER_MENU);
};

export const useQueryMainMenu = () => {
  return useQuery<MainMenuTypes>({
      queryKey: ["menu"],
      queryFn: () => fetchMainMenu(),
      staleTime: 60 * 5 * 1000,
    });
};

export const useQueryFooterMenu = () => {
  return useQuery<FooterMenuTypes>({
    queryKey: ["footer-menu"],
    queryFn: () => fetchFooterMenu(),
    staleTime: 60 * 5 * 1000,
  });
};
