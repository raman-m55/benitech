'use client'
import { columns, dateFilter, users } from '@/constants';
import { DeleteIcon, EditIcon, EyeIcon } from '@/constants/icons.nextUi';
import {Button, 
Input,
Select,
SelectItem,
Table,
TableHeader,
TableColumn,
TableBody,
TableRow,
TableCell,
User,
Chip,
Tooltip,
ChipProps, 

Pagination} from '@nextui-org/react';
import React, { useCallback } from 'react'
import { IoIosSearch } from "react-icons/io";
const statusColorMap: Record<string, ChipProps["color"]>  = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = typeof users[0]

const Products = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const renderCell = useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            name={cellValue}
          />
            
        );
      case "role":
        return (
          <div>
            <p className="text-bold text-sm capitalize">{user.email}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Tooltip content="بیشتر">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="ویرایش کاربر">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="حذف کاربر">
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
    <div className='w-full flex flex-col items-center justify-start gap-5 py-4 px-10'>
        <div className='flex w-full justify-between items-center '>
            <div className='flex flex-col items-start justify-start gap-2'>
                <h3 className='text-2xl font-bold'>دسته بندی محصولات</h3>
                <p className='text-md text-gray-700'>لیست تمای دسته بندی محصولات محود در وبسایت </p>
            </div>
          <div className='w-[300px] max-md:w-[250px] '>
          <Input
            label="جستجو"
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-sms",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="جتسجو کنید..."
            startContent={
              <IoIosSearch  className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
          </div>

      </div>

      <div className="flex items-center justify-between w-full">
        <div className="w-[200px]">
          <Select 
          label="مرتب سازی" 
          items={dateFilter}
          className="shadow-sm"
          dir='ltr'
          >
            {(item) => (
              <SelectItem key={item.key} value={item.key}>
                {item.label}
              </SelectItem>
            )}
          </Select>
        </div>

        <div>
        <Button color="primary" className='py-4'>
          ساخته دسته بندی محصول 
        </Button>
        </div>
      </div>
      <div className='w-full'>
        <Table >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "end" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{ renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </div>
      
      <div className="flex flex-col items-end gap-5 w-full">
      <p className="text-small text-default-500">Selected Page: {currentPage}</p>
      <Pagination
        total={10}
        color="primary"
        page={currentPage}
        onChange={setCurrentPage}
      />
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="flat"
          color="default"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          قبلی
        </Button>
        <Button
          size="sm"
          variant="flat"
          color="default"
          onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
        >
          بعدی
        </Button>
      </div>
    </div>
    </div>
  )
}

export default Products
