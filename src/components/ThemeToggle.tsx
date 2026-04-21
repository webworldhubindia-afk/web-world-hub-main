import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark for premium feel

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative flex h-9 w-16 items-center rounded-full bg-slate-200 p-1 transition-colors dark:bg-slate-800"
      aria-label="Toggle Theme"
    >
      <motion.div
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-950"
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-brand-primary" />
        ) : (
          <Sun className="h-4 w-4 text-brand-accent" />
        )}
      </motion.div>
    </button>
  );
}
