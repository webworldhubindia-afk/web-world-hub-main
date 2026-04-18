import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { label: 'Successful Projects', value: 250, suffix: '+' },
    { label: 'Happy Clients', value: 150, suffix: '+' },
    { label: 'IT Specialists', value: 45, suffix: '' },
    { label: 'Awards Won', value: 12, suffix: '' },
  ];

  return (
    <section className="bg-slate-900 py-20 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="mb-2 font-display text-4xl font-bold text-white md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h2>
              <p className="font-display text-xs font-bold tracking-widest text-brand-primary uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
