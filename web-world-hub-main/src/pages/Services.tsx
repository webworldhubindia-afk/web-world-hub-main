import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../constants';
import { ALL_SERVICES } from '../servicesData';
import ServiceIcon from '../components/ServiceIcon';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      {/* Main Services Section */}
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl mb-24">
        <SectionHeader
          subtitle="Our Expertise"
          title="Core Digital Solutions"
          description="We combine technical excellence with creative thinking to deliver results that matter."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] glass-card lg:flex-row"
            >
              <div className="h-64 w-full overflow-hidden lg:h-auto lg:w-2/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center p-10 lg:w-3/5">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mb-6 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 font-bold text-brand-primary"
                >
                  Explore Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Services Section */}
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          subtitle="Complete Service Catalog"
          title="All 191+ Services"
          description="Explore our comprehensive range of digital solutions tailored to meet every business need."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left hover:bg-brand-primary/5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <ServiceIcon name={category.icon} className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold mb-1">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.services.length} services
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {expandedCategory === category.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-200 dark:border-slate-700"
                >
                  <div className="p-6 pt-4 max-h-96 overflow-y-auto">
                    <ul className="space-y-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
