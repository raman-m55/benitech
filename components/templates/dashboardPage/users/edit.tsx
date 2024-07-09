"use client";

import { useSingleUser, useUpdateUser } from "@/api/usersApi";
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import { Field, FieldProps, Form, Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function DashboardEditUserTemplate() {
  const param = useParams();
  const router = useRouter();
  const { data, isFetching, isError, refetch } = useSingleUser(
    param.id as string
  );
  const { mutate, isPending: isSubmitting } = useUpdateUser();

  const initialValues = {
    _id: data?.data.user._id,
    first_name: data?.data.user.first_name,
    last_name: data?.data.user.last_name,
    email: data?.data.user.email,
    role: data?.data.user.role,
  };
  const onSubmit = (body: any) => {
    mutate(
      { body },
      {
        onSuccess(res) {
          toast.success(res.data.message);
          router.push("/dashboard/users");
        },
        onError(error, variables, context) {
          console.log(error);
        },
      }
    );
  };
  if (isError) {
    return (
      <div className="p-3">
        <div className="p-4 bg-white">
          <p>خطا در دریافت اطلاعات</p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-3">
      <div className="bg-white p-3 rounded-md">
        {isFetching ? (
          <div className="w-full flex items-center justify-center gap-4">
            <Spinner /> <span>درحال دریافت اطلاعات</span>
          </div>
        ) : (
          <div className=" w-full gap-4 flex flex-col items-start justify-between">
            <span className="font-semibold text-2xl">
              ویرایش کاربر | {data?.data.user.email}
            </span>
            <Divider />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form dir="rtl">
                <div className="mb-10">
                  <div className="flex flex-wrap items-center justify-between gap-6 z-0 w-full group">
                    <div className=" w-[48%] min-w-[200px] h-10">
                      <Field name="first_name">
                        {({ field, meta }: FieldProps) => (
                          <Input
                            label="نام"
                            {...field}
                            type="text"
                            aria-label="Name"
                          />
                        )}
                      </Field>
                    </div>
                    <div className=" w-[48%] min-w-[200px] h-10">
                      <Field name="last_name">
                        {({ field, meta }: FieldProps) => (
                          <Input
                            label="نام خانوادگی"
                            {...field}
                            type="text"
                            aria-label="Name"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="w-[48%] min-w-[200px] h-10">
                      <Field name="email">
                        {({ field, meta }: FieldProps) => (
                          <Input
                            variant="bordered"
                            isReadOnly
                            label="ایمیل"
                            {...field}
                            type="text"
                            aria-label="Name"
                          />
                        )}
                      </Field>
                    </div>
                    <div className=" w-[48%] min-w-[200px] h-10">
                      <Field name="role">
                        {({ field, meta }: FieldProps) => (
                          <Select
                            dir="rtl"
                            selectedKeys={[field.value]}
                            label="نقش کاربر"
                            {...field}
                            aria-label="role"
                          >
                            <SelectItem key={"admin"}>admin</SelectItem>
                            <SelectItem key={"user"}>user</SelectItem>
                          </Select>
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    isLoading={isSubmitting ? true : false}
                    disabled={isSubmitting ? true : false}
                    color="primary"
                  >
                    {isSubmitting ? "کمی صبر کنید" : "ویرایش"}
                  </Button>
                  <Button color="warning" onClick={()=>router.back()}>بازگشت</Button>
                </div>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardEditUserTemplate;
