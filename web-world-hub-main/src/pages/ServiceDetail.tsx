import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import ServiceIcon from '../components/ServiceIcon';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  const features = [
    'Customized solutions for your business',
    'Modern and scalable architecture',
    '24/7 technical support and maintenance',
    'Highly experienced professional team',
    'Result-oriented and data-driven approach',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 pt-32"
    >
      <div className="container mx-auto px-6">
        <Link
          to="/services"
          className="mb-12 inline-flex items-center gap-2 font-bold text-slate-500 hover:text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-primary/10 text-brand-primary">
              <ServiceIcon name={service.icon} className="h-10 w-10" />
            </div>
            <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              {service.fullContent}
            </p>
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold">Key Benefits</h3>
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-primary px-10 py-4 font-bold text-white shadow-xl shadow-brand-primary/30 transition-transform hover:scale-105 active:scale-95"
            >
              Get Started with {service.title}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] overflow-hidden rounded-[3rem]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
