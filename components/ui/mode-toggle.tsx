"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-13 h-7 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-zinc-700/60" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative inline-flex h-7 w-13 shrink-0 cursor-pointer items-center rounded-full p-0.5 bg-zinc-200 dark:bg-zinc-800/90 border border-zinc-300 dark:border-zinc-700/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
    >
      {/* Track icons */}
      <span className="absolute inset-0 flex items-center justify-between px-1.5 text-xs select-none pointer-events-none">
        <Sun className={`h-3.5 w-3.5 text-amber-500 transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-0"}`} />
        <Moon className={`h-3.5 w-3.5 text-purple-300 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40"}`} />
      </span>

      {/* Switch knob */}
      <span
        className={`pointer-events-none relative flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5" />
        ) : (
          <Sun className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  )
}
