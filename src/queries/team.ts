import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { TEAM, TRANSCRIBER_PHOTO } from "@/graphql/team";
import type { teamTypes, transcriberPhotoTypes } from "@/types/team";

const BASE_GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_BASE_URL;

const fetchTeam = async () => {
  return await request<teamTypes>(BASE_GRAPHQL_URL, TEAM);
};

export const useQueryTeam = () => {
  return useQuery<teamTypes>({
    queryKey: ["team"],
    queryFn: () => fetchTeam(),
    staleTime: 10000,
  });
};

const fetchTranscriberPhoto = async (id: string) => {
  return await request<transcriberPhotoTypes>(BASE_GRAPHQL_URL, TRANSCRIBER_PHOTO, {
    id
  });
};

export const useQueryTranscriberPhoto = (id: string) => {
  return useQuery<transcriberPhotoTypes>({
    queryKey: ["transcriber-photo", id],
    queryFn: () => fetchTranscriberPhoto(id),
    staleTime: 10000,
  });
};
