'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './component.module.scss';
import { cn } from '../../utils/cn';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (theme) {
      setTheme(theme);
    }
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        styles.root,
        'rounded-full border border-[var(--border)] bg-transparent text-[var(--foreground)] transition-colors flex items-center justify-center hover:bg-[var(--muted)] hover:text-[var(--foreground)] p-2 cursor-pointer',
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-white" />
      ) : (
        <Moon className="w-5 h-5 text-black" />
      )}
    </button>
  );
}
