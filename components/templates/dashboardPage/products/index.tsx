"use client";

import { useGetProducts } from "@/api/productsApi";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { CiFilter } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { TfiSearch } from "react-icons/tfi";

const columns = [
  {
    key: "title",
    label: "نام محصول",
  },
  {
    key: "price",
    label: "قیمت",
  },
  {
    key: "quantity",
    label: "تعداد موجود",
  },
  {
    key: "sold",
    label: "تعداد فروش",
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

function DashboardProductsPage() {
  const router = useRouter();
  const { data, isPending, refetch } = useGetProducts();
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

  const renderCell = useCallback((product: any, columnKey: any) => {
    const cellValue: any = product[columnKey];

    switch (columnKey) {
      case "title":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">{product.title}</div>
        );
      case "price":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">{product.price}</div>
        );
      case "quantity":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">
            <p className="text-bold text-sm capitalize text-default-400">
              {product.quantity}
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
                    router.push(`/dashboard/products/edit/${product._id}`);
                  }}
                />
              </span>
            </Tooltip>
          </div>
        );
      case "delete":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg ">
            <Tooltip color="danger" content="حذف محصول">
              <span className="text-lg text-danger w-full flex items-center justify-center cursor-pointer">
                <GoTrash
                  height={20}
                  width={20}
                  color="red"
                  onClick={() => {
                    onDelete(product?._id, product?.email);
                  }}
                />
              </span>
            </Tooltip>
          </div>
        );
      case "sold":
        return (
          <div className="bg-[#F4F4F4] p-4 rounded-lg">{product.sold}</div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="p-3">
      <div className="bg-white rounded-md">
        <div className="bg-white p-4 rounded-lg flex flex-col gap-4">
          <div className=" w-full flex items-center justify-between">
            <span className="font-semibold text-2xl">محصولات</span>
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
            <div>
              <Button
                size="lg"
                color="primary"
                as={Link}
                href="/dashboard/products/create"
              >
                افزون محصول
              </Button>
            </div>
          </div>

          {/** Products table */}
          <div className="block w-full overflow-x-auto">
            {isPending ? (
              <div className="flex items-center justify-center gap-4">
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
                <p>آیا از حذف این محصول اطمینان دارید؟</p>
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

export default DashboardProductsPage;
