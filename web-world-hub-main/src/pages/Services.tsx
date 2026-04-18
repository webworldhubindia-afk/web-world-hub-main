import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../constants';
import ServiceIcon from '../components/ServiceIcon';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Our Expertise"
          title="Digital Solutions"
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
    </motion.div>
  );
}
