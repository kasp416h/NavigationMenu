import React from "react";
import { MenuItem, MenuOptions } from "../types";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import NavigationList from "./navigation-list";

interface NavigationItemProps {
  item: MenuItem;
  items: MenuItem[];
  options: MenuOptions & {
    first_iteration?: boolean;
    current_level?: number;
  };
}

export default function NavigationItem({
  item,
  items,
  options,
}: NavigationItemProps) {
  const {
    first_iteration = true,
    li,
    li_outer,
    li_parent,
    a,
    a_outer,
    a_parent,
    current_level = 0,
    maxDepth = null,
  } = options;

  const hasChildren = items.some((child) => child.parent_id === item.id);
  const renderChildren =
    hasChildren && (maxDepth === null || current_level < maxDepth);

  return (
    <li
      key={item.id}
      className={cn(
        "relative w-full [&:hover>a>svg]:rotate-180",
        li,
        first_iteration && li_outer,
        renderChildren && li_parent
      )}
    >
      <HoverCard openDelay={300} closeDelay={renderChildren ? 300 : 0}>
        <HoverCardTrigger asChild>
          <Link
            href={item.url ?? "javascript:void(0);"}
            className={cn(
              "inline-flex h-10 w-full items-center rounded-md py-2 text-sm font-medium transition-colors hover:bg-foreground/10 data-[state=open]:bg-foreground/10",
              first_iteration ? "px-4" : "pl-4 pr-8",
              !item.url && "cursor-default",
              a,
              first_iteration && a_outer,
              renderChildren && a_parent
            )}
          >
            {item.name}
            {!first_iteration && renderChildren && (
              <ChevronDown
                style={{
                  transitionDuration: "400ms",
                }}
                className={cn(
                  "h-3 w-3 transform transition-transform",
                  first_iteration ? "ml-2" : "absolute right-3"
                )}
              />
            )}
          </Link>
        </HoverCardTrigger>
        {renderChildren && (
          <HoverCardContent
            side={first_iteration ? "bottom" : "right"}
            align="start"
            alignOffset={first_iteration ? 0 : -8}
            className="w-fit rounded-md bg-background p-2 shadow-lg"
          >
            <NavigationList
              items={items}
              parentId={item.id}
              options={{
                ...options,
                first_iteration: false,
                current_level: current_level + 1,
              }}
            />
          </HoverCardContent>
        )}
      </HoverCard>
    </li>
  );
}
