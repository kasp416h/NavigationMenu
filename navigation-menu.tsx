import React from "react";
import { MenuItem, MenuOptions } from "./types";
import NavigationList from "./components/navigation-list";

interface MenuProps {
  items: MenuItem[];
  parentId?: string;
  options?: MenuOptions;
}

export default function NavigationMenu({
  items,
  parentId,
  options = {},
}: MenuProps) {
  return <NavigationList items={items} parentId={parentId} options={options} />;
}
