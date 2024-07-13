"use client";

import { useDeleteUser, useGetUsers } from "@/api/usersApi";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { CiFilter } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { TfiSearch } from "react-icons/tfi";

const columns = [
  {
    key: "first_name",
    label: "نام",
  },
  {
    key: "last_name",
    label: "نام خانوادگی",
  },
  {
    key: "email",
    label: "ایمیل",
  },
  {
    key: "role",
    label: "نقش",
  },
  {
    key: "edit",
    label: "ویرایش",
  },
  {
    key: "delete",
    label: "حذف",
  },
];

function DashboardUserTemplate() {
  const router = useRouter();
  const { data, isPending, refetch } = useGetUsers();
  const { mutate, isPending: isSubmitting } = useDeleteUser();
  const [myProduct, setMyProduct] = useState({ _id: 0, email: "" });

  const {
    isOpen: DeleteIsOpen,
    onOpen: DeleteOnOpen,
    onOpenChange: DeleteOnOpenChange,
    onClose: DeleteOnClose,
  } = useDisclosure();

  const onDelete = (id: number, email: string) => {
    setMyProduct({ _id: id, email: email });
    DeleteOnOpen();
  };
  const handleDeleteProduct = (id: number) => {
    mutate(
      { id: id },
      {
        onSuccess(res: any) {
          toast.success(res.data.message);
          DeleteOnClose();
          refetch();
        },
        onError(err: any) {
          console.log(err);
        },
      }
    );
  };

  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue: any = user[columnKey];

    switch (columnKey) {
      case "first_name":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">
            {user.first_name ? user.first_name : "تکمیل نشده"}
          </div>
        );
      case "last_name":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">
            {user.last_name ? user.last_name : "تکمیل نشده"}
          </div>
        );
      case "email":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">
            <p className="text-bold text-sm capitalize text-default-400">
              {user.email}
            </p>
          </div>
        );
      case "edit":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">
            <Tooltip content="ویرایش">
              <span className="text-lg cursor-pointer w-full flex items-center justify-center">
                <FaPencil
                  height={20}
                  width={20}
                  onClick={() => {
                    router.push(`/dashboard/users/edit/${user._id}`);
                  }}
                />
              </span>
            </Tooltip>
          </div>
        );
      case "delete":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg ">
            <Tooltip color="danger" content="حذف کاربر">
              <span className="text-lg text-danger w-full flex items-center justify-center cursor-pointer">
                <GoTrash
                  height={20}
                  width={20}
                  color="red"
                  onClick={() => {
                    onDelete(user?._id, user?.email);
                  }}
                />
              </span>
            </Tooltip>
          </div>
        );
      case "role":
        return <div className="bg-[#F4F4F4] p-4 rounded-lg">{user.role}</div>;
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="p-3">
      <div className="bg-white rounded-md">
        <div className="bg-white p-4 rounded-lg flex flex-col gap-4">
          <div className=" w-full flex items-center justify-between">
            <span className="font-semibold text-2xl">کاربران</span>
            <div className="flex gap-6">
              <Button
                isIconOnly
                variant="bordered"
                size="lg"
                className="border-1"
              >
                <CiFilter className="text-2xl" />
              </Button>
              <div className="flex min-w-[360px] items-center justify-between bg-white rounded-2xl border p-1 ">
                <input
                  type="text"
                  placeholder="جستجو کنید..."
                  className="focus:outline-none w-full"
                />
                <Button color="primary" variant="flat" isIconOnly>
                  <TfiSearch className="text-[25px]" color="#0085FF" />
                </Button>
              </div>
            </div>
          
          </div>

          {/** Products table */}
          <div className="block w-full overflow-x-auto">
            {isPending ? (
              <div className="flex items-center justify-center">
                <Spinner />
                <span>درحال دریافت اطلاعات</span>
              </div>
            ) : (
              <Table
                className="overflow-hidden"
                classNames={{
                  th: ["text-right text-white bg-transparent"],
                  wrapper: ["bg-transparent shadow-none p-0"],
                  td: ["data-[selected=true]:before:rounded-none"],
                }}
                radius="none"
                dir="rtl"
                aria-label="collection table"
              >
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.key}>
                      <div className="w-full text-right text-base bg-[#424C54] py-5 px-2 rounded-lg">
                        {column.label}
                      </div>
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody
                  className="relative"
                  items={data?.data.data}
                  isLoading={isPending}
                >
                  {(item: any) => (
                    <TableRow key={item._id} radioGroup="none">
                      {(columnKey) => (
                        <TableCell height={50}>
                          {renderCell(item, columnKey)}
                        </TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>
      {/* Delete Modal */}
      <Modal
        backdrop="blur"
        isOpen={DeleteIsOpen}
        onOpenChange={DeleteOnOpenChange}
      >
        <ModalContent className="px-5">
          {(onClose) => (
            <>
              <ModalHeader dir="rtl" className="flex flex-col gap-1">
                حذف کاربر
              </ModalHeader>
              <ModalBody dir="rtl">
                <p>آیا از حذف این کاربر اطمینان دارید؟</p>
                <p>{myProduct.email}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  isLoading={isSubmitting ? true : false}
                  disabled={isSubmitting ? true : false}
                  color="danger"
                  variant="bordered"
                  onPress={() => {
                    handleDeleteProduct(myProduct._id);
                  }}
                >
                  حذف
                </Button>
                <Button
                  disabled={isSubmitting ? true : false}
                  color="primary"
                  variant="bordered"
                  className="px-10"
                  onPress={onClose}
                >
                  صرف نظر
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DashboardUserTemplate;
