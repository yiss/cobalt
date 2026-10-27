import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Divider } from "@/components/ui/divider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DocGroup } from "@/docs/types";

function TabsPreview() {
  return (
    <div className="w-full max-w-control">
      <Tabs defaultValue="overview" variant="segmented">
        <TabsList aria-label="Workspace sections">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p className="pt-4 text-body text-text-secondary">
            Workspace activity, open cycles, and the latest deployment health.
          </p>
        </TabsContent>
        <TabsContent value="billing">
          <p className="pt-4 text-body text-text-secondary">
            Manage seats, invoices, and the current plan.
          </p>
        </TabsContent>
        <TabsContent value="api-keys">
          <p className="pt-4 text-body text-text-secondary">
            Rotate keys and review the most recent API requests.
          </p>
        </TabsContent>
        <TabsContent value="logs">
          <p className="pt-4 text-body text-text-secondary">
            Stream runtime logs with structured filters.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TabsUnderlinePreview() {
  return (
    <div className="w-full max-w-control">
      <Tabs defaultValue="active-issues" variant="underline">
        <TabsList aria-label="Issue lists">
          <TabsTrigger value="active-issues">Active Issues</TabsTrigger>
          <TabsTrigger value="backlog">Backlog</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="active-issues">
          <p className="pt-4 text-body text-text-secondary">
            Active Issues · 12 open · 3 in review.
          </p>
        </TabsContent>
        <TabsContent value="backlog">
          <p className="pt-4 text-body text-text-secondary">Backlog · 38 queued items.</p>
        </TabsContent>
        <TabsContent value="archived">
          <p className="pt-4 text-body text-text-secondary">Archived · 214 completed items.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function AccordionPreview() {
  return (
    <div className="w-full max-w-control">
      <Accordion defaultValue={["security"]}>
        <AccordionItem value="security">
          <AccordionHeader>
            <AccordionTrigger>Authentication Security</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            Multi-factor authentication and hardware security keys are enforced for all workspace
            administrators.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="sso">
          <AccordionHeader>
            <AccordionTrigger>SAML & Single Sign-On</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            Configure a SAML identity provider and enforce single sign-on for every member.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function AccordionMultiplePreview() {
  return (
    <div className="w-full max-w-control">
      <Accordion multiple defaultValue={["workspace-security", "identity-provider"]}>
        <AccordionItem value="workspace-security">
          <AccordionHeader>
            <AccordionTrigger>Workspace Security</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            Multi-factor authentication and hardware security keys are enforced for all workspace
            administrators.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="identity-provider">
          <AccordionHeader>
            <AccordionTrigger>Identity Provider</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            Configure a SAML identity provider and enforce single sign-on for every member.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="retention">
          <AccordionHeader>
            <AccordionTrigger>Audit Retention</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            Audit logs are retained for 365 days and can be exported from workspace settings.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function AccordionDisabledPreview() {
  return (
    <div className="w-full max-w-control">
      <Accordion defaultValue={["disabled-security"]} disabled>
        <AccordionItem value="disabled-security">
          <AccordionHeader>
            <AccordionTrigger>Disabled Security Policy</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            Multi-factor authentication and hardware security keys are enforced for all workspace
            administrators.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="disabled-sso">
          <AccordionHeader>
            <AccordionTrigger>Disabled Identity Provider</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            Configure a SAML identity provider and enforce single sign-on for every member.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function CollapsiblePreview() {
  return (
    <div className="w-full max-w-control">
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Recovery keys</CollapsibleTrigger>
        <CollapsiblePanel>
          <div className="flex flex-col gap-2 font-mono">
            <span>alien-bean-pasta</span>
            <span>wild-irish-burrito</span>
            <span>horse-battery-staple</span>
          </div>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  );
}

function DividerPreview() {
  return (
    <div className="w-full max-w-control">
      <p className="m-0 text-body text-text-secondary">
        Workspace settings apply to every project and environment.
      </p>
      <Divider className="my-4" />
      <p className="m-0 text-body text-text-secondary">
        Changes are audited and can be reviewed by workspace administrators.
      </p>
    </div>
  );
}

function DividerVerticalPreview() {
  return (
    <div className="flex h-20 items-center gap-4 text-caption text-text-secondary">
      <span>Design</span>
      <Divider orientation="vertical" />
      <span>Engineering</span>
      <Divider orientation="vertical" />
      <span>Operations</span>
    </div>
  );
}

function ScrollAreaPreview() {
  return (
    <div className="w-full max-w-control">
      <ScrollArea className="h-44">
        <span># commit 94f8a12: fix auth flow</span>
        <span># commit 72c10b4: update dependencies</span>
        <span># commit 39e58d1: add squircle styling</span>
        <span># commit 12b40ef: resolve border issues</span>
        <span># commit 4b0e9a3: align focus rings</span>
        <span># commit 9fc21d7: tune spring easing</span>
        <span className="text-text-muted"># commit 01a92ce: initial release</span>
      </ScrollArea>
    </div>
  );
}

export const disclosureGroup: DocGroup = {
  id: "disclosure",
  label: "Navigation & disclosure",
  sections: [
    {
      id: "tabs",
      title: "Tabs",
      description:
        "Segmented capsules for switching views and underline tabs for in-page navigation, both on a 36px rhythm.",
      preview: <TabsPreview />,
      code: `
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="overview" variant="segmented">
  <TabsList aria-label="Workspace sections">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
    <TabsTrigger value="api-keys">API Keys</TabsTrigger>
    <TabsTrigger value="logs">Logs</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Workspace activity, open cycles, and the latest deployment health.
  </TabsContent>
</Tabs>
`,
      examples: [
        {
          id: "underline",
          title: "Underline",
          description: "A quieter in-page navigation treatment with a shared baseline.",
          preview: <TabsUnderlinePreview />,
          code: `
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="active-issues" variant="underline">
  <TabsList aria-label="Issue lists">
    <TabsTrigger value="active-issues">Active Issues</TabsTrigger>
    <TabsTrigger value="backlog">Backlog</TabsTrigger>
    <TabsTrigger value="archived">Archived</TabsTrigger>
  </TabsList>
  <TabsContent value="active-issues">
    Active Issues · 12 open · 3 in review.
  </TabsContent>
</Tabs>
`,
        },
      ],
    },
    {
      id: "accordion",
      title: "Accordion",
      description:
        "Expandable sections with an animated height transition and a chevron that turns from right to down.",
      preview: <AccordionPreview />,
      code: `
import {
  Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion defaultValue={["security"]}>
  <AccordionItem value="security">
    <AccordionHeader>
      <AccordionTrigger>Authentication Security</AccordionTrigger>
    </AccordionHeader>
    <AccordionPanel>
      Multi-factor authentication and hardware security keys are enforced.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem value="sso">
    <AccordionHeader>
      <AccordionTrigger>SAML & Single Sign-On</AccordionTrigger>
    </AccordionHeader>
    <AccordionPanel>Configure a SAML identity provider.</AccordionPanel>
  </AccordionItem>
</Accordion>
`,
      usage: `
import {
  Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion defaultValue={["security"]}>
  <AccordionItem value="security">
    <AccordionHeader>
      <AccordionTrigger>Authentication Security</AccordionTrigger>
    </AccordionHeader>
    <AccordionPanel>
      Hardware security keys are enforced for workspace administrators.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
`,
      examples: [
        {
          id: "multiple",
          title: "Multiple",
          description: "Keep more than one panel open at a time with the multiple prop.",
          preview: <AccordionMultiplePreview />,
          code: `
import {
  Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion multiple defaultValue={["workspace-security", "identity-provider"]}>
  <AccordionItem value="workspace-security">
    <AccordionHeader>
      <AccordionTrigger>Workspace Security</AccordionTrigger>
    </AccordionHeader>
    <AccordionPanel>Hardware security keys are enforced for administrators.</AccordionPanel>
  </AccordionItem>
  <AccordionItem value="identity-provider">
    <AccordionHeader>
      <AccordionTrigger>Identity Provider</AccordionTrigger>
    </AccordionHeader>
    <AccordionPanel>Configure a SAML identity provider for every member.</AccordionPanel>
  </AccordionItem>
</Accordion>
`,
        },
        {
          id: "disabled",
          title: "Disabled",
          description: "Disable the whole group while retaining the currently open panel.",
          preview: <AccordionDisabledPreview />,
          code: `
import {
  Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion defaultValue={["disabled-security"]} disabled>
  <AccordionItem value="disabled-security">
    <AccordionHeader>
      <AccordionTrigger>Disabled Security Policy</AccordionTrigger>
    </AccordionHeader>
    <AccordionPanel>Hardware security keys are enforced for administrators.</AccordionPanel>
  </AccordionItem>
</Accordion>
`,
        },
      ],
    },
    {
      id: "collapsible",
      title: "Collapsible",
      description:
        "A single disclosure container with the same 44px trigger geometry as Accordion.",
      preview: <CollapsiblePreview />,
      code: `
import {
  Collapsible, CollapsiblePanel, CollapsibleTrigger,
} from "@/components/ui/collapsible"

<Collapsible defaultOpen>
  <CollapsibleTrigger>Recovery keys</CollapsibleTrigger>
  <CollapsiblePanel>
    <div className="flex flex-col gap-2 font-mono">
      <span>alien-bean-pasta</span>
      <span>wild-irish-burrito</span>
    </div>
  </CollapsiblePanel>
</Collapsible>
`,
    },
    {
      id: "divider",
      title: "Divider",
      description: "A semantic one-pixel rule with a dedicated stronger color for both themes.",
      preview: <DividerPreview />,
      code: `
import { Divider } from "@/components/ui/divider"

<p>Workspace settings apply to every project and environment.</p>
<Divider className="my-4" />
<p>Changes are audited and can be reviewed by workspace administrators.</p>
`,
      examples: [
        {
          id: "vertical",
          title: "Vertical",
          description: "A vertical rule for separating inline groups.",
          preview: <DividerVerticalPreview />,
          code: `
import { Divider } from "@/components/ui/divider"

<div className="flex h-20 items-center gap-4">
  <span>Design</span>
  <Divider orientation="vertical" />
  <span>Engineering</span>
</div>
`,
        },
      ],
    },
    {
      id: "scroll-area",
      title: "Scroll Area",
      description:
        "A native scroll container with a bespoke 4px track and cobalt thumb, tuned for dense logs.",
      preview: <ScrollAreaPreview />,
      code: `
import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-44">
  <span># commit 94f8a12: fix auth flow</span>
  <span># commit 72c10b4: update dependencies</span>
  <span># commit 39e58d1: add squircle styling</span>
</ScrollArea>
`,
    },
  ],
};
