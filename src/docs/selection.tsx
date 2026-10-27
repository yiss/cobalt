import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/components/ui/autocomplete";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
} from "@/components/ui/combobox";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DemoStack } from "@/components/docs/examples";
import type { DocGroup } from "@/docs/types";

const teams = [
  { label: "Engineering", value: "Engineering" },
  { label: "Product Design", value: "Product Design" },
  { label: "Developer Operations", value: "Developer Operations" },
];

const countries = ["United States", "United Kingdom", "Germany"];

const suggestions = ["linear-sdk/client", "linear-cli/auth", "linear-webhooks/event"];

function SelectPreview() {
  return (
    <DemoStack>
      <Select items={teams} defaultValue="Engineering">
        <SelectTrigger aria-label="Team">
          <SelectValue placeholder="Select a team..." />
        </SelectTrigger>
        <SelectPopup>
          {teams.map((team) => (
            <SelectItem key={team.value} value={team.value}>
              {team.label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
    </DemoStack>
  );
}

function ComboboxPreview() {
  return (
    <DemoStack>
      <Combobox items={countries} defaultValue="United States">
        <ComboboxInputGroup>
          <ComboboxInput aria-label="Country" placeholder="Select country..." autoComplete="off" />
          <ComboboxTrigger aria-label="Open country menu" />
        </ComboboxInputGroup>
        <ComboboxPopup>
          <ComboboxEmpty>No country found.</ComboboxEmpty>
          <ComboboxList>
            {(country: string) => (
              <ComboboxItem key={country} value={country}>
                {country}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    </DemoStack>
  );
}

function AutocompletePreview() {
  return (
    <DemoStack>
      <Autocomplete
        items={suggestions}
        defaultValue="lin"
        openOnInputClick
        autoHighlight="always"
        keepHighlight
      >
        <AutocompleteInput aria-label="Search repositories" placeholder="Search..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No repositories found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: string) => (
              <AutocompleteItem
                key={item}
                value={item}
                shortcut={item === "linear-sdk/client" ? "Tab" : undefined}
              >
                {item}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </DemoStack>
  );
}

export const selectionGroup: DocGroup = {
  id: "selection",
  label: "Selection",
  sections: [
    {
      id: "select",
      title: "Select",
      description:
        "A 380px-friendly form trigger and popup listbox with a quiet selected row and a cobalt check.",
      preview: <SelectPreview />,
      code: `
import {
  Select, SelectItem, SelectPopup, SelectTrigger, SelectValue,
} from "@/components/ui/select"

const teams = [
  { label: "Engineering", value: "Engineering" },
  { label: "Product Design", value: "Product Design" },
]

<Select items={teams} defaultValue="Engineering">
  <SelectTrigger aria-label="Team">
    <SelectValue placeholder="Select a team..." />
  </SelectTrigger>
  <SelectPopup>
    {teams.map((team) => (
      <SelectItem key={team.value} value={team.value}>
        {team.label}
      </SelectItem>
    ))}
  </SelectPopup>
</Select>
`,
    },
    {
      id: "combobox",
      title: "Combobox",
      description:
        "A filterable country picker with an inline trigger, selected state, and keyboard-driven list navigation.",
      preview: <ComboboxPreview />,
      code: `
import {
  Combobox, ComboboxEmpty, ComboboxInput, ComboboxInputGroup,
  ComboboxItem, ComboboxList, ComboboxPopup, ComboboxTrigger,
} from "@/components/ui/combobox"

const countries = ["United States", "United Kingdom", "Germany"]

<Combobox items={countries} defaultValue="United States">
  <ComboboxInputGroup>
    <ComboboxInput aria-label="Country" placeholder="Select country..." />
    <ComboboxTrigger aria-label="Open country menu" />
  </ComboboxInputGroup>
  <ComboboxPopup>
    <ComboboxEmpty>No country found.</ComboboxEmpty>
    <ComboboxList>
      {(country) => (
        <ComboboxItem key={country} value={country}>
          {country}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxPopup>
</Combobox>
`,
    },
    {
      id: "autocomplete",
      title: "Autocomplete",
      description:
        "Filtered suggestions for free-form search, with Tab completion and a highlighted active result.",
      preview: <AutocompletePreview />,
      code: `
import {
  Autocomplete, AutocompleteEmpty, AutocompleteInput, AutocompleteItem,
  AutocompleteList, AutocompletePopup,
} from "@/components/ui/autocomplete"

const suggestions = ["linear-sdk/client", "linear-cli/auth"]

<Autocomplete items={suggestions} openOnInputClick autoHighlight="always" keepHighlight>
  <AutocompleteInput aria-label="Search repositories" placeholder="Search..." />
  <AutocompletePopup>
    <AutocompleteEmpty>No repositories found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item} value={item} shortcut={item === "linear-sdk/client" ? "Tab" : undefined}>
          {item}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>
`,
    },
  ],
};
