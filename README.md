# Navigation Lib

This is a navigation lib that generates a navigation menu from a list of `MenuItem` objects. The menu supports infinite levels of nested items using hover cards.

## Features

- Infinite nested navigation using hover cards
- Customizable styles with Tailwind CSS
- Easy to use

## Example

```tsx
import React from "react";
import NavigationMenu from "./src/index";
import { MenuItem } from "./src/types";

const items: MenuItem[] = [
  { id: "1", name: "Home", url: "/" },
  { id: "2", name: "About", url: "/about" },
  { id: "3", name: "Services", url: "/services", parent_id: "1" },
  { id: "4", name: "Contact", url: "/contact" },
];

function App() {
  return <NavigationMenu items={items} />;
}

export default App;
```

## Options

The `NavigationMenu` component accepts an optional `options` prop to customize the behavior and appearance of the menu. The `MenuOptions` interface defines the available options:

- `recursive` (boolean): Whether the menu should be recursive. Default is `true`.
- `maxDepth` (number | null): The maximum depth of the menu. Default is `null` (no limit).
- `ul` (string): Custom class for the `ul` element.
- `ul_outer` (string): Custom class for the outer `ul` element.
- `li` (string): Custom class for the `li` element.
- `li_outer` (string): Custom class for the outer `li` element.
- `li_parent` (string): Custom class for the parent `li` element.
- `a` (string): Custom class for the `a` element.
- `a_outer` (string): Custom class for the outer `a` element.
- `a_parent` (string): Custom class for the parent `a` element.
