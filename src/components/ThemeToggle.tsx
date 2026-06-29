import { Moon, Sun } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useStore();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}