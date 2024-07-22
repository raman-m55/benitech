'use client'
import React, { useCallback , useState} from 'react'
import {
Table,
TableHeader,
TableColumn,
TableBody,
TableRow,
TableCell,
Select,
Tooltip,
ChipProps,
SelectItem,
Pagination,
Button} from "@nextui-org/react";
import { columnsCategories, paginationTabel, productsCategories } from '@/constants';
import { DeleteIcon, EditIcon, EyeIcon } from '@/constants/icons.nextUi';


type Categories = typeof productsCategories[0];

const ProductsCategoriesTabel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const renderCell = useCallback((category: Categories, columnKey: React.Key) => {
    const cellValue = category[columnKey as keyof Categories];

    switch (columnKey) {
      case "name":
        return (
          <p className="text-bold text-sm capitalize">{category.name}</p>
        );
      case "addedBy":
        return (
          <p className="text-bold text-sm capitalize">{category.addeBy}</p>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Tooltip content="بیشتر">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="ویرایش دسته بندی">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="حذف دسته بندی">
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
  return (
<div className='p-4 w-full h-full flex flex-col items-center justify-start
    gap-5   '>
      <div className='w-full flex items-center justify-start '>
        <h3 className='text-2xl font-bold'>لیست دسته بندی محصولات</h3>
      </div>
      <div className='w-full ltl flex flex-row-reverse  items-center justify-between'
      dir="ltr">
        <Select
          color='primary'
          items={paginationTabel}
          label="زمان ساخت"
          className="max-w-[190px]"
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>

        <Button
        color="primary"
        >
          افزودن دسته بندی جدید
        </Button>
      </div>

      <Table aria-label="users tabel">
      <TableHeader columns={columnsCategories}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "end" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={productsCategories}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

    <div className="flex w-full items-start justify-end max-sm:justify-center">
      <div className='flex flex-col  gap-5'>
      <Pagination
        variant='bordered'
        total={10}
        page={currentPage}
        onChange={setCurrentPage}
      />
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          قبلی
        </Button>
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
        >
          بعدی
        </Button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ProductsCategoriesTabel
