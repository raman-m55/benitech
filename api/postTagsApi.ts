import { useMutation, useQuery } from "@tanstack/react-query";
import apiCall from "./apiCall";

export const useNewTag = () => {
  return useMutation({ mutationFn: newTag });
};

export async function newTag(body: any) {
  return await apiCall.post("/tags", body);
}
////////////////////////////////////////////////////////
export const useGetTags = (page: number, per_page: number) => {
  return useQuery({
    queryKey: ["tags", page],
    queryFn: () => getTags(page, per_page),
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export async function getTags(page: number = 1, per_page: number = 2) {
  return await apiCall.get(`/tags?page_number=${page}&per_page=${per_page}`);
}
////////////////////////////////////////////////////
async function DeleteTag({ id }: { id: number }) {
  return await apiCall.delete(`/tags/${id}`);
}

export const useDeleteTag = () => {
  return useMutation({ mutationFn: DeleteTag });
};
///////////////////////////////////////////////
async function UpdateTag(body: any) {
  const id = body.id;
  delete body.id;
  return await apiCall.patch(`/tags/${id}`, body);
}

export const useUpdateTag = () => {
  return useMutation({ mutationFn: UpdateTag });
};
