import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', centered ? 'text-center' : 'text-left')}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-display text-sm font-bold tracking-[0.3em] text-brand-primary uppercase"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          'mb-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight',
          light ? 'text-white' : 'text-slate-900 dark:text-white'
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            'mx-auto max-w-2xl text-lg',
            light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400',
            !centered && 'mx-0'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
