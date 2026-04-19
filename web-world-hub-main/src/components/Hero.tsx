import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BANNERS = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920'
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden pt-20">
      {/* Background Slideshow */}
      {BANNERS.map((banner, index) => (
        <motion.div
          key={banner}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 h-full w-full"
        >
          <img
            src={banner}
            alt="Hero Background"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </motion.div>
      ))}

      <div className="container relative z-10 mx-auto flex h-full items-center px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="mb-4 font-display text-sm font-bold tracking-[0.3em] text-brand-primary uppercase">
              
            </h4>

            <h1 className="mb-8 font-display text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
              Building the Future 
              <span className="gradient-text">Through Innovation.</span>
            </h1>
            <p className="mb-10 text-lg text-slate-300 md:text-xl max-w-2xl">
              We create cutting-edge digital products, stunning websites, and powerful mobile apps that help brands grow and succeed in the digital-first world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-brand-primary/40 transition-all hover:translate-y-[-2px] hover:shadow-brand-primary/60 active:translate-y-0"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary">
                  <Play className="h-4 w-4 fill-white text-white" />
                </div>
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shapes & Effects */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 hidden h-64 w-64 rounded-full border border-white/10 lg:block"
      />
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
