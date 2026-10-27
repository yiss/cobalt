import * as React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogDismiss,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerDescription,
  DrawerDismiss,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/components/ui/menu";
import { Popover, PopoverPopup, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { PreviewCard, PreviewCardPopup, PreviewCardTrigger } from "@/components/ui/preview-card";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";
import { DemoRow } from "@/components/docs/examples";
import { cn } from "@/lib/utils";
import type { DocGroup } from "@/docs/types";

const priorities = ["High Priority", "Medium", "Low"];

function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Create Issue</DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Create Issue</DialogTitle>
          <DialogDismiss />
        </DialogHeader>
        <DialogPanel>
          <Input aria-label="Issue title" defaultValue="Refactor OAuth Token Session Rotation" />
          <Textarea
            aria-label="Issue description"
            placeholder="Add description or acceptance criteria..."
          />
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Create Issue</DialogClose>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

function DrawerPreview() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="secondary" />}>Open Issue Drawer</DrawerTrigger>
      <DrawerPopup>
        <DrawerHeader>
          <div className="flex flex-col">
            <DrawerTitle>Issue Properties</DrawerTitle>
            <DrawerDescription>LIN-284</DrawerDescription>
          </div>
          <DrawerDismiss />
        </DrawerHeader>
        <DrawerBody>
          <dl className="flex flex-col gap-3.5 text-label">
            {[
              ["Assignee", "Alexander Wright"],
              ["Status", "In Progress"],
              ["Priority", "High Priority"],
              ["Cycle", "Sprint 42"],
            ].map(([key, value]) => (
              <div key={key} className="flex items-center justify-between gap-4">
                <dt className="text-text-secondary">{key}</dt>
                <dd className="text-text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          <DrawerClose render={<Button />}>Update</DrawerClose>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

function PopoverPreview() {
  const [priority, setPriority] = React.useState("High Priority");

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" />}>Set task priority</PopoverTrigger>
      <PopoverPopup>
        <div className="flex flex-col gap-2.5">
          <PopoverTitle>Set task priority</PopoverTitle>
          <div className="flex flex-col gap-1">
            {priorities.map((item) => {
              const selected = item === priority;

              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setPriority(item)}
                  className={cn(
                    "flex h-9 w-full items-center justify-between rounded-xs px-3 text-left text-label transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    selected
                      ? "bg-brand text-brand-foreground"
                      : "text-text-soft hover:bg-surface-card",
                  )}
                >
                  <span>{item}</span>
                  <span className={selected ? "text-cobalt-200" : "text-text-muted"}>
                    {item === "High Priority" ? "P1" : item === "Medium" ? "P2" : "P3"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </PopoverPopup>
    </Popover>
  );
}

function TooltipPreview() {
  return (
    <DemoRow>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary" />}>New issue</TooltipTrigger>
        <TooltipPopup>Create a new issue in this project</TooltipPopup>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary" />}>Search</TooltipTrigger>
        <TooltipPopup>Quick search (⌘K)</TooltipPopup>
      </Tooltip>
    </DemoRow>
  );
}

function PreviewCardPreview() {
  return (
    <p className="flex w-full max-w-control flex-wrap items-center gap-2 text-body text-text-secondary">
      <PreviewCard>
        <PreviewCardTrigger href="#preview-card">Linear Platform</PreviewCardTrigger>
        <PreviewCardPopup>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>LN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <span className="text-body text-text-primary">Linear Platform</span>
                <span className="text-caption text-accent-text">@linear</span>
              </div>
            </div>
            <p className="text-caption leading-5 text-text-secondary">
              The issue tracking tool you&apos;ll enjoy using. Streamline software projects,
              sprints, and product roadmaps.
            </p>
            <div className="flex items-center gap-3 text-caption text-text-muted">
              <span>12.4k Stars</span>
              <span>84 Releases</span>
            </div>
            <div>
              <Button>Follow Project</Button>
            </div>
          </div>
        </PreviewCardPopup>
      </PreviewCard>
      <span>issue tracking, built for speed.</span>
    </p>
  );
}

function MenuPreview() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="secondary" />}>Open command menu</MenuTrigger>
      <MenuPopup>
        <MenuItem aria-keyshortcuts="E">
          Edit properties <MenuShortcut>E</MenuShortcut>
        </MenuItem>
        <MenuItem aria-keyshortcuts="Meta+D">
          Duplicate <MenuShortcut>⌘D</MenuShortcut>
        </MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive" aria-keyshortcuts="Backspace">
          Delete <MenuShortcut>⌫</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}

function ContextMenuPreview() {
  return (
    <ContextMenu>
      <ContextMenuTrigger aria-label="Task actions" aria-keyshortcuts="Shift+F10">
        <div className="flex h-32 w-full max-w-control items-center justify-center rounded-lg border border-dashed border-border bg-canvas px-6 text-center text-caption text-text-muted">
          Right-click, or focus this area and press Shift+F10.
        </div>
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem aria-keyshortcuts="E">
          Edit properties <MenuShortcut>E</MenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem aria-keyshortcuts="Meta+D">
          Duplicate task <MenuShortcut>⌘D</MenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" aria-keyshortcuts="Backspace">
          Delete <MenuShortcut>⌫</MenuShortcut>
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}

export const overlaysGroup: DocGroup = {
  id: "overlays",
  label: "Overlays",
  sections: [
    {
      id: "dialog",
      title: "Dialog",
      description:
        "A borderless 440px modal with a quiet header, a single continuous panel, and an unfilled action footer.",
      preview: <DialogPreview />,
      code: `
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogClose, DialogDismiss, DialogFooter, DialogHeader,
  DialogPanel, DialogPopup, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

<Dialog>
  <DialogTrigger render={<Button />}>Create Issue</DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>Create Issue</DialogTitle>
      <DialogDismiss />
    </DialogHeader>
    <DialogPanel>
      <Input aria-label="Issue title" />
      <Textarea aria-label="Issue description" />
    </DialogPanel>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <DialogClose render={<Button />}>Create Issue</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>
`,
    },
    {
      id: "alert-dialog",
      title: "Alert Dialog",
      description:
        "A confirmation modal for irreversible actions. It requires a response and never closes on outside press.",
      preview: (
        <DemoRow>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Revoke API Key
            </AlertDialogTrigger>
            <AlertDialogPopup>
              <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
              <AlertDialogDescription>
                All active microservices authenticating with this key will immediately lose access.
                This action cannot be reversed.
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep Key</AlertDialogCancel>
                <AlertDialogAction variant="destructive">Revoke Access</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogPopup>
          </AlertDialog>
        </DemoRow>
      ),
      code: `
import { Button } from "@/components/ui/button"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription,
  AlertDialogFooter, AlertDialogPopup, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Revoke API Key
  </AlertDialogTrigger>
  <AlertDialogPopup>
    <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
    <AlertDialogDescription>
      Active microservices will immediately lose access. This cannot be reversed.
    </AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep Key</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Revoke Access</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>
`,
    },
    {
      id: "drawer",
      title: "Drawer",
      description:
        "A docked edge sheet with a 340px width, backdrop scrim, swipe dismissal, and a pinned action footer.",
      preview: <DrawerPreview />,
      code: `
import { Button } from "@/components/ui/button"
import {
  Drawer, DrawerBody, DrawerClose, DrawerDescription, DrawerDismiss,
  DrawerFooter, DrawerHeader, DrawerPopup, DrawerTitle, DrawerTrigger,
} from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger render={<Button variant="secondary" />}>Open Issue Drawer</DrawerTrigger>
  <DrawerPopup>
    <DrawerHeader>
      <div className="flex flex-col">
        <DrawerTitle>Issue Properties</DrawerTitle>
        <DrawerDescription>LIN-284</DrawerDescription>
      </div>
      <DrawerDismiss />
    </DrawerHeader>
    <DrawerBody>...</DrawerBody>
    <DrawerFooter>
      <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
      <DrawerClose render={<Button />}>Update</DrawerClose>
    </DrawerFooter>
  </DrawerPopup>
</Drawer>
`,
    },
    {
      id: "popover",
      title: "Popover",
      description:
        "An origin-aware floating surface for contextual choices. It scales from the trigger and settles in 150ms.",
      preview: <PopoverPreview />,
      code: `
import { Button } from "@/components/ui/button"
import {
  Popover, PopoverPopup, PopoverTitle, PopoverTrigger,
} from "@/components/ui/popover"

<Popover>
  <PopoverTrigger render={<Button variant="secondary" />}>Set task priority</PopoverTrigger>
  <PopoverPopup>
    <PopoverTitle>Set task priority</PopoverTitle>
    <button type="button" aria-pressed="true">High Priority <span>P1</span></button>
    <button type="button" aria-pressed="false">Medium <span>P2</span></button>
  </PopoverPopup>
</Popover>
`,
    },
    {
      id: "tooltip",
      title: "Tooltip",
      description:
        "A 28px micro-label for keyboard hints and concise action descriptions. Reappears instantly after the first.",
      preview: <TooltipPreview />,
      code: `
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger render={<Button variant="secondary" />}>Search</TooltipTrigger>
  <TooltipPopup>Quick search (⌘K)</TooltipPopup>
</Tooltip>
`,
    },
    {
      id: "preview-card",
      title: "Preview Card",
      description:
        "A hover-triggered destination card for links. It stays out of keyboard and screen-reader flow until opened.",
      preview: <PreviewCardPreview />,
      code: `
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  PreviewCard, PreviewCardPopup, PreviewCardTrigger,
} from "@/components/ui/preview-card"

<PreviewCard>
  <PreviewCardTrigger href="#preview-card">Linear Platform</PreviewCardTrigger>
  <PreviewCardPopup>
    <div className="flex items-center gap-3">
      <Avatar><AvatarFallback>LN</AvatarFallback></Avatar>
      <div>
        <span>Linear Platform</span>
        <span>@linear</span>
      </div>
    </div>
    <p>The issue tracking tool you'll enjoy using.</p>
    <Button>Follow Project</Button>
  </PreviewCardPopup>
</PreviewCard>
`,
    },
    {
      id: "menu",
      title: "Menu",
      description:
        "A keyboard-navigable command list. Highlighted rows take the solid cobalt surface; shortcuts stay legible.",
      preview: <MenuPreview />,
      code: `
import { Button } from "@/components/ui/button"
import {
  Menu, MenuItem, MenuPopup, MenuSeparator, MenuShortcut, MenuTrigger,
} from "@/components/ui/menu"

<Menu>
  <MenuTrigger render={<Button variant="secondary" />}>Open command menu</MenuTrigger>
  <MenuPopup>
    <MenuItem aria-keyshortcuts="E">Edit properties <MenuShortcut>E</MenuShortcut></MenuItem>
    <MenuItem aria-keyshortcuts="Meta+D">Duplicate <MenuShortcut>⌘D</MenuShortcut></MenuItem>
    <MenuSeparator />
    <MenuItem variant="destructive">Delete <MenuShortcut>⌫</MenuShortcut></MenuItem>
  </MenuPopup>
</Menu>
`,
    },
    {
      id: "context-menu",
      title: "Context Menu",
      description:
        "A pointer-anchored command menu with a 280px width, a 10px squircle, and the same destructive treatment as Menu. Focus the covered area and press Shift+F10 for keyboard access.",
      preview: <ContextMenuPreview />,
      code: `
import {
  ContextMenu, ContextMenuItem, ContextMenuPopup,
  ContextMenuSeparator, ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { MenuShortcut } from "@/components/ui/menu"

<ContextMenu>
  <ContextMenuTrigger aria-label="Task actions" aria-keyshortcuts="Shift+F10">
    <div className="flex h-32 items-center justify-center border border-dashed">
      Right-click, or focus and press Shift+F10
    </div>
  </ContextMenuTrigger>
  <ContextMenuPopup>
    <ContextMenuItem>Edit properties <MenuShortcut>E</MenuShortcut></ContextMenuItem>
    <ContextMenuItem>Duplicate task <MenuShortcut>⌘D</MenuShortcut></ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuPopup>
</ContextMenu>
`,
    },
  ],
};
