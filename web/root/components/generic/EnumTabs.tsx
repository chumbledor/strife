import { Tab, Tabs, type TabsProps } from "@mui/material";
import React from 'react';

export type EnumType = { [key: string]: number | string }

export interface EnumTabsProps<TEnum extends EnumType> extends TabsProps {
  type: TEnum;
}

export default function EnumTabs<TEnum extends EnumType>({ type, ...tabsProps }: EnumTabsProps<TEnum>): React.JSX.Element {
  const entries = Object.entries(type)
    .filter(([key, value]): boolean => typeof value === 'number');
  const children = entries.map(([key, value], index: number): React.ReactNode => <Tab key={index} label={key} value={value} />);
  return <Tabs {...tabsProps}>
    {children}
  </Tabs>;
}