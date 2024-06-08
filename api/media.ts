import { useQuery } from "@tanstack/react-query";
import apiCall from "./apiCall";


export const useGetMedia = () => {
  return useQuery({ queryKey: ["user"], queryFn: getMedia});
};

export async function getMedia() {
  return await apiCall.get("/media");
}
