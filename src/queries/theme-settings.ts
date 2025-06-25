import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import {
  FOOTER_THEME,
  HEADER_THEME,
  HOME_THEME,
} from "@/graphql/theme-settings";
import type {
  footerThemeTypes,
  headerThemeTypes,
  homePageThemeTypes,
} from "@/types/theme-settings";

const BASE_GRAPHQL_URL = import.meta.env.VITE_BASE_GRAPHQL_URL;

const fetchHeaderTheme = async () => {
  return await request<headerThemeTypes>(BASE_GRAPHQL_URL, HEADER_THEME);
};

export const useQueryHeaderTheme = () => {
  return useQuery<headerThemeTypes>({
    queryKey: ["header-theme"],
    queryFn: () => fetchHeaderTheme(),
  });
};

const fetchHomePageTheme = async () => {
  return await request<homePageThemeTypes>(BASE_GRAPHQL_URL, HOME_THEME);
};

export const useQueryHomePageTheme = () => {
  return useQuery<homePageThemeTypes>({
    queryKey: ["home-page-theme"],
    queryFn: () => fetchHomePageTheme(),
  });
};

const fetchFooterTheme = async () => {
  return await request<footerThemeTypes>(BASE_GRAPHQL_URL, FOOTER_THEME);
};

export const useQueryFooterTheme = () => {
  return useQuery<footerThemeTypes>({
    queryKey: ["footer-theme"],
    queryFn: () => fetchFooterTheme(),
  });
};
