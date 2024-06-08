import { useMutation, useQuery } from "@tanstack/react-query";
import apiCall from "./apiCall";

export async function getUsers() {
  return await apiCall.get("/users");
}

export const useGetUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};
//*********************************************************** */
async function DeleteUser({ id }: { id: number }) {
  return await apiCall.delete(`/users/${id}`);
}

export const useDeleteUser = () => {
  return useMutation({ mutationFn: DeleteUser });
};
//*********************************************************** */

async function SingleUser(userID: any) {
  return await apiCall.get(`/users/${userID}`);
}
export const useSingleUser = (userID: string) => {
  return useQuery({
    queryKey: ["/users/detail"],
    queryFn: () => SingleUser(userID),
  });
};
//*********************************************************** */
async function UpdateUser({ body }: any) {
  const id = body.id;
  delete body.id;
  return await apiCall.patch(`/users/${id}`, body);
}

export const useUpdateUser = () => {
  return useMutation({ mutationFn: UpdateUser });
};
