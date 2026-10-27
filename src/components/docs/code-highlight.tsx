import { Highlight, Prism, type PrismTheme } from "prism-react-renderer";

import { cn } from "@/lib/utils";

export type CodeLanguage = "tsx" | "json" | "bash" | "css";

// prism-react-renderer ships with TSX, JSON, and CSS. Terminal examples only need
// a light shell grammar, so keep it local instead of pulling in all of Prism.
if (!Prism.languages.bash) {
  Prism.languages.bash = {
    comment: /(^|\s)#.*/,
    string: {
      pattern: /"(?:\\[\s\S]|[^\\"])*"|'[^']*'/,
      greedy: true,
    },
    variable: /\$\w+|\$\{[^}]+\}/,
    function: /(^|\s)(?:pnpm|npm|npx|git|cd|mkdir|rm|cp|mv|ls|cat|echo)(?=\s|$)/,
    operator: /\|\||&&|[|&;]/,
    punctuation: /[()[\]{}]/,
  };
}

const cobaltTheme: PrismTheme = {
  plain: {
    color: "var(--code-fg)",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "var(--syntax-comment)" },
    },
    {
      types: ["punctuation"],
      style: { color: "var(--syntax-punctuation)" },
    },
    {
      types: ["tag", "deleted", "symbol"],
      style: { color: "var(--syntax-tag)" },
    },
    {
      types: ["attr-name", "property", "constant", "parameter"],
      style: { color: "var(--syntax-property)" },
    },
    {
      types: ["boolean", "number"],
      style: { color: "var(--syntax-number)" },
    },
    {
      types: ["selector", "attr-value", "string", "char", "builtin", "inserted"],
      style: { color: "var(--syntax-string)" },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: "var(--syntax-operator)" },
    },
    {
      types: ["atrule", "keyword"],
      style: { color: "var(--syntax-keyword)" },
    },
    {
      types: ["function", "class-name", "maybe-class-name"],
      style: { color: "var(--syntax-function)" },
    },
    {
      types: ["regex", "important", "variable"],
      style: { color: "var(--syntax-variable)" },
    },
    {
      types: ["bold"],
      style: { fontWeight: "700" },
    },
    {
      types: ["italic"],
      style: { fontStyle: "italic" },
    },
  ],
};

export function CodeHighlight({
  code,
  language,
  className,
}: {
  code: string;
  language: CodeLanguage;
  className?: string;
}) {
  return (
    <Highlight theme={cobaltTheme} code={code.trim()} language={language}>
      {({ tokens, getTokenProps, style, className: prismClassName }) => (
        <pre
          tabIndex={0}
          aria-label="Code example"
          className={cn(
            "m-0 overflow-x-auto whitespace-pre p-4 font-mono text-caption leading-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            prismClassName,
            className,
          )}
          style={style}
        >
          <code>
            {tokens.map((line, lineIndex) => (
              <span key={lineIndex} className="block min-h-6">
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} {...getTokenProps({ token })} />
                ))}
              </span>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
