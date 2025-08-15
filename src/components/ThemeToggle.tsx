import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const cycle = () => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light');
  const label = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '🖥️';

  return (
    <button
      onClick={cycle}
      aria-label="Cambiar tema"
      className="rounded-md px-3 py-2 text-sm text-gray-900 dark:text-gray-900 dark:text-[var(--text)]"
      title={`Tema: ${theme}`}
    >
      {label}
    </button>
  );
}
