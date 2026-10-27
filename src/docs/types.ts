import type { ReactNode } from "react";

export interface DocExample {
  id: string;
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  preview: ReactNode;
  code: string;
  usage?: string;
  examples?: DocExample[];
}

export interface DocGroup {
  id: string;
  label: string;
  sections: DocSection[];
}
