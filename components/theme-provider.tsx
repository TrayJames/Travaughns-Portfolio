import React  from "react"
import { createContext, useContext, useEffect, useRef, useState } from "react"

// Keep in sync with the .theme-transition duration in src/index.css.
const THEME_TRANSITION_MS = 500

type Theme = "dark" | "light" | "system"
 
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}
 
type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
 
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}
 
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
 
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )
 
  useEffect(() => {
    const root = window.document.documentElement
 
    root.classList.remove("light", "dark")
 
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
 
      root.classList.add(systemTheme)
      return
    }
 
    root.classList.add(theme)
  }, [theme])
 
  // Holds the timer that removes .theme-transition, so rapid toggling does not
  // leave a stale timeout stripping the class mid-animation.
  const transitionTimer = useRef<number | undefined>(undefined)

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      const root = window.document.documentElement

      // Let colors ease between themes instead of snapping. This lives here
      // rather than being always-on so it never competes with the hover and
      // transform transitions on the cards - it is added for the length of the
      // switch and then removed.
      root.classList.add("theme-transition")
      window.clearTimeout(transitionTimer.current)
      transitionTimer.current = window.setTimeout(() => {
        root.classList.remove("theme-transition")
      }, THEME_TRANSITION_MS + 50)

      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  // Drop the timer if the provider unmounts mid-transition.
  useEffect(() => () => window.clearTimeout(transitionTimer.current), [])
 
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
 
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
 
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
 
  return context
}