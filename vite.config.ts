import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  fmt: {},
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "vite-plus/prefer-vite-plus-imports": "error",
      "shadcn/no-restyle": ["error", { allow: ["layout"] }],
      "shadcn/no-raw-colors": "error",
      "shadcn/no-arbitrary-values": "error",
      "shadcn/no-inline-styles": "error",
      "shadcn/no-unknown-classes": "error",
      "shadcn/require-static-classes": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    settings: {
      shadcn: {
        ui: "@/components/ui",
        note: "Use Cobalt tokens from src/index.css and component variants. See README.md for the design source.",
      },
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
      {
        name: "shadcn",
        specifier: "@shadcn/lint",
      },
    ],
    overrides: [
      {
        files: ["src/docs/**", "src/components/docs/**", "src/components/ui/**"],
        rules: {
          "react/only-export-components": "off",
        },
      },
    ],
  },
  build: {
    // The reference contains every component demo and its source example.
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: lazyPlugins(() => [react(), tailwindcss()]),
});
