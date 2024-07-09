'use client'

import { useLogin } from "@/api/authApi";
import { Button, Input, Spinner } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


function LoginTemplate() {
  const { mutate, isPending } = useLogin();
  const router = useRouter();

  const initialValues = {
    email: "",
    code: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("لطفا ایمیل معتبر وارد کنید")
      .required("لطفا ایمیل خود را وارد کنید"),
  });

  const onSubmit = ({ email }: any) => {
    mutate({ email }, {
      onSuccess: (data: AxiosResponse) => {
        if (data.status === 200 || 201) {
          router.push(`/auth/otp?userEmail=${email}`);
          toast.success("کد تایید ایمیل شده را وارد کنید");
        }
      },
      onError: (error: any) => {
        toast.error(error.response?.data.message);
      },
    } as any);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col gap-3">
            <div>
              <Field name={"email"}>
                {({ field }: any) => (
                  <Input
                    placeholder="ایمیل..."
                    {...field}
                  />
                )}
              </Field>
              {touched.email && errors.email && (
                <div className="bg-red-500 text-white rounded-full px-2 py-1 w-fit">
                  {errors.email}
                </div>
              )}
            </div>

            <Button
              disabled={isPending}
              fullWidth
              color="primary"
              type="submit"
            >
              {isPending ? <Spinner color="white" /> : "دریافت کد تایید"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginTemplate;
