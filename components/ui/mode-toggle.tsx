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
      <div className="skeu-track w-14 h-7 rounded-full border border-[#4c2c7a]/20 dark:border-purple-500/20" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="skeu-track relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full p-0.5 border border-[#4c2c7a]/20 dark:border-purple-500/30 transition-colors duration-300 ease-in-out focus:outline-none active:brightness-95"
    >
      {/* Engraved track icons */}
      <span className="absolute inset-0 flex items-center justify-between px-1.5 text-xs select-none pointer-events-none">
        <Sun className={`h-3.5 w-3.5 text-purple-600 drop-shadow-[0_1px_0_rgba(255,255,255,0.5)] transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-0"}`} />
        <Moon className={`h-3.5 w-3.5 text-purple-300 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40"}`} />
      </span>

      {/* Glossy gem knob */}
      <span
        className={`skeu-knob pointer-events-none relative flex h-6 w-6 items-center justify-center rounded-full border border-white/40 dark:border-purple-300/30 transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-7 text-[#2d0c5c]" : "translate-x-0 text-[#7c3aed]"
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
