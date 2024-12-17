export interface MenuItem {
  id: string;
  name: string;
  url?: string;
  parent_id?: string;
  icon?: string;
  icon_fa?: string;
  redirect?: string;
  link_target?: string;
}

export interface MenuOptions {
  recursive?: boolean;
  maxDepth?: number | null;
  ul?: React.HTMLAttributes<HTMLUListElement>["className"];
  ul_outer?: React.HTMLAttributes<HTMLUListElement>["className"];
  li?: React.HTMLAttributes<HTMLLIElement>["className"];
  li_outer?: React.HTMLAttributes<HTMLLIElement>["className"];
  li_parent?: React.HTMLAttributes<HTMLLIElement>["className"];
  a?: React.HTMLAttributes<HTMLAnchorElement>["className"];
  a_outer?: React.HTMLAttributes<HTMLAnchorElement>["className"];
  a_parent?: React.HTMLAttributes<HTMLAnchorElement>["className"];
}
