"use client";

import { useLogin } from "@/api/authApi";
import OtpInput from "@/components/modules/otpInput";
import { Button, Card, CardBody, CardHeader, Spinner } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup'

type LoginFormType = {
  email: string | null;
  code: string;
};

function OtpTemplate() {
  const userEmail = useSearchParams();
  const urlEmail = userEmail.get("userEmail");

  const { mutate, isPending } = useLogin();

  const router = useRouter();
  useEffect(() => {
    if (urlEmail === null) {
      router.push("/auth");
    }
  }, []);

  const initialValues = {
    email: urlEmail,
    code: "",
  };
  const validationSchema = Yup.object().shape({
    code: Yup.string().required(),
  });

  const onSubmit = (values: LoginFormType) => {
    mutate(values, {
      onSuccess: (data: AxiosResponse) => {
        toast.success(data.data.message);
        localStorage.setItem("token", data.data.accessToken);
        if (data.data.user.role === "user") {
          router.push("/panel");
        } else if (data.data.user.role === "admin") {
          router.push("/dashboard");
        }
      },
      onError: (error: any) => {
        toast.error(error.response?.data.message);
      },
    } as any);
  };
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-col">
      <Image
          src="/assets/main-logo.png"
          width={200}
          height={50}
          alt="main logo"
        />
      </CardHeader>
      <CardBody>
        <div>
          <h2 className="text-center mb-8">
            کد تایید ارسال شده به ایمیل را وارد کنید
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-3">
                <OtpInput length={5} name="code" />
                <Button
                  disabled={isPending}
                  fullWidth
                  color="primary"
                  type="submit"
                >
                  {isPending ? <Spinner color="white" /> : "ورود"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </CardBody>
    </Card>
  );
}

export default OtpTemplate;
