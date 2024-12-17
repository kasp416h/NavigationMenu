"use client";

import React, { useMemo } from "react";
import { MenuItem, MenuOptions } from "../types";
import { cn } from "@/lib/utils";
import NavigationItem from "./navigation-item";

interface NavigationListProps {
  items: MenuItem[];
  parentId?: string;
  options?: MenuOptions & {
    first_iteration?: boolean;
    current_level?: number;
  };
}

export default function NavigationList({
  items,
  parentId,
  options = {},
}: NavigationListProps) {
  const {
    first_iteration = true,
    current_level = 0,
    recursive = true,
    maxDepth = null,
    ul,
    ul_outer,
  } = options;

  if (!recursive || (maxDepth !== null && current_level >= maxDepth)) {
    return null;
  }

  const filteredItems = useMemo(
    () => items.filter((item) => item.parent_id === parentId),
    [items, parentId]
  );

  if (filteredItems.length === 0) return null;

  return (
    <ul
      data-orientation="horizontal"
      dir="ltr"
      className={cn(
        "jusitfy-center flex flex-1 list-none items-center",
        first_iteration ? "space-x-1" : "flex-col space-y-1",
        ul,
        first_iteration && ul_outer
      )}
    >
      {filteredItems.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          items={items}
          options={options}
        />
      ))}
    </ul>
  );
}
