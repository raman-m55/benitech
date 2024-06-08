import { useMutation, useQuery } from "@tanstack/react-query";
import apiCall from "./apiCall";

export const useNewCategory = () => {
  return useMutation({ mutationFn: newCategory });
};

export async function newCategory(body: any) {
  return await apiCall.post("/categories", body);
}

export const useGetCategories = (page: number, per_page: number) => {
  return useQuery({
    queryKey: ["category", page],
    queryFn: () => getCategories(page, per_page),
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export async function getCategories(page: number = 1, per_page: number = 2) {
  return await apiCall.get(
    `/categories?page_number=${page}&per_page=${per_page}`
  );
}

async function DeleteCategory({ id }: { id: number }) {
  return await apiCall.delete(`/categories/${id}`);
}

export const useDeleteCategory = () => {
  return useMutation({ mutationFn: DeleteCategory });
};

async function UpdateCategory(body: any) {
  const id = body.id;
  delete body.id;
  return await apiCall.patch(`/categories/${id}`, body);
}

export const useUpdateCategory = () => {
  return useMutation({ mutationFn: UpdateCategory });
};
