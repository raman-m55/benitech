import { useMutation, useQuery } from "@tanstack/react-query";
import apiCall from "./apiCall";

export async function getProducts() {
  return await apiCall.get("/products/get-all");
}

export const useGetProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getProducts });
};
//*********************************************************** */
async function DeleteProducts({ id }: { id: number }) {
  return await apiCall.delete(`/products/delete/${id}`);
}

export const useDeleteProducts = () => {
  return useMutation({ mutationFn: DeleteProducts });
};
//*********************************************************** */

async function SingleProduct(productsID: any) {
  return await apiCall.get(`/products/get-one/${productsID}`);
}
export const useSingleUser = (productsID: string) => {
  return useQuery({
    queryKey: ["/product/detail"],
    queryFn: () => SingleProduct(productsID),
    refetchOnMount: true,
  });
};
//*********************************************************** */
async function UpdateProduct({ body }: any) {
  const id = body._id;
  delete body._id;
  return await apiCall.put(`/Products/update/${id}`, body);
}

export const useUpdateProduct = () => {
  return useMutation({ mutationFn: UpdateProduct });
};
