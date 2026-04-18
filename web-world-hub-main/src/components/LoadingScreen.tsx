import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      <motion.div
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-24 w-24"
      >
        <div className="absolute inset-0 rounded-full border-4 border-brand-primary/20" />
        <div className="absolute inset-0 rounded-full border-t-4 border-brand-primary" />
        <div className="absolute inset-4 flex items-center justify-center font-display font-bold text-brand-primary">
          N
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-display text-sm tracking-widest text-slate-400 uppercase"
      >
        WEB world hub
      </motion.p>
    </div>
  );
}
