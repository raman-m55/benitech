import { useMutation, useQuery } from "@tanstack/react-query";
import apiCall from "./apiCall";

//.......................................
export const useLogin = <T extends string>() => {
  return useMutation({ mutationFn: login });
};

export async function login(body: any) {
  return await apiCall.post("/auth/otp", body);
}
//.......................................
export const useSignUp = () => {
  return useMutation({ mutationFn: signUp });
};

export async function signUp(body: any) {
  return await apiCall.post("/auth/sign-up", body);
}

export const useUserDetail = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: userDetail,
    refetchOnWindowFocus: false,
    retry:1
  });
};

export async function userDetail() {
  return await apiCall.get("/users/me");
}
