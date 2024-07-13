import { dateFilter } from './../constants/index';
import React from 'react';

export interface MenuItem {
  label: string;
  route: string;
}

export interface SubMenuItem {
  label: string;
  route: string;
}

export interface MenuItemDashboard {
  id: number;
  name: string;
  href: string;
  icon: React.ReactElement;
  subMenu?: SubMenuItem[];
}

export interface DateFilter {
  label: string;
  key: number;
}
