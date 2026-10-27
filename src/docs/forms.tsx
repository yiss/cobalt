import { Search } from "@keyline-icons/react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NumberField } from "@/components/ui/number-field";
import { OTPField } from "@/components/ui/otp-field";
import { Radio, RadioGroup } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { DemoLabel, DemoStack } from "@/components/docs/examples";
import { cn } from "@/lib/utils";
import type { DocGroup } from "@/docs/types";

const labelClass = "flex cursor-default flex-col gap-1.5";
const labelTextClass = "text-label text-text-secondary";

function InputPreview() {
  return (
    <div className="flex w-full max-w-control flex-col gap-1.5">
      <label className={labelClass} htmlFor="project-name">
        <span className={labelTextClass}>Project name</span>
        <Input id="project-name" placeholder="Enter project name..." />
      </label>
      <span className="text-micro text-text-muted">
        Identifiers use lowercase letters, numbers, and hyphens.
      </span>
    </div>
  );
}

function LabelPreview() {
  return (
    <DemoStack>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="workspace-name">Workspace name</Label>
        <Input id="workspace-name" placeholder="Acme Systems" />
      </div>
    </DemoStack>
  );
}

function TextareaPreview() {
  return (
    <DemoStack>
      <label className={labelClass} htmlFor="notes">
        <span className={labelTextClass}>Notes (Optional)</span>
        <Textarea id="notes" placeholder="Add internal routing instructions..." />
      </label>
    </DemoStack>
  );
}

function FieldPreview() {
  return (
    <DemoStack>
      <Field name="endpoint">
        <FieldLabel>Cluster Endpoint Host</FieldLabel>
        <FieldControl defaultValue="db.us-east.aws.acme.internal" autoComplete="off" />
        <FieldDescription>
          Use the private hostname. Failover replicas are resolved automatically.
        </FieldDescription>
      </Field>
    </DemoStack>
  );
}

function FieldsetPreview() {
  return (
    <div className="w-full max-w-dialog">
      <Fieldset>
        <FieldsetLegend>
          <span className="block">PostgreSQL Cluster Configuration</span>
          <span className="mt-0.5 block text-caption text-text-muted">
            Connection strings and failover replicas
          </span>
        </FieldsetLegend>
        <div className="flex flex-col gap-4">
          <Field name="cluster-host">
            <FieldLabel>Cluster Endpoint Host</FieldLabel>
            <FieldControl defaultValue="db.us-east.aws.acme.internal" />
          </Field>
          <Field name="port">
            <FieldLabel>Port</FieldLabel>
            <FieldControl defaultValue="5432" inputMode="numeric" />
          </Field>
        </div>
      </Fieldset>
    </div>
  );
}

function FormPreview() {
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="w-full max-w-dialog">
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setSaved(true);
        }}
      >
        <Field name="organization">
          <FieldLabel>Organization Name</FieldLabel>
          <FieldControl defaultValue="Acme Systems Inc." autoComplete="organization" />
        </Field>
        <Field name="email">
          <FieldLabel>Billing Contact Email</FieldLabel>
          <FieldControl
            type="email"
            defaultValue="finance@acme.com"
            required
            autoComplete="email"
          />
          <FieldError match="valueMissing">Enter a billing contact email.</FieldError>
        </Field>
        <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" size="md">
            Cancel
          </Button>
          <Button type="submit" size="md">
            Save Changes
          </Button>
        </div>
        {saved ? (
          <p className="text-micro text-success-foreground" role="status">
            Settings saved.
          </p>
        ) : null}
      </Form>
    </div>
  );
}

function CheckboxPreview() {
  return (
    <label className="flex items-center gap-2.5 text-label text-text-primary">
      <Checkbox /> Unchecked
    </label>
  );
}

function RadioPreview() {
  return (
    <DemoStack>
      <div className="flex flex-col gap-4">
        <DemoLabel>Digest frequency</DemoLabel>
        <RadioGroup defaultValue="weekly" aria-label="Digest frequency">
          <label className="flex items-center gap-2.5 text-label text-text-primary">
            <Radio value="daily" /> Daily digests
          </label>
          <label className="flex items-center gap-2.5 text-label text-text-primary">
            <Radio value="weekly" /> Weekly summary
          </label>
          <label className="flex items-center gap-2.5 text-label text-text-muted">
            <Radio value="realtime" disabled /> Realtime webhooks (Enterprise)
          </label>
        </RadioGroup>
      </div>
    </DemoStack>
  );
}

function RadioSelectionCardsPreview() {
  const [plan, setPlan] = React.useState("team");

  return (
    <DemoStack>
      <RadioGroup value={plan} onValueChange={(value) => setPlan(value)} aria-label="Plan">
        <label
          className={cn(
            "flex h-14 w-full items-center justify-between gap-4 rounded-sm border px-4 transition-colors",
            plan === "team" ? "border-brand bg-surface-card" : "border-border bg-canvas",
          )}
        >
          <span className="flex min-w-0 items-center gap-3">
            <Radio value="team" />
            <span className="flex min-w-0 flex-col">
              <span className="text-label text-text-primary">Team Plan</span>
              <span className="text-micro text-text-muted">Up to 20 members</span>
            </span>
          </span>
          <span className="flex shrink-0 items-baseline gap-0.5 text-label text-text-primary">
            $30
            <span className="text-micro text-text-muted">/mo</span>
          </span>
        </label>

        <label
          className={cn(
            "flex h-14 w-full items-center justify-between gap-4 rounded-sm border px-4 transition-colors",
            plan === "starter" ? "border-brand bg-surface-card" : "border-border bg-canvas",
          )}
        >
          <span className="flex min-w-0 items-center gap-3">
            <Radio value="starter" />
            <span className="flex min-w-0 flex-col">
              <span className="text-label text-text-primary">Starter Plan</span>
              <span className="text-micro text-text-muted">Single developer</span>
            </span>
          </span>
          <span className="shrink-0 text-label text-text-primary">Free</span>
        </label>
      </RadioGroup>
    </DemoStack>
  );
}

function SwitchPreview() {
  return (
    <label className="flex h-11 w-full max-w-control items-center justify-between rounded-md bg-canvas px-3.5 text-label text-text-primary">
      Developer logs
      <Switch aria-label="Developer logs" />
    </label>
  );
}

function SliderPreview() {
  return (
    <div className="w-full max-w-control">
      <Slider
        label="Storage Quota"
        defaultValue={65}
        startLabel="0 GB"
        endLabel="100 GB"
        formatValue={(_formattedValues, values) => `${values[0]}%`}
      />
    </div>
  );
}

function NumberFieldPreview() {
  return (
    <div className="flex w-full max-w-control flex-col gap-2">
      <label id="number-field-amount-label" className="text-label text-text-secondary">
        Amount
      </label>
      <NumberField
        defaultValue={101}
        min={0}
        max={999}
        decrementLabel="Decrease amount"
        incrementLabel="Increase amount"
        inputProps={{ "aria-labelledby": "number-field-amount-label" }}
      />
    </div>
  );
}

function OTPFieldPreview() {
  return (
    <DemoStack>
      <OTPField label="Verification code" defaultValue="4821" />
    </DemoStack>
  );
}

export const formsGroup: DocGroup = {
  id: "forms",
  label: "Forms & inputs",
  sections: [
    {
      id: "input",
      title: "Input",
      description:
        "Single-line entry with a 10px squircle radius, a visible outer focus ring, and explicit hover, error, and disabled states.",
      preview: <InputPreview />,
      code: `
import { Input } from "@/components/ui/input"

<label className="flex flex-col gap-1.5">
  <span className="text-caption text-text-secondary">Project name</span>
  <Input placeholder="Enter project name..." />
</label>
`,
      examples: [
        {
          id: "small",
          title: "Small",
          description: "32px control for compact forms and filters.",
          preview: (
            <div className="w-full max-w-control">
              <label className={labelClass} htmlFor="input-example-sm">
                <span className={labelTextClass}>Small · 32px</span>
                <Input id="input-example-sm" size="sm" placeholder="Filter items..." />
              </label>
            </div>
          ),
          code: `
import { Input } from "@/components/ui/input"

<Input size="sm" placeholder="Filter items..." />
`,
        },
        {
          id: "large",
          title: "Large",
          description: "40px control for prominent search and onboarding fields.",
          preview: (
            <div className="w-full max-w-control">
              <label className={labelClass} htmlFor="input-example-lg">
                <span className={labelTextClass}>Large · 40px</span>
                <Input id="input-example-lg" size="lg" placeholder="Large search field" />
              </label>
            </div>
          ),
          code: `
import { Input } from "@/components/ui/input"

<Input size="lg" placeholder="Large search field" />
`,
        },
        {
          id: "error",
          title: "Error",
          description:
            "Invalid inputs keep the destructive border, label, message, and focus ring.",
          preview: (
            <div className="w-full max-w-control">
              <label className={labelClass} htmlFor="input-example-error">
                <span className="text-caption text-destructive-text">Error</span>
                <Input
                  id="input-example-error"
                  aria-invalid="true"
                  aria-describedby="input-example-error-message"
                  defaultValue="invalid name with spaces"
                />
                <span id="input-example-error-message" className="text-micro text-destructive-text">
                  Identifiers must contain only lowercase alphanumeric characters.
                </span>
              </label>
            </div>
          ),
          code: `
import { Input } from "@/components/ui/input"

<Input aria-invalid="true" defaultValue="invalid name with spaces" />
`,
        },
        {
          id: "with-icon",
          title: "With icon",
          description: "A leading Keyline icon gives search fields a recognizable affordance.",
          preview: (
            <div className="w-full max-w-control">
              <Input
                startIcon={<Search className="size-4" />}
                placeholder="Search projects..."
                aria-label="Search projects"
              />
            </div>
          ),
          code: `
import { Search } from "@keyline-icons/react"
import { Input } from "@/components/ui/input"

<Input
  startIcon={<Search className="size-4" />}
  placeholder="Search projects..."
  aria-label="Search projects"
/>
`,
        },
        {
          id: "disabled",
          title: "Disabled",
          description: "Muted surface and text for a value managed elsewhere.",
          preview: (
            <div className="w-full max-w-control">
              <label className={labelClass} htmlFor="input-example-disabled">
                <span className={labelTextClass}>Disabled</span>
                <Input id="input-example-disabled" defaultValue="system-managed-token" disabled />
              </label>
            </div>
          ),
          code: `
import { Input } from "@/components/ui/input"

<Input disabled defaultValue="system-managed-token" />
`,
        },
      ],
    },
    {
      id: "label",
      title: "Label",
      description:
        "The native label primitive for simple form controls that do not need the full Field composition.",
      preview: <LabelPreview />,
      code: `
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<Label htmlFor="workspace-name">Workspace name</Label>
<Input id="workspace-name" placeholder="Acme Systems" />
`,
    },
    {
      id: "textarea",
      title: "Textarea",
      description:
        "Multi-line entry that shares the Input surface, border, and focus treatment at a 72px default height.",
      preview: <TextareaPreview />,
      code: `
import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Add internal routing instructions..." />
`,
    },
    {
      id: "field",
      title: "Field",
      description:
        "Connects a label, description, control, and validation error into one accessible field.",
      preview: <FieldPreview />,
      code: `
import {
  Field, FieldControl, FieldDescription, FieldLabel,
} from "@/components/ui/field"

<Field name="endpoint">
  <FieldLabel>Cluster Endpoint Host</FieldLabel>
  <FieldControl defaultValue="db.us-east.aws.acme.internal" />
  <FieldDescription>
    Use the private hostname. Failover replicas are resolved automatically.
  </FieldDescription>
</Field>
`,
    },
    {
      id: "fieldset",
      title: "Fieldset",
      description:
        "Groups related fields behind one accessible legend while preserving the Cobalt card rhythm.",
      preview: <FieldsetPreview />,
      code: `
import {
  Field, FieldControl, FieldLabel,
} from "@/components/ui/field"
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset"

<Fieldset>
  <FieldsetLegend>
    <span className="block">PostgreSQL Cluster Configuration</span>
    <span className="mt-0.5 block text-caption text-text-muted">
      Connection strings and failover replicas
    </span>
  </FieldsetLegend>
  <Field name="cluster-host">
    <FieldLabel>Cluster Endpoint Host</FieldLabel>
    <FieldControl defaultValue="db.us-east.aws.acme.internal" />
  </Field>
</Fieldset>
`,
    },
    {
      id: "form",
      title: "Form",
      description:
        "Native form submission with consolidated validation errors and explicit button types.",
      preview: <FormPreview />,
      code: `
import { Button } from "@/components/ui/button"
import {
  Field, FieldControl, FieldError, FieldLabel,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"

<Form onSubmit={(event) => event.preventDefault()}>
  <Field name="email">
    <FieldLabel>Billing Contact Email</FieldLabel>
    <FieldControl type="email" required autoComplete="email" />
    <FieldError match="valueMissing">Enter a billing contact email.</FieldError>
  </Field>
  <Button type="submit">Save Changes</Button>
</Form>
`,
    },
    {
      id: "checkbox",
      title: "Checkbox",
      description:
        "Pixel-accurate 16px boxes with a centered check stroke and a 2px indeterminate mark.",
      preview: <CheckboxPreview />,
      code: `
import { Checkbox } from "@/components/ui/checkbox"

<label className="flex items-center gap-2.5 text-label">
  <Checkbox /> Unchecked
</label>
`,
      examples: [
        {
          id: "checked",
          title: "Checked",
          preview: (
            <label className="flex items-center gap-2.5 text-label text-text-primary">
              <Checkbox defaultChecked /> Checked
            </label>
          ),
          code: `
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox defaultChecked />
`,
        },
        {
          id: "indeterminate",
          title: "Indeterminate",
          preview: (
            <label className="flex items-center gap-2.5 text-label text-text-primary">
              <Checkbox indeterminate /> Indeterminate
            </label>
          ),
          code: `
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox indeterminate />
`,
        },
        {
          id: "disabled",
          title: "Disabled",
          preview: (
            <label className="flex items-center gap-2.5 text-label text-text-muted">
              <Checkbox disabled /> Disabled
            </label>
          ),
          code: `
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox disabled />
`,
        },
      ],
    },
    {
      id: "radio-group",
      title: "Radio Group",
      description:
        "Shared single-selection state with a 6px centered indicator and uniform 16px geometry.",
      preview: <RadioPreview />,
      code: `
import { Radio, RadioGroup } from "@/components/ui/radio-group"

<RadioGroup defaultValue="weekly" aria-label="Digest frequency">
  <label className="flex items-center gap-2.5 text-label">
    <Radio value="daily" /> Daily digests
  </label>
  <label className="flex items-center gap-2.5 text-label">
    <Radio value="weekly" /> Weekly summary
  </label>
</RadioGroup>
`,
      examples: [
        {
          id: "selection-cards",
          title: "Selection cards",
          description: "A larger, fully clickable radio target for plan and pricing choices.",
          preview: <RadioSelectionCardsPreview />,
          code: `
import { useState } from "react"
import { Radio, RadioGroup } from "@/components/ui/radio-group"

export function PlanPicker() {
  const [plan, setPlan] = useState("team")

  return (
    <RadioGroup value={plan} onValueChange={setPlan} aria-label="Plan">
      <label className="flex h-14 items-center justify-between rounded-sm border px-4">
        <span className="flex items-center gap-3">
          <Radio value="team" /> Team Plan
        </span>
        <span>$30/mo</span>
      </label>
      <label className="flex h-14 items-center justify-between rounded-sm border px-4">
        <span className="flex items-center gap-3">
          <Radio value="starter" /> Starter Plan
        </span>
        <span>Free</span>
      </label>
    </RadioGroup>
  )
}
`,
        },
      ],
    },
    {
      id: "switch",
      title: "Switch",
      description: "A 34 × 18px squircle track with a 1.5px border and a solid white 14px knob.",
      preview: <SwitchPreview />,
      code: `
import { Switch } from "@/components/ui/switch"

<label className="flex h-11 items-center justify-between rounded-md bg-canvas px-3.5">
  Developer logs
  <Switch aria-label="Developer logs" />
</label>
`,
      examples: [
        {
          id: "checked",
          title: "Checked",
          preview: (
            <label className="flex h-11 w-full max-w-control items-center justify-between rounded-md bg-canvas px-3.5 text-label text-text-primary">
              Two-factor auth
              <Switch defaultChecked aria-label="Two-factor auth" />
            </label>
          ),
          code: `
import { Switch } from "@/components/ui/switch"

<label className="flex h-11 items-center justify-between rounded-md bg-canvas px-3.5">
  Two-factor auth
  <Switch defaultChecked aria-label="Two-factor auth" />
</label>
`,
        },
        {
          id: "disabled",
          title: "Disabled",
          preview: (
            <label className="flex h-11 w-full max-w-control items-center justify-between rounded-md bg-canvas px-3.5 text-label text-text-muted opacity-50">
              Audit trail
              <Switch disabled aria-label="Audit trail" />
            </label>
          ),
          code: `
import { Switch } from "@/components/ui/switch"

<Switch disabled aria-label="Audit trail" />
`,
        },
      ],
    },
    {
      id: "slider",
      title: "Slider",
      description:
        "A 5px track with matched indicator, 16px squircle knobs, and range thumb support.",
      preview: <SliderPreview />,
      code: `
import { Slider } from "@/components/ui/slider"

<Slider
  label="Storage Quota"
  defaultValue={65}
  startLabel="0 GB"
  endLabel="100 GB"
  formatValue={(_formattedValues, values) => values[0] + "%"}
/>
`,
      examples: [
        {
          id: "range",
          title: "Range",
          description: "Two thumbs share the same track and constrain a value range.",
          preview: (
            <div className="w-full max-w-control">
              <Slider
                label="Budget Filter"
                defaultValue={[150, 600]}
                min={0}
                max={1000}
                step={10}
                startLabel="$0"
                endLabel="$1,000"
                formatValue={(_formattedValues, values) => `$${values[0]} – $${values[1]}`}
              />
            </div>
          ),
          code: `
import { Slider } from "@/components/ui/slider"

<Slider
  label="Budget Filter"
  defaultValue={[150, 600]}
  min={0}
  max={1000}
  step={10}
  startLabel="$0"
  endLabel="$1,000"
/>
`,
        },
      ],
    },
    {
      id: "number-field",
      title: "Number Field",
      description:
        "A compact 36px numeric stepper with 24px controls and tabular digits. Label it from the outside with a native label.",
      preview: <NumberFieldPreview />,
      code: `
import { NumberField } from "@/components/ui/number-field"

<label id="amount-label" className="text-label text-text-secondary">
  Amount
</label>
<NumberField
  defaultValue={101}
  min={0}
  max={999}
  inputProps={{ "aria-labelledby": "amount-label" }}
  decrementLabel="Decrease amount"
  incrementLabel="Increase amount"
/>
`,
    },
    {
      id: "otp-field",
      title: "OTP Field",
      description:
        "Six 44 × 48px verification cells with auto-advance, paste handling, and a soft cobalt focus ring.",
      preview: <OTPFieldPreview />,
      code: `
import { OTPField } from "@/components/ui/otp-field"

<OTPField label="Verification code" defaultValue="4821" />
`,
    },
  ],
};
