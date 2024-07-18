'use client';

import { useDeleteProducts, useGetProducts } from '@/api/productsApi';
import { dateFilter } from '@/constants';
import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
} from '@/constants/icons.nextUi';
import {
  Button,
  Input,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPencil } from 'react-icons/fa6';
import { GoTrash } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';

const columns = [
  {
    key: 'title',
    label: 'نام محصول',
  },
  {
    key: 'price',
    label: 'قیمت',
  },
  {
    key: 'quantity',
    label: 'تعداد موجود',
  },
  {
    key: 'sold',
    label: 'تعداد فروش',
  },
  {
    key: 'actions',
    label: '',
  },
];

function DashboardProductsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data, isPending,isSuccess, refetch } = useGetProducts(currentPage);
  const { mutate, isPending: isSubmitting } = useDeleteProducts();
  const [myProduct, setMyProduct] = useState({ _id: 0, title: '' });

  const {
    isOpen: DeleteIsOpen,
    onOpen: DeleteOnOpen,
    onOpenChange: DeleteOnOpenChange,
    onClose: DeleteOnClose,
  } = useDisclosure();

  const onDelete = (id: number, title: string) => {
    setMyProduct({ _id: id, title: title });
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
      case 'title':
        return <div className="">{product.title}</div>;
      case 'price':
        return <div className="">{product.price}</div>;
      case 'quantity':
        return (
          <div className="">
            <p className="">{product.quantity}</p>
          </div>
        );
      case 'sold':
        return <div className="">{product.sold}</div>;
      case 'actions':
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Tooltip content="مشاهده محصول">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="ویرایش محصول">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="حذف محصول">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const pages = useMemo(() => {
    return Math.ceil(data?.data.data.length / 10);
  }, [data]);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-5 py-4 px-10">
      <div className="flex w-full justify-between items-center ">
        <div className="flex flex-col items-start justify-start gap-2">
          <h3 className="text-2xl font-bold">محصولات</h3>
          <p className="text-md text-gray-700">
            لیست تمامی محصولات موجود در وبسایت{' '}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="w-[200px]">
          <Select
            label="مرتب سازی"
            items={dateFilter}
            className="shadow-sm"
            dir="ltr"
          >
            {(item) => (
              <SelectItem key={item.key} value={item.key}>
                {item.label}
              </SelectItem>
            )}
          </Select>
        </div>
        <div className="w-[300px] max-md:w-[250px] ">
          <Input
            label="جستجو"
            isClearable
            radius="lg"
            placeholder="جتسجو کنید..."
            startContent={
              <IoIosSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div>
          <Button color="primary" size="lg">
            افزودن محصول
          </Button>
        </div>
      </div>

      {isPending ? (
        <Spinner />
      ) : (
        isSuccess ? 
        <>
          <div className="w-full">
            <Table>
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.key}
                    className="text-right"
                    align={'end'}
                  >
                    {column.label}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={data?.data.data}>
                {(item: any) => (
                  <TableRow key={item?._id}>
                    {(columnKey) => (
                      <TableCell>
                        {renderCell(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col items-end gap-5 w-full">
            <p className="text-small text-default-500">
              Selected Page: {currentPage}
            </p>
            <Pagination
              total={pages}
              color="primary"
              page={currentPage}
              onChange={setCurrentPage}
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="flat"
                color="default"
                onPress={() =>
                  setCurrentPage((prev) =>
                    prev > 1 ? prev - 1 : prev
                  )
                }
              >
                قبلی
              </Button>
              <Button
                size="sm"
                variant="flat"
                color="default"
                onPress={() =>
                  setCurrentPage((prev) =>
                    prev < pages ? prev + 1 : prev
                  )
                }
              >
                بعدی
              </Button>
            </div>
          </div>
        </> : <div>خطا در دریافت اطلاعات</div>
      )}
    </div>
  );
}

export default DashboardProductsPage;
