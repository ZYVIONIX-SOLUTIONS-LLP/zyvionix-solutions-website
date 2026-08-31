"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type Theme = "light" | "dark" | "system"
type ResolvedTheme = Exclude<Theme, "system">

type ThemeProviderProps = {
  children: ReactNode
  attribute?: "class" | `data-${string}`
  defaultTheme?: Theme
  enableSystem?: boolean
  storageKey?: string
}

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme(attribute: ThemeProviderProps["attribute"], theme: ResolvedTheme) {
  const root = document.documentElement

  if (attribute === "class") {
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  } else {
    root.setAttribute(attribute ?? "data-theme", theme)
  }

  root.style.colorScheme = theme
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const syncTheme = (nextTheme: Theme) => {
      const nextResolvedTheme =
        nextTheme === "system" && enableSystem ? getSystemTheme() : nextTheme === "dark" ? "dark" : "light"

      setThemeState(nextTheme)
      setResolvedTheme(nextResolvedTheme)
      applyTheme(attribute, nextResolvedTheme)
    }

    const storedTheme = window.localStorage.getItem(storageKey) as Theme | null
    syncTheme(storedTheme ?? defaultTheme)

    const handleChange = () => {
      const storedOrDefault = (window.localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme
      if (storedOrDefault === "system" && enableSystem) {
        syncTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [attribute, defaultTheme, enableSystem, storageKey])

  const setTheme = useCallback((nextTheme: Theme) => {
    window.localStorage.setItem(storageKey, nextTheme)

    const nextResolvedTheme =
      nextTheme === "system" && enableSystem ? getSystemTheme() : nextTheme === "dark" ? "dark" : "light"

    setThemeState(nextTheme)
    setResolvedTheme(nextResolvedTheme)
    applyTheme(attribute, nextResolvedTheme)
  }, [attribute, enableSystem, storageKey])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme, setTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
