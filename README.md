# Cobalt

Cobalt is a Base UI design system and documentation site, rebuilt from the
[`CobaltDS.fig`](./CobaltDS.fig) source design. It pairs accessible primitives with a precise,
low-contrast visual language: 40 source-distributed components, a routed component reference,
light and dark themes, and self-hosted typography.

**Live documentation:** <https://cobalt-design-system.yiss.workers.dev>

The docs are the working specification. Every component has a live preview, source example,
installation and usage guidance, an API table, accessibility notes, and focused state examples.
The design decisions live in one stylesheet so the library and its documentation stay aligned.

## Requirements

- Node.js 22.12 or newer
- pnpm 10.22
- A modern browser

## Quick start

```bash
git clone https://github.com/yiss/cobalt.git
cd cobalt
pnpm install
pnpm dev
```

Vite prints the local docs URL, normally <http://127.0.0.1:5173>.

## Scripts

| Command        | Description                                     |
| -------------- | ----------------------------------------------- |
| `pnpm dev`     | Start the documentation app                     |
| `pnpm build`   | Type-check and create a production build        |
| `pnpm preview` | Preview the production build locally            |
| `pnpm deploy`  | Build and deploy the docs to Cloudflare         |
| `pnpm lint`    | Run Oxlint, the React rules, and `@shadcn/lint` |
| `pnpm format`  | Format with Oxfmt                               |
| `pnpm check`   | Run formatting, linting, and type checks        |

## Stack

- React 19 and TypeScript
- Vite Plus and React Router 7
- Base UI 1.9 primitives
- Tailwind CSS v4 with a CSS-first theme
- [`cn`](https://github.com/shadcn-ui/cn) for class joining and conflict resolution
- `class-variance-authority` for variants
- Keyline Icons for public iconography
- Timeless Sans and Commit Mono, self-hosted
- Prism React Renderer for syntax-highlighted code examples
- Cloudflare Workers Static Assets, deployed with [`cf`](https://developers.cloudflare.com/cf/)

## Docs routes

| Route                      | Page                                           |
| -------------------------- | ---------------------------------------------- |
| `/`                        | Introduction                                   |
| `/docs/installation`       | Installation, fonts, and the shadcn CLI guide  |
| `/foundations`             | Color, type, shape, and motion                 |
| `/components`              | Component index                                |
| `/components/:componentId` | Component preview, source, API, and a11y notes |

The header includes `⌘K` documentation search with grouped results, keyboard navigation, and a
command-palette layout. On smaller screens the sidebar becomes a drawer and the table of contents
is hidden. The app uses `BrowserRouter`, so static hosts must rewrite unknown paths to
`index.html`.

## Deployment

The docs are deployed to Cloudflare Workers Static Assets at
<https://cobalt-design-system.yiss.workers.dev>. `cloudflare.config.ts` enables Workers
observability and SPA fallback for the client-side router.

```bash
pnpm deploy
```

That command type-checks, builds the Cloudflare output with the Vite plugin, and uploads it with
`cf deploy --prebuilt --mode production`. The Worker name is `cobalt-design-system`. `cf` is in
beta; authenticate once with `cf auth login` or provide `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` in CI.

## Components

| Group                   | Components                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| Actions & command       | Button, Toggle, Toggle Group, Toolbar, Menubar, Navigation Menu                                               |
| Forms & inputs          | Input, Label, Textarea, Field, Fieldset, Form, Checkbox, Radio Group, Switch, Slider, Number Field, OTP Field |
| Selection               | Select, Combobox, Autocomplete                                                                                |
| Overlays                | Dialog, Alert Dialog, Drawer, Popover, Tooltip, Preview Card, Menu, Context Menu                              |
| Navigation & disclosure | Tabs, Accordion, Collapsible, Divider, Scroll Area                                                            |
| Feedback & status       | Toast, Badge, Progress, Meter, Avatar                                                                         |
| Utilities               | Kbd                                                                                                           |

Supporting parts include `FieldControl`, `MenuShortcut`, and the global `TooltipProvider` and
`ToastProvider`.

## Using the shadcn CLI

Cobalt follows the shadcn project contract: `components.json`, `@/components/ui`,
`@/lib/utils`, CVA, and `cn`. In a new project, initialize that structure with the CLI. In an
existing shadcn project, migrate the class helper directly:

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest migrate cn
```

Cobalt’s components are source-distributed. After initialization, copy components from
`src/components/ui` into your app’s `components/ui` directory. There is no published Cobalt
registry; use `pnpm dlx shadcn@latest add <registry>/<item>` for custom registries you own.

The class helper is the shadcn `cn` engine, which replaces `clsx` and `tailwind-merge` with the
same call signature. Keep the stable import path used across the library:

```ts
// src/lib/utils.ts
export { cn } from "cn";
```

## Design language

### Color

| Token          | Dark      | Light     |
| -------------- | --------- | --------- |
| Canvas         | `#1C1B19` | `#FFFFFF` |
| Surface base   | `#252422` | `#F7F6F3` |
| Surface card   | `#2E2D2A` | `#FFFFFF` |
| Border subtle  | `#3A3834` | `#ECE9E4` |
| Text primary   | `#F6F5F2` | `#191816` |
| Text secondary | `#C0BCB4` | `#56524B` |
| Text muted     | `#A6A198` | `#6F6A61` |
| Code surface   | `#1B1A18` | `#F1EFEA` |

Two cobalt roles drive the interface:

- **Brand** `#232ED1` — identity, selection, progress, badges, and active menu rows.
- **Action** `#2F3CFA` — primary buttons, switches, sliders, and focused controls.

Success is `#10B981`, warning `#F59E0B`, solid destructive is `#DC2626`, and info is `#0EA5E9`.

Control, selection, and state borders default to **2px**; the Switch is the single 1.5px exception.
Floating surfaces use restrained overlay shadows instead of borders. Primary and destructive
buttons retain the exact material treatment from the source design: a 1px tinted drop and a 1px
inset top highlight.

### Type

Timeless Sans carries interface text at `Display 32/40`, `Heading 1 24/32`, `Heading 2 18/26`,
`Title 15/22`, `Body 14/20`, `Label 14/20`, `Caption 13/18`, and `Micro 12/16`. Commit Mono
carries code, shortcuts, and numeric labels. Both families are self-hosted; see
[`src/assets/fonts`](./src/assets/fonts) for the font files and licenses.

### Shape and motion

Radii are `4 / 6 / 8 / 10 / 12 / 14 / 18px`. Where supported, controls and surfaces use
`corner-shape: squircle` for the source design’s 0.6 corner smoothing.

Motion is short and functional:

- Press feedback scales to `0.97` over 150ms.
- Hover and focus color changes take 140–160ms with `cubic-bezier(0.23, 1, 0.32, 1)`.
- Menus, popovers, and tooltips enter with opacity and a small scale; exits are faster.
- Dialog and drawer motion is 140–320ms depending on the surface.
- `prefers-reduced-motion: reduce` collapses all motion to an effective instant state.

Every state change also has a static cue: color, border, label, icon, or position.

## Project structure

```text
CobaltDS.fig                 Original source design
cloudflare.config.ts         Workers name, observability, and SPA fallback
src/components/ui/           Base UI wrappers and component styles
src/components/docs/         Documentation shell, search, previews, code surfaces
src/pages/                   Routed documentation pages
src/docs/                    Examples, usage snippets, API metadata, registry
src/assets/fonts/            Self-hosted Timeless Sans and Commit Mono files
src/index.css                Theme tokens, component states, motion, docs styles
components.json              shadcn-compatible aliases and theme location
vite.config.ts               Vite Plus, Cloudflare, Tailwind, lint, and alias configuration
```

## Conventions

- Components live in `src/components/ui` and import through `@/`.
- Public components are styled wrappers, not raw Base UI parts. They expose `data-slot` attributes
  for styling and tests.
- Use Base UI composition instead of Radix-style `asChild`:

  ```tsx
  <DialogTrigger render={<Button variant="secondary" />}>Open</DialogTrigger>
  <DialogClose render={<Button>Save</Button>} />
  ```

- Component visuals belong in variants and `src/index.css`, not in docs call sites.
- Use semantic Cobalt tokens. Raw colors, arbitrary values, and inline styles are rejected by the
  linter.
- `cn` handles conditional classes and Tailwind conflict resolution.

## Accessibility

- Base UI supplies focus trapping, roving focus, Escape handling, and focus restoration.
- Cobalt adds visible `:focus-visible` treatments, a skip link, and route-level document titles.
- Each docs page has one `<h1>`, one `<main>` landmark, and scroll-margin anchors below the header.
- Inputs have labels or explicit accessible names; errors are linked with `aria-describedby` and
  receive focus on submit.
- Toasts with actions remain available until dismissed.
- Reduced motion and increased contrast preferences are respected without changing layout.

## Development guardrails

The Vite Plus lint configuration enables `@shadcn/lint` rules for component-owned styling:

- `shadcn/no-restyle` keeps component visuals in variants.
- `shadcn/no-raw-colors`, `shadcn/no-arbitrary-values`, `shadcn/no-inline-styles`,
  `shadcn/no-unknown-classes`, and `shadcn/require-static-classes` keep the implementation on the
  Cobalt token system.

Component state styles live in `src/index.css`; the linter currently reports zero errors and zero
warnings. `pnpm check` is the single pre-commit gate for formatting, linting, and types.

## Icons

[Keyline Icons](https://keylineicons.com) provides the public icon vocabulary for search, close,
copy, navigation, and documentation examples. The small control glyphs inherited from the design
source—check, chevron-down, and chevron-right—remain traced in `src/components/ui/icons.tsx` on a
10 × 10 grid. The number-field steppers use typographic minus and plus marks.

## Source design

[`CobaltDS.fig`](./CobaltDS.fig) is the original Figma-compatible design source. Component
behavior, spacing, type, color, and motion in this repository are derived from that file.
