import { actionsGroup } from "@/docs/actions";
import { disclosureGroup } from "@/docs/disclosure";
import { feedbackGroup } from "@/docs/feedback";
import { formsGroup } from "@/docs/forms";
import { overlaysGroup } from "@/docs/overlays";
import { selectionGroup } from "@/docs/selection";
import { utilitiesGroup } from "@/docs/utilities";
import type { DocGroup, DocSection } from "@/docs/types";

export const groups: DocGroup[] = [
  actionsGroup,
  formsGroup,
  selectionGroup,
  overlaysGroup,
  disclosureGroup,
  feedbackGroup,
  utilitiesGroup,
];

export interface ComponentRecord {
  group: DocGroup;
  section: DocSection;
  href: string;
}

export const components: ComponentRecord[] = groups.flatMap((group) =>
  group.sections.map((section) => ({
    group,
    section,
    href: `/components/${section.id}`,
  })),
);

export const componentCount = components.length;

export function getComponent(id: string | undefined) {
  return components.find((component) => component.section.id === id);
}

export function getAdjacentComponents(id: string) {
  const index = components.findIndex((component) => component.section.id === id);

  return {
    previous: index > 0 ? components[index - 1] : undefined,
    next: index >= 0 && index < components.length - 1 ? components[index + 1] : undefined,
  };
}

export interface DocPageRecord {
  id: string;
  title: string;
  href: string;
  label: string;
  description: string;
}

export const docsPages: DocPageRecord[] = [
  {
    id: "introduction",
    title: "Introduction",
    href: "/",
    label: "Getting started",
    description: "The ideas, materials, and conventions behind Cobalt.",
  },
  {
    id: "installation",
    title: "Installation",
    href: "/docs/installation",
    label: "Getting started",
    description: "Set up Cobalt in a Vite + React project with pnpm.",
  },
  {
    id: "foundations",
    title: "Foundations",
    href: "/foundations",
    label: "Reference",
    description: "Color, type, radii, and motion tokens.",
  },
  {
    id: "components",
    title: "Components",
    href: "/components",
    label: "Reference",
    description: "Every Cobalt component, grouped by purpose.",
  },
];

export type SearchRecord = {
  title: string;
  description: string;
  label: string;
  href: string;
};

export const searchRecords: SearchRecord[] = [
  ...docsPages.map((page) => ({
    title: page.title,
    description: page.description,
    label: page.label,
    href: page.href,
  })),
  ...components.map(({ group, section, href }) => ({
    title: section.title,
    description: section.description,
    label: group.label,
    href,
  })),
];
