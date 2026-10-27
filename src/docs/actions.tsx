import {
  AlignLeft,
  AlignRight,
  Bold,
  Bookmark,
  ChartGantt,
  Columns3,
  Italic,
  List,
  MoreHorizontal,
  Plus,
  Redo,
  Search,
  Underline,
  Undo,
} from "@keyline-icons/react";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menubar } from "@/components/ui/menubar";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from "@/components/ui/toolbar";
import { DemoRow } from "@/components/docs/examples";
import type { DocGroup } from "@/docs/types";

function ButtonPreview() {
  return <Button>Primary</Button>;
}

function TogglePreview() {
  return <Toggle>Show archived</Toggle>;
}

function ToggleGroupPreview() {
  return (
    <div className="w-full max-w-control">
      <ToggleGroup defaultValue={["list"]} aria-label="Issue view">
        <Toggle value="list">
          <List className="size-4" aria-hidden="true" /> List
        </Toggle>
        <Toggle value="board">
          <Columns3 className="size-4" aria-hidden="true" /> Board
        </Toggle>
        <Toggle value="timeline">
          <ChartGantt className="size-4" aria-hidden="true" /> Timeline
        </Toggle>
      </ToggleGroup>
    </div>
  );
}

function ToggleControlledPreview() {
  const [archived, setArchived] = React.useState(true);

  return (
    <DemoRow>
      <Toggle pressed={archived} onPressedChange={setArchived}>
        Show archived
      </Toggle>
      <span className="text-caption text-text-muted">
        {archived ? "Archived issues are visible." : "Archived issues are hidden."}
      </span>
    </DemoRow>
  );
}

function ToggleIconPreview() {
  return (
    <DemoRow>
      <Toggle>
        <Bookmark className="size-4" aria-hidden="true" /> Bookmark
      </Toggle>
      <Toggle defaultPressed>
        <Bookmark className="size-4" aria-hidden="true" /> Bookmarked
      </Toggle>
    </DemoRow>
  );
}

function ToggleGroupMultiplePreview() {
  return (
    <div className="w-full max-w-52">
      <ToggleGroup multiple defaultValue={["bold"]} aria-label="Text formatting">
        <Toggle value="bold" aria-label="Bold">
          <Bold className="size-4" aria-hidden="true" />
        </Toggle>
        <Toggle value="italic" aria-label="Italic">
          <Italic className="size-4" aria-hidden="true" />
        </Toggle>
        <Toggle value="underline" aria-label="Underline">
          <Underline className="size-4" aria-hidden="true" />
        </Toggle>
      </ToggleGroup>
    </div>
  );
}

function ToggleGroupDisabledPreview() {
  return (
    <div className="w-full max-w-control">
      <ToggleGroup disabled defaultValue={["comfortable"]} aria-label="Density">
        <Toggle value="compact">Compact</Toggle>
        <Toggle value="comfortable">Comfortable</Toggle>
        <Toggle value="spacious">Spacious</Toggle>
      </ToggleGroup>
    </div>
  );
}

function ToolbarPreview() {
  return (
    <div className="w-full max-w-control">
      <Toolbar aria-label="Editor toolbar">
        <ToolbarGroup>
          <ToolbarButton size="icon" aria-label="Undo">
            <Undo className="size-4" aria-hidden="true" />
          </ToolbarButton>
          <ToolbarButton size="icon" aria-label="Redo">
            <Redo className="size-4" aria-hidden="true" />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton size="icon" aria-label="Bold">
            <Bold className="size-4" aria-hidden="true" />
          </ToolbarButton>
          <ToolbarButton size="icon" aria-label="Italic">
            <Italic className="size-4" aria-hidden="true" />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton size="icon" aria-label="Align left">
            <AlignLeft className="size-4" aria-hidden="true" />
          </ToolbarButton>
          <ToolbarButton size="icon" aria-label="Align right">
            <AlignRight className="size-4" aria-hidden="true" />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarButton variant="primary" className="ml-auto">
          Publish
        </ToolbarButton>
      </Toolbar>
    </div>
  );
}

function MenubarPreview() {
  return (
    <div className="w-full max-w-xl">
      <Menubar aria-label="Application menu">
        <Menu>
          <MenuTrigger>File</MenuTrigger>
          <MenuPopup sideOffset={12}>
            <MenuItem aria-keyshortcuts="Meta+N">
              New File <MenuShortcut>⌘N</MenuShortcut>
            </MenuItem>
            <MenuItem aria-keyshortcuts="Meta+O">
              Open Project... <MenuShortcut>⌘O</MenuShortcut>
            </MenuItem>
            <MenuSeparator />
            <MenuItem aria-keyshortcuts="Shift+Meta+E">
              Export JSON <MenuShortcut>⇧⌘E</MenuShortcut>
            </MenuItem>
          </MenuPopup>
        </Menu>
        <Menu>
          <MenuTrigger>Edit</MenuTrigger>
          <MenuPopup sideOffset={12}>
            <MenuItem>Undo</MenuItem>
            <MenuItem>Redo</MenuItem>
            <MenuSeparator />
            <MenuItem>Find</MenuItem>
          </MenuPopup>
        </Menu>
        <Menu>
          <MenuTrigger>View</MenuTrigger>
          <MenuPopup sideOffset={12}>
            <MenuItem>Command palette</MenuItem>
            <MenuItem>Toggle sidebar</MenuItem>
          </MenuPopup>
        </Menu>
        <Menu>
          <MenuTrigger>Deploy</MenuTrigger>
          <MenuPopup sideOffset={12}>
            <MenuItem>Deploy preview</MenuItem>
            <MenuItem>Open production</MenuItem>
          </MenuPopup>
        </Menu>
        <Menu>
          <MenuTrigger>Help</MenuTrigger>
          <MenuPopup sideOffset={12}>
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Keyboard shortcuts</MenuItem>
          </MenuPopup>
        </Menu>
      </Menubar>
    </div>
  );
}

function NavigationMenuPreview() {
  return (
    <div className="w-full max-w-xl">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#product-platform">
                <span data-slot="navigation-link-label">Platform</span>
                <span data-slot="navigation-link-description">Plan, build, and ship together.</span>
              </NavigationMenuLink>
              <NavigationMenuLink href="#product-changelog">
                <span data-slot="navigation-link-label">Changelog</span>
                <span data-slot="navigation-link-description">The latest product updates.</span>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#resources-docs">
                <span data-slot="navigation-link-label">Documentation</span>
                <span data-slot="navigation-link-description">Guides and component reference.</span>
              </NavigationMenuLink>
              <NavigationMenuLink href="#resources-tokens">
                <span data-slot="navigation-link-label">Design tokens</span>
                <span data-slot="navigation-link-description">Color, type, shape, and motion.</span>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPopup />
      </NavigationMenu>
    </div>
  );
}

export const actionsGroup: DocGroup = {
  id: "actions",
  label: "Actions & command",
  sections: [
    {
      id: "button",
      title: "Button",
      description:
        "Primary interactive control with top-highlight specular bevels, 10px squircles, and solid destructive styles.",
      preview: <ButtonPreview />,
      code: `
import { Button } from "@/components/ui/button"

<Button>Primary</Button>
`,
      examples: [
        {
          id: "secondary",
          title: "Secondary",
          description: "A quiet tonal action for the second most important choice.",
          preview: <Button variant="secondary">Secondary</Button>,
          code: `
import { Button } from "@/components/ui/button"

<Button variant="secondary">Secondary</Button>
`,
        },
        {
          id: "outline",
          title: "Outline",
          description: "A bordered action with no filled surface.",
          preview: <Button variant="outline">Outline</Button>,
          code: `
import { Button } from "@/components/ui/button"

<Button variant="outline">Outline</Button>
`,
        },
        {
          id: "ghost",
          title: "Ghost",
          description: "A low-emphasis action that only reveals its surface on hover.",
          preview: <Button variant="ghost">Ghost</Button>,
          code: `
import { Button } from "@/components/ui/button"

<Button variant="ghost">Ghost</Button>
`,
        },
        {
          id: "destructive",
          title: "Destructive",
          description: "Use only for actions that remove data or cannot be undone.",
          preview: <Button variant="destructive">Destructive</Button>,
          code: `
import { Button } from "@/components/ui/button"

<Button variant="destructive">Destructive</Button>
`,
        },
        {
          id: "small",
          title: "Small",
          description: "32px control for dense toolbars and row actions.",
          preview: <Button size="sm">Small</Button>,
          code: `
import { Button } from "@/components/ui/button"

<Button size="sm">Small</Button>
`,
        },
        {
          id: "large",
          title: "Large",
          description: "40px control for prominent forms and empty states.",
          preview: <Button size="lg">Large</Button>,
          code: `
import { Button } from "@/components/ui/button"

<Button size="lg">Large</Button>
`,
        },
        {
          id: "icon",
          title: "Icon button",
          description: "A square action with a Keyline icon and an explicit accessible name.",
          preview: (
            <Button size="icon" aria-label="Search">
              <Search className="size-4" aria-hidden="true" />
            </Button>
          ),
          code: `
import { Search } from "@keyline-icons/react"
import { Button } from "@/components/ui/button"

<Button size="icon" aria-label="Search">
  <Search className="size-4" aria-hidden="true" />
</Button>
`,
        },
        {
          id: "icon-secondary",
          title: "Icon button secondary",
          description: "A tonal icon action for a secondary control.",
          preview: (
            <Button size="icon" variant="secondary" aria-label="Add item">
              <Plus className="size-4" aria-hidden="true" />
            </Button>
          ),
          code: `
import { Plus } from "@keyline-icons/react"
import { Button } from "@/components/ui/button"

<Button size="icon" variant="secondary" aria-label="Add item">
  <Plus className="size-4" aria-hidden="true" />
</Button>
`,
        },
        {
          id: "icon-ghost",
          title: "Icon button ghost",
          description: "A low-emphasis icon action for toolbars and dense rows.",
          preview: (
            <Button size="icon" variant="ghost" aria-label="More actions">
              <MoreHorizontal className="size-4" aria-hidden="true" />
            </Button>
          ),
          code: `
import { MoreHorizontal } from "@keyline-icons/react"
import { Button } from "@/components/ui/button"

<Button size="icon" variant="ghost" aria-label="More actions">
  <MoreHorizontal className="size-4" aria-hidden="true" />
</Button>
`,
        },
        {
          id: "disabled",
          title: "Disabled",
          description:
            "Disabled actions remove the bevel and reduce emphasis without changing layout.",
          preview: <Button disabled>Disabled</Button>,
          code: `
import { Button } from "@/components/ui/button"

<Button disabled>Disabled</Button>
`,
        },
      ],
    },
    {
      id: "toggle",
      title: "Toggle",
      description:
        "A binary pressed control for settings such as showing archived work. A quiet brand tint marks the on state.",
      preview: <TogglePreview />,
      code: `
import { Toggle } from "@/components/ui/toggle"

<Toggle>Show archived</Toggle>
`,
      usage: `
import { Toggle } from "@/components/ui/toggle"

<Toggle defaultPressed>Show archived</Toggle>
`,
      examples: [
        {
          id: "pressed",
          title: "Pressed",
          description:
            "The quiet brand tint marks the on state without turning the control into a solid fill.",
          preview: <Toggle defaultPressed>Show archived</Toggle>,
          code: `
import { Toggle } from "@/components/ui/toggle"

<Toggle defaultPressed>Show archived</Toggle>
`,
        },
        {
          id: "disabled",
          title: "Disabled",
          description: "Disabled toggles keep their label but drop the interactive state.",
          preview: <Toggle disabled>Notifications</Toggle>,
          code: `
import { Toggle } from "@/components/ui/toggle"

<Toggle disabled>Notifications</Toggle>
`,
        },
        {
          id: "controlled",
          title: "Controlled",
          description: "Drive the pressed state yourself and reflect it in the surrounding UI.",
          preview: <ToggleControlledPreview />,
          code: `
"use client"

import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"

export function ArchivedToggle() {
  const [archived, setArchived] = useState(true)

  return (
    <Toggle pressed={archived} onPressedChange={setArchived}>
      Show archived
    </Toggle>
  )
}
`,
        },
        {
          id: "icon",
          title: "With icon",
          description:
            "The icon inherits the toggle's state color; keep the accessible name on the text label.",
          preview: <ToggleIconPreview />,
          code: `
import { Bookmark } from "@keyline-icons/react"
import { Toggle } from "@/components/ui/toggle"

<Toggle defaultPressed>
  <Bookmark className="size-4" aria-hidden="true" /> Bookmarked
</Toggle>
`,
        },
      ],
    },
    {
      id: "toggle-group",
      title: "Toggle Group",
      description:
        "A shared track for mutually exclusive options. The selected segment uses a tonal surface instead of a solid accent fill.",
      preview: <ToggleGroupPreview />,
      code: `
import { ChartGantt, Columns3, List } from "@keyline-icons/react"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"

<ToggleGroup defaultValue={["list"]} aria-label="Issue view">
  <Toggle value="list">
    <List className="size-4" aria-hidden="true" /> List
  </Toggle>
  <Toggle value="board">
    <Columns3 className="size-4" aria-hidden="true" /> Board
  </Toggle>
  <Toggle value="timeline">
    <ChartGantt className="size-4" aria-hidden="true" /> Timeline
  </Toggle>
</ToggleGroup>
`,
      usage: `
import { List } from "@keyline-icons/react"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"

<ToggleGroup defaultValue={["list"]} aria-label="Issue view">
  <Toggle value="list">
    <List className="size-4" aria-hidden="true" /> List
  </Toggle>
  <Toggle value="board">Board</Toggle>
</ToggleGroup>
`,
      examples: [
        {
          id: "multiple",
          title: "Multiple selection",
          description: "Allow more than one control to stay pressed at the same time.",
          preview: <ToggleGroupMultiplePreview />,
          code: `
import { Bold, Italic, Underline } from "@keyline-icons/react"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"

<div className="w-full max-w-52">
  <ToggleGroup multiple defaultValue={["bold"]} aria-label="Text formatting">
    <Toggle value="bold" aria-label="Bold">
      <Bold className="size-4" aria-hidden="true" />
    </Toggle>
    <Toggle value="italic" aria-label="Italic">
      <Italic className="size-4" aria-hidden="true" />
    </Toggle>
    <Toggle value="underline" aria-label="Underline">
      <Underline className="size-4" aria-hidden="true" />
    </Toggle>
  </ToggleGroup>
</div>
`,
        },
        {
          id: "disabled",
          title: "Disabled",
          description: "Disable the group while preserving the selected segment for context.",
          preview: <ToggleGroupDisabledPreview />,
          code: `
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"

<ToggleGroup disabled defaultValue={["comfortable"]} aria-label="Density">
  <Toggle value="compact">Compact</Toggle>
  <Toggle value="comfortable">Comfortable</Toggle>
  <Toggle value="spacious">Spacious</Toggle>
</ToggleGroup>
`,
        },
      ],
    },
    {
      id: "toolbar",
      title: "Toolbar",
      description:
        "A keyboard-accessible editor toolbar with grouped icon actions, quiet separators, and one primary command.",
      preview: <ToolbarPreview />,
      code: `
import {
  AlignLeft, AlignRight, Bold, Italic, Redo, Undo,
} from "@keyline-icons/react"
import {
  Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator,
} from "@/components/ui/toolbar"

<Toolbar aria-label="Editor toolbar">
  <ToolbarGroup>
    <ToolbarButton size="icon" aria-label="Undo">
      <Undo className="size-4" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton size="icon" aria-label="Redo">
      <Redo className="size-4" aria-hidden="true" />
    </ToolbarButton>
  </ToolbarGroup>
  <ToolbarSeparator />
  <ToolbarGroup>
    <ToolbarButton size="icon" aria-label="Bold">
      <Bold className="size-4" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton size="icon" aria-label="Italic">
      <Italic className="size-4" aria-hidden="true" />
    </ToolbarButton>
  </ToolbarGroup>
  <ToolbarSeparator />
  <ToolbarGroup>
    <ToolbarButton size="icon" aria-label="Align left">
      <AlignLeft className="size-4" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton size="icon" aria-label="Align right">
      <AlignRight className="size-4" aria-hidden="true" />
    </ToolbarButton>
  </ToolbarGroup>
  <ToolbarButton variant="primary" className="ml-auto">Publish</ToolbarButton>
</Toolbar>
`,
    },
    {
      id: "menubar",
      title: "Menubar",
      description:
        "Desktop command menu bars with a shared roving focus model. Popups reuse the Cobalt command menu surface.",
      preview: <MenubarPreview />,
      code: `
import { Menubar } from "@/components/ui/menubar"
import {
  Menu, MenuItem, MenuPopup, MenuSeparator, MenuShortcut, MenuTrigger,
} from "@/components/ui/menu"

<Menubar aria-label="Application menu">
  <Menu>
    <MenuTrigger>File</MenuTrigger>
    <MenuPopup>
      <MenuItem aria-keyshortcuts="Meta+N">
        New File <MenuShortcut>⌘N</MenuShortcut>
      </MenuItem>
      <MenuSeparator />
      <MenuItem aria-keyshortcuts="Shift+Meta+E">
        Export JSON <MenuShortcut>⇧⌘E</MenuShortcut>
      </MenuItem>
    </MenuPopup>
  </Menu>
</Menubar>
`,
    },
    {
      id: "navigation-menu",
      title: "Navigation Menu",
      description:
        "Website navigation with viewport-aware flyouts. Content pans between triggers while the surface stays stable.",
      preview: <NavigationMenuPreview />,
      code: `
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuPopup,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Product</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="#platform">
          <span data-slot="navigation-link-label">Platform</span>
          <span data-slot="navigation-link-description">Plan, build, and ship together.</span>
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuPopup />
</NavigationMenu>
`,
    },
  ],
};
