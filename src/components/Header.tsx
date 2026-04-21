import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/utils';
import { SERVICES } from '../constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-11 z-40 w-full transition-all duration-300',
        scrolled
          ? 'glass-card py-3 translate-y-0'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="relative h-10 w-10 perspective-1000"
            >
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent p-0.5 shadow-lg group-hover:shadow-brand-primary/50">
                <div className="flex h-full w-full items-center justify-center rounded-md bg-slate-900 font-display text-xl font-bold text-white">
                  W
                </div>
              </div>
            </motion.div>
            <span className="font-display text-xl font-bold tracking-tighter">
              WEB World Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/team" className="nav-link">Team</NavLink>
            
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link flex items-center gap-1">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-2 w-64 rounded-xl glass-card p-4 shadow-2xl"
                  >
                    <div className="grid gap-2">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="rounded-lg p-2 transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
                        >
                          <p className="text-sm font-semibold">{service.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{service.description}</p>
                        </Link>
                      ))}
                      <Link 
                        to="/services" 
                        className="mt-2 block border-t border-slate-200 pt-2 text-center text-xs font-bold text-brand-primary dark:border-slate-800"
                      >
                        View All Services
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>

          <div className="flex items-center gap-6">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden lg:inline-flex rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/30 transition-all hover:scale-105 hover:bg-brand-primary/90 active:scale-95"
            >
              Hire Us
            </Link>
            <button
              className="p-2 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="/contact"
                  className="block text-center rounded-xl bg-brand-primary py-3 font-bold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
