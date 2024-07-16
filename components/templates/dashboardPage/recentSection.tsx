'use client';

import { DeleteIcon, EditIcon, EyeIcon } from '@/constants/icons.nextUi';
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
  Tooltip,
  ChipProps,
} from '@nextui-org/react';

const statusColorMap: Record<string, ChipProps['color']> = {
  'تحویل داده شده': 'success',
  'لغو شده': 'danger',
  'در حال پردازش': 'warning',
  'درحال خروج از انبار': 'secondary',
};

export const columns = [
  { name: 'نام محصول', uid: 'name' },
  { name: 'مقصد سفارش', uid: 'location' },
  { name: 'تاریخ', uid: 'time' },
  { name: 'تعداد', uid: 'count' },
  { name: 'قیمت خرید', uid: 'price' },
  { name: 'وضعیت حساب', uid: 'status' },
];

export const orders = [
  {
    id: 1,
    name: 'لپتاپ ایسوس',
    location: 'اصفهان',
    time: '1403/04/10',
    count: '3',
    price: '45,000,000',
    status: 'لغو شده',
  },
  {
    id: 2,
    name: 'گوشی سامسونگ',
    location: 'تهران',
    time: '1403/04/10',
    count: '4',
    price: '35,940,000',
    status: 'تحویل داده شده',
  },
  {
    id: 3,
    name: 'پایه موبایل',
    location: 'رشت',
    time: '1403/04/10',
    count: '3',
    price: '1,500,000',
    status: 'در حال پردازش',
  },
  {
    id: 4,
    name: 'موبایل شیائومی',
    location: 'شیراز',
    time: '1403/04/10',
    count: '1',
    price: '13,700,000',
    status: 'درحال خروج از انبار',
  },
  {
    id: 5,
    name: 'موبایل داریا',
    location: 'تهران',
    time: '1403/04/10',
    count: '2',
    price: '3,350,000',
    status: 'تحویل داده شده',
  },
];

import React, { useCallback } from 'react';

function RecentSection() {
  const renderCell = useCallback((order: any, columnKey: React.Key) => {
    const cellValue = order[columnKey as any];

    switch (columnKey) {
      case 'name':
        return (
          <User avatarProps={{ radius: 'lg', src: order.avatar }} name={cellValue} />
        );
      case 'role':
        return (
          <div>
            <p className="text-bold text-sm capitalize">{order.email}</p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[order.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case 'actions':
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
    <div>
      <Table removeWrapper>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align='end' className='text-right'
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={orders}>
          {(item) => (
            <TableRow className='border-b-1 border-gray-100' key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default RecentSection;
