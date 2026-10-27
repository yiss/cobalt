import { BookOpen, Search } from "@keyline-icons/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogDescription,
  DialogDismiss,
  DialogPopup,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { searchRecords, type SearchRecord } from "@/docs/registry";
import { cn } from "@/lib/utils";

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const normalizedQuery = query.trim().toLowerCase();
  const results = React.useMemo(
    () =>
      normalizedQuery
        ? searchRecords.filter((record) =>
            `${record.title} ${record.description} ${record.label}`
              .toLowerCase()
              .includes(normalizedQuery),
          )
        : searchRecords,
    [normalizedQuery],
  );
  const groupedResults = React.useMemo(() => {
    const groups = new Map<string, { record: SearchRecord; index: number }[]>();

    results.forEach((record, index) => {
      const group = groups.get(record.label) ?? [];
      group.push({ record, index });
      groups.set(record.label, group);
    });

    return Array.from(groups, ([label, records]) => ({ label, records }));
  }, [results]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    document
      .getElementById(`docs-search-option-${activeIndex}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);

    if (!nextOpen) {
      setQuery("");
      setActiveIndex(0);
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }

  function closeSearch() {
    handleOpenChange(false);
  }

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        if (open) {
          closeSearch();
        } else {
          setOpen(true);
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function goTo(href: string) {
    closeSearch();
    void navigate(href);
  }

  function onSearchKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const result = results[activeIndex];

      if (result) {
        goTo(result.href);
      }
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        data-docs-search-trigger
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
        aria-keyshortcuts="Meta+K Control+K"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? "docs-search-dialog" : undefined}
      >
        <Search className="size-4 shrink-0" aria-hidden="true" />
        <span className="hidden min-w-0 flex-1 truncate text-left sm:block">
          Search documentation...
        </span>
        <span className="ml-auto hidden shrink-0 items-center gap-1.5 sm:flex" aria-hidden="true">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </span>
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogPopup id="docs-search-dialog" data-docs-search>
          <DialogTitle className="sr-only">Search documentation</DialogTitle>
          <DialogDescription className="sr-only">
            Find a component, foundation page, or setup step.
          </DialogDescription>

          <div data-docs-search-top>
            <Input
              autoFocus
              size="lg"
              type="search"
              role="combobox"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={onSearchKeyDown}
              placeholder="Search documentation..."
              aria-label="Search documentation"
              aria-controls="docs-search-results"
              aria-expanded
              aria-autocomplete="list"
              aria-activedescendant={
                results.length > 0 ? `docs-search-option-${activeIndex}` : undefined
              }
              startIcon={<Search className="size-4" aria-hidden="true" />}
            />
            <DialogDismiss />
          </div>

          <div
            id="docs-search-results"
            role="listbox"
            aria-label="Search results"
            data-docs-search-results
          >
            {results.length > 0 ? (
              <>
                {groupedResults.map((group, groupIndex) => (
                  <div
                    key={group.label}
                    role="group"
                    aria-labelledby={`docs-search-group-${groupIndex}`}
                  >
                    <div id={`docs-search-group-${groupIndex}`} data-docs-search-group>
                      {group.label}
                    </div>
                    {group.records.map(({ record, index }) => {
                      const active = index === activeIndex;

                      return (
                        <button
                          key={`${record.label}-${record.title}`}
                          id={`docs-search-option-${index}`}
                          type="button"
                          role="option"
                          aria-selected={active}
                          tabIndex={-1}
                          onMouseMove={() => setActiveIndex(index)}
                          onClick={() => goTo(record.href)}
                          className={cn(
                            "flex h-11 w-full items-center gap-3 rounded-xs px-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            active
                              ? "bg-surface-elevated text-text-primary"
                              : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
                          )}
                        >
                          <BookOpen className="size-4 shrink-0" aria-hidden="true" />
                          <span className="truncate text-label">{record.title}</span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </>
            ) : (
              <p className="m-0 px-3 py-10 text-center text-caption text-text-muted">
                No results for “{query.trim()}”.
              </p>
            )}
          </div>

          <div data-docs-search-footer>
            <span className="flex items-center gap-2 text-caption text-text-muted">
              <Kbd>↵</Kbd>
              Go to page
            </span>
            <span className="text-caption text-text-muted">↑↓ Navigate · Esc Close</span>
          </div>
        </DialogPopup>
      </Dialog>
    </>
  );
}
