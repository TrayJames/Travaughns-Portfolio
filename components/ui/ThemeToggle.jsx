import { FaSun, FaMoon } from 'react-icons/fa6'
import { useTheme } from '../theme-provider'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  // The provider also allows "system", so resolve that before flipping,
  // otherwise the first click can appear to do nothing.
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={label}
      title={label}
      className="fixed top-5 right-5 z-100 flex h-11 w-11 cursor-pointer items-center justify-center
        rounded-full border border-black/10 bg-white/70 text-black backdrop-blur-lg
        transition-colors hover:bg-white
        dark:border-black-300 dark:bg-black-200 dark:text-white dark:hover:bg-black-100"
    >
      {/*
        Both icons stay mounted and crossfade, so the swap eases in step with
        the page instead of popping. duration matches THEME_TRANSITION_MS.
      */}
      <span className="relative h-5 w-5">
        <FaSun
          className={`absolute inset-0 h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            motion-reduce:transition-none
            ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        />
        <FaMoon
          className={`absolute inset-0 h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            motion-reduce:transition-none
            ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        />
      </span>
    </button>
  )
}

export default ThemeToggle
