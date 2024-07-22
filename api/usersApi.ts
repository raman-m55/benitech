import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import apiCall from './apiCall';

export async function getUsers() {
  return await apiCall.get('/users/get-all');
}

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
//*********************************************************** */
async function DeleteUser({ id }: { id: number }) {
  return await apiCall.delete(`/users/delete/${id}`);
}

export const useDeleteUser = () => {
  return useMutation({ mutationFn: DeleteUser });
};
//*********************************************************** */

async function SingleUser(userID: any) {
  return await apiCall.get(`/users/get-one/${userID}`);
}
export const useSingleUser = (userID: string) => {
  return useQuery({
    queryKey: ['/users/detail'],
    queryFn: () => SingleUser(userID),
    refetchOnMount: true,
  });
};
//*********************************************************** */
async function UpdateUser({ body }: any) {
  const id = body._id;
  delete body._id;
  return await apiCall.put(`/users/update/${id}`, body);
}

export const useUpdateUser = () => {
  return useMutation({ mutationFn: UpdateUser });
};
