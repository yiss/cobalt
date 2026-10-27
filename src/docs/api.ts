import type { DocGroup, DocSection } from "@/docs/types";

export interface ApiProp {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

export interface ApiPart {
  name: string;
  description: string;
}

export interface ComponentApi {
  parts: ApiPart[];
  props?: ApiProp[];
}

const partNames: Record<string, string[]> = {
  accordion: [
    "Accordion",
    "AccordionItem",
    "AccordionHeader",
    "AccordionTrigger",
    "AccordionPanel",
  ],
  "alert-dialog": [
    "AlertDialog",
    "AlertDialogTrigger",
    "AlertDialogPopup",
    "AlertDialogTitle",
    "AlertDialogDescription",
    "AlertDialogFooter",
    "AlertDialogClose",
    "AlertDialogAction",
    "AlertDialogCancel",
  ],
  autocomplete: [
    "Autocomplete",
    "AutocompleteInput",
    "AutocompletePopup",
    "AutocompleteList",
    "AutocompleteEmpty",
    "AutocompleteItem",
    "AutocompleteGroup",
    "AutocompleteGroupLabel",
  ],
  avatar: ["Avatar", "AvatarImage", "AvatarFallback"],
  badge: ["Badge"],
  button: ["Button"],
  checkbox: ["Checkbox"],
  divider: ["Divider"],
  kbd: ["Kbd"],
  collapsible: ["Collapsible", "CollapsibleTrigger", "CollapsiblePanel"],
  combobox: [
    "Combobox",
    "ComboboxInputGroup",
    "ComboboxInput",
    "ComboboxTrigger",
    "ComboboxPopup",
    "ComboboxList",
    "ComboboxEmpty",
    "ComboboxItem",
  ],
  "context-menu": [
    "ContextMenu",
    "ContextMenuTrigger",
    "ContextMenuPopup",
    "ContextMenuItem",
    "ContextMenuSeparator",
  ],
  dialog: [
    "Dialog",
    "DialogTrigger",
    "DialogPopup",
    "DialogHeader",
    "DialogTitle",
    "DialogDescription",
    "DialogPanel",
    "DialogFooter",
    "DialogClose",
    "DialogDismiss",
  ],
  drawer: [
    "Drawer",
    "DrawerTrigger",
    "DrawerPopup",
    "DrawerHeader",
    "DrawerTitle",
    "DrawerDescription",
    "DrawerBody",
    "DrawerFooter",
    "DrawerClose",
    "DrawerDismiss",
  ],
  field: ["Field", "FieldLabel", "FieldDescription", "FieldError", "FieldControl"],
  fieldset: ["Fieldset", "FieldsetLegend"],
  form: ["Form"],
  input: ["Input"],
  label: ["Label"],
  menu: [
    "Menu",
    "MenuTrigger",
    "MenuPopup",
    "MenuItem",
    "MenuSeparator",
    "MenuGroup",
    "MenuGroupLabel",
    "MenuShortcut",
  ],
  menubar: ["Menubar"],
  meter: ["Meter"],
  "navigation-menu": [
    "NavigationMenu",
    "NavigationMenuList",
    "NavigationMenuItem",
    "NavigationMenuTrigger",
    "NavigationMenuContent",
    "NavigationMenuLink",
    "NavigationMenuPopup",
  ],
  "number-field": ["NumberField"],
  "otp-field": ["OTPField"],
  popover: [
    "Popover",
    "PopoverTrigger",
    "PopoverPopup",
    "PopoverTitle",
    "PopoverDescription",
    "PopoverClose",
  ],
  "preview-card": ["PreviewCard", "PreviewCardTrigger", "PreviewCardPopup"],
  progress: ["Progress"],
  "radio-group": ["RadioGroup", "Radio"],
  "scroll-area": ["ScrollArea"],
  select: [
    "Select",
    "SelectTrigger",
    "SelectValue",
    "SelectPopup",
    "SelectItem",
    "SelectGroup",
    "SelectGroupLabel",
    "SelectSeparator",
  ],
  slider: ["Slider"],
  switch: ["Switch"],
  tabs: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
  textarea: ["Textarea"],
  toast: ["ToastProvider", "toastManager"],
  toggle: ["Toggle"],
  "toggle-group": ["ToggleGroup"],
  toolbar: ["Toolbar", "ToolbarButton", "ToolbarGroup", "ToolbarSeparator", "ToolbarLink"],
  tooltip: ["TooltipProvider", "Tooltip", "TooltipTrigger", "TooltipPopup"],
};

const propsByComponent: Record<string, ApiProp[]> = {
  button: [
    {
      name: "variant",
      type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"',
      defaultValue: '"primary"',
      description: "Visual emphasis and intent.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg" | "icon"',
      defaultValue: '"md"',
      description: "Control height and padding; icon produces a square button.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents interaction and lowers emphasis.",
    },
  ],
  toolbar: [
    {
      name: "variant",
      type: '"ghost" | "secondary" | "primary"',
      defaultValue: '"ghost"',
      description: "Visual emphasis for ToolbarButton.",
    },
    {
      name: "size",
      type: '"default" | "icon"',
      defaultValue: '"default"',
      description: "Icon mode produces a square 32px toolbar target.",
    },
  ],
  toggle: [
    {
      name: "pressed",
      type: "boolean",
      description: "Controlled pressed state.",
    },
    {
      name: "defaultPressed",
      type: "boolean",
      defaultValue: "false",
      description: "Initial pressed state when uncontrolled.",
    },
    {
      name: "onPressedChange",
      type: "(pressed: boolean) => void",
      description: "Called when the pressed state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents interaction.",
    },
  ],
  "toggle-group": [
    {
      name: "value",
      type: "string[]",
      description: "Controlled values of the pressed toggles.",
    },
    {
      name: "defaultValue",
      type: "string[]",
      description: "Initial pressed values when uncontrolled.",
    },
    {
      name: "onValueChange",
      type: "(value: string[]) => void",
      description: "Called when the pressed values change.",
    },
    {
      name: "multiple",
      type: "boolean",
      defaultValue: "false",
      description: "Allows more than one toggle to be pressed.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables every toggle in the group.",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      defaultValue: '"horizontal"',
      description: "Orientation of the group.",
    },
  ],
  accordion: [
    {
      name: "value",
      type: "string[]",
      description: "Controlled values of the open items.",
    },
    {
      name: "defaultValue",
      type: "string[]",
      description: "Initial open items when uncontrolled.",
    },
    {
      name: "onValueChange",
      type: "(value: string[]) => void",
      description: "Called when the open items change.",
    },
    {
      name: "multiple",
      type: "boolean",
      defaultValue: "false",
      description: "Allows more than one item to stay open.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables every item in the accordion.",
    },
  ],
  tabs: [
    {
      name: "variant",
      type: '"segmented" | "underline"',
      defaultValue: '"segmented"',
      description: "Chooses the segmented capsule or underline treatment.",
    },
    {
      name: "value",
      type: "string",
      description: "Controlled active tab.",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "Initial active tab when uncontrolled.",
    },
  ],
  "number-field": [
    {
      name: "inputProps",
      type: "ComponentProps<NumberField.Input>",
      description: "Props for the value input; use aria-labelledby when the label lives outside.",
    },
    {
      name: "decrementLabel / incrementLabel",
      type: "string",
      description: "Accessible names for the stepper buttons.",
    },
    {
      name: "suffix",
      type: "ReactNode",
      description: "Optional unit shown inside the value area.",
    },
  ],
  divider: [
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      defaultValue: '"horizontal"',
      description: "Direction of the rule and its screen-reader semantics.",
    },
  ],
  badge: [
    {
      name: "variant",
      type: '"brand" | "success" | "warning" | "destructive" | "info" | "neutral"',
      defaultValue: '"brand"',
      description: "Semantic color treatment.",
    },
  ],
  "alert-dialog": [
    {
      name: "variant",
      type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"',
      defaultValue: '"outline" on Cancel',
      description: "AlertDialogAction and AlertDialogCancel inherit Button variants.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Size of the footer action buttons.",
    },
  ],
  meter: [
    {
      name: "tone",
      type: '"brand" | "success" | "warning" | "destructive" | "info"',
      defaultValue: '"brand"',
      description: "Semantic fill and text color.",
    },
    {
      name: "value / min / max",
      type: "number",
      description: "Current value and range passed to Base UI Meter.",
    },
    {
      name: "label / startLabel / status / endLabel",
      type: "ReactNode",
      description: "Accessible label and surrounding metadata.",
    },
  ],
  input: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Control height and horizontal padding.",
    },
    {
      name: "startIcon",
      type: "ReactNode",
      description: "Decorative leading icon; the input owns its position and padding.",
    },
    {
      name: "aria-invalid",
      type: "boolean",
      description: "Switches the field to the destructive focus and border treatment.",
    },
  ],
  switch: [
    {
      name: "checked",
      type: "boolean",
      description: "Controlled checked state.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      defaultValue: "false",
      description: "Initial checked state when uncontrolled.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents interaction.",
    },
  ],
  slider: [
    {
      name: "value / defaultValue",
      type: "number | number[]",
      description: "Single value or range values.",
    },
    {
      name: "min / max / step",
      type: "number",
      description: "Range and step size.",
    },
    {
      name: "formatValue",
      type: "(values: number[]) => ReactNode",
      description: "Formats the readout above the slider.",
    },
  ],
};

const nativeComponents = new Set(["badge", "kbd", "label", "textarea"]);

function describePart(name: string, title: string) {
  const normalizedTitle = title.replaceAll(" ", "");
  if (name === normalizedTitle) return "Root component.";
  if (name.endsWith("Provider")) return "Shares context and primitives with the tree.";
  if (name.endsWith("Trigger")) return "Opens or toggles the component.";
  if (name.endsWith("Popup")) return "Positioned floating surface.";
  if (name.endsWith("Close") || name.endsWith("Dismiss")) return "Closes the surface.";
  if (name.endsWith("Action")) return "Primary confirmation action, styled with Button.";
  if (name.endsWith("Cancel")) return "Secondary cancellation action, styled with Button.";
  if (name.endsWith("Title")) return "Accessible title.";
  if (name.endsWith("Description")) return "Supporting description.";
  if (name.endsWith("Header")) return "Header layout container.";
  if (name.endsWith("Footer")) return "Footer layout container.";
  if (name.endsWith("Panel") || name.endsWith("Content")) return "Content surface.";
  if (name.endsWith("Item")) return "Individual item.";
  if (name.endsWith("Separator")) return "Visual separator.";
  if (name.endsWith("Label")) return "Accessible label.";
  if (name.endsWith("Group")) return "Groups related items.";
  if (name.endsWith("List")) return "List layout container.";
  if (name.endsWith("Empty")) return "Empty state surface.";
  if (name.endsWith("Input")) return "Text input.";
  if (name.endsWith("Image")) return "Image element.";
  if (name.endsWith("Fallback")) return "Fallback content.";
  if (name.endsWith("Shortcut")) return "Keyboard shortcut hint.";
  if (name.endsWith("Value")) return "Formatted value readout.";
  if (name === "toastManager") return "Imperative toast API.";
  return "Composed part.";
}

export function getComponentApi(section: DocSection): ComponentApi {
  const names = partNames[section.id] ?? [section.title.replaceAll(" ", "")];
  return {
    parts: names.map((name) => ({ name, description: describePart(name, section.title) })),
    props: propsByComponent[section.id],
  };
}

export function getPrimitiveLabel(id: string) {
  return nativeComponents.has(id) ? "Native HTML" : "Base UI";
}

export function getAccessibilityNotes(group: DocGroup, section: DocSection) {
  const notes = [
    {
      title: "Keyboard",
      body: "Every interactive part is reachable by keyboard and keeps a visible focus outline. Activation uses Space or Enter.",
    },
    {
      title: "Motion",
      body: "Entrances and exits use short, interruptible transitions and collapse to an instant state under prefers-reduced-motion.",
    },
  ];

  switch (group.id) {
    case "overlays":
      notes.push({
        title: "Focus",
        body: "Base UI traps focus while the surface is open, closes on Escape, and returns focus to the trigger.",
      });
      break;
    case "forms":
      notes.push({
        title: "Labels and errors",
        body: "Labels are associated with their controls. Validation errors are linked with aria-describedby and focus moves to the invalid field.",
      });
      break;
    case "selection":
      notes.push({
        title: "Selection",
        body: "Options expose their selected state to assistive technology. Arrow keys move through the available choices.",
      });
      break;
    case "disclosure":
      notes.push({
        title: "State",
        body: "Disclosure triggers expose their expanded state and associate with the panel they control.",
      });
      break;
    case "feedback":
      notes.push({
        title: "Announcements",
        body: "Statusful feedback is exposed through the underlying primitive's live semantics; actionable toasts remain available until dismissed.",
      });
      break;
    case "utilities":
      notes.push({
        title: "Shortcuts",
        body: "Kbd renders semantic key labels. Put aria-keyshortcuts on the control that the shortcut activates; keycaps are not an input method by themselves.",
      });
      break;
    case "actions":
      if (section.id === "toggle" || section.id === "toggle-group") {
        notes.push({
          title: "Pressed state",
          body: "Toggles expose aria-pressed. Toggle Group keeps a single tab stop and uses arrow keys to move between items.",
        });
      } else {
        notes.push({
          title: "Controls",
          body: "Touch targets extend beyond the visual bounds of compact controls without changing their measured size.",
        });
      }
      break;
  }

  return notes;
}
