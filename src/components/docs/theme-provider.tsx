import * as React from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "cobalt-theme";

function currentTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(currentTheme);

  const setTheme = React.useCallback((nextTheme: Theme) => {
    const root = document.documentElement;
    root.dataset.themeSwitching = "";

    root.classList.toggle("dark", nextTheme === "dark");
    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Persistence is a progressive enhancement.
    }

    // Commit the new colors while transitions are suppressed, then restore motion.
    void root.offsetHeight;
    window.requestAnimationFrame(() => {
      delete root.dataset.themeSwitching;
    });

    setThemeState(nextTheme);
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
