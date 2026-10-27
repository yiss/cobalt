import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Meter } from "@/components/ui/meter";
import { Progress } from "@/components/ui/progress";
import { toastManager } from "@/components/ui/toast";
import { DemoLabel, DemoRow, DemoStack } from "@/components/docs/examples";
import type { DocGroup } from "@/docs/types";

function ToastPreview() {
  return (
    <DemoStack>
      <div className="flex flex-col gap-3">
        <DemoLabel>Success notification</DemoLabel>
        <DemoRow>
          <Button
            variant="secondary"
            onClick={() =>
              toastManager.add({
                title: "Issue LIN-402 moved to Done",
                type: "success",
                timeout: 0,
                actionProps: {
                  children: "Undo",
                  onClick: () => toastManager.close(),
                },
              })
            }
          >
            Show toast
          </Button>
        </DemoRow>
        <p className="text-caption text-text-muted">
          Toasts enter from the bottom-right with a 280ms slide and a fade. A toast with an action
          stays until it is dismissed.
        </p>
      </div>
    </DemoStack>
  );
}

function BadgePreview() {
  return <Badge>COBALT_PRO</Badge>;
}

function ProgressPreview() {
  return (
    <div className="w-full max-w-control">
      <Progress
        value={74}
        label="Sprint Velocity"
        formatValue={(_formattedValue, value) => `${value ?? 0}%`}
      />
    </div>
  );
}

function MeterPreview() {
  return (
    <div className="w-full max-w-control">
      <Meter
        value={86}
        min={0}
        max={100}
        label="RAM Consumption"
        tone="warning"
        startLabel="0 GB"
        endLabel="64 GB"
        status="Near Capacity"
        formatValue={(_formattedValue, value) => `${value}%`}
      />
    </div>
  );
}

function AvatarPreview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>LN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-label text-text-primary">Linear Platform</span>
        <span className="text-caption text-text-muted">@linear</span>
      </div>
    </div>
  );
}

export const feedbackGroup: DocGroup = {
  id: "feedback",
  label: "Feedback & status",
  sections: [
    {
      id: "toast",
      title: "Toast",
      description:
        "Transient confirmation with a status dot and a single inline action, anchored bottom-right.",
      preview: <ToastPreview />,
      code: `
import { Button } from "@/components/ui/button"
import { toastManager } from "@/components/ui/toast"

<Button
  variant="secondary"
  onClick={() =>
    toastManager.add({
      title: "Issue LIN-402 moved to Done",
      type: "success",
      timeout: 0,
      actionProps: { children: "Undo", onClick: () => toastManager.close() },
    })
  }
>
  Show toast
</Button>
`,
    },
    {
      id: "badge",
      title: "Badge",
      description:
        "Compact status labels built from low-opacity semantic fills and a quiet 1px border.",
      preview: <BadgePreview />,
      code: `
import { Badge } from "@/components/ui/badge"

<Badge>COBALT_PRO</Badge>
`,
      examples: [
        {
          id: "success",
          title: "Success",
          preview: <Badge variant="success">In Progress</Badge>,
          code: `
import { Badge } from "@/components/ui/badge"

<Badge variant="success">In Progress</Badge>
`,
        },
        {
          id: "warning",
          title: "Warning",
          preview: <Badge variant="warning">Review Needed</Badge>,
          code: `
import { Badge } from "@/components/ui/badge"

<Badge variant="warning">Review Needed</Badge>
`,
        },
        {
          id: "destructive",
          title: "Destructive",
          preview: <Badge variant="destructive">Critical</Badge>,
          code: `
import { Badge } from "@/components/ui/badge"

<Badge variant="destructive">Critical</Badge>
`,
        },
        {
          id: "info",
          title: "Info",
          preview: <Badge variant="info">Info</Badge>,
          code: `
import { Badge } from "@/components/ui/badge"

<Badge variant="info">Info</Badge>
`,
        },
        {
          id: "neutral",
          title: "Neutral",
          preview: <Badge variant="neutral">Draft</Badge>,
          code: `
import { Badge } from "@/components/ui/badge"

<Badge variant="neutral">Draft</Badge>
`,
        },
      ],
    },
    {
      id: "progress",
      title: "Progress",
      description:
        "A determinate 6px progress track with a flat cobalt indicator and a responsive width transition.",
      preview: <ProgressPreview />,
      code: `
import { Progress } from "@/components/ui/progress"

<Progress
  value={74}
  label="Sprint Velocity"
  formatValue={(_formattedValue, value) => value + "%"}
/>
`,
    },
    {
      id: "meter",
      title: "Meter",
      description:
        "A bounded measurement with min/max labels and a semantic tone for capacity or quality thresholds.",
      preview: <MeterPreview />,
      code: `
import { Meter } from "@/components/ui/meter"

<Meter
  value={86}
  min={0}
  max={100}
  label="RAM Consumption"
  tone="warning"
  startLabel="0 GB"
  endLabel="64 GB"
  status="Near Capacity"
  formatValue={(_formattedValue, value) => value + "%"}
/>
`,
    },
    {
      id: "avatar",
      title: "Avatar",
      description:
        "A 40px squircle identity mark with a brand fallback. Images fade into the same geometry.",
      preview: <AvatarPreview />,
      code: `
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="/avatars/linear.png" alt="Linear Platform" />
  <AvatarFallback>LN</AvatarFallback>
</Avatar>
`,
    },
  ],
};
