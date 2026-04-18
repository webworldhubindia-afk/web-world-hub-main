import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 pt-32"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Our Work"
          title="Creative Portfolio"
          description="Explore our latest projects across various industries."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...PROJECTS, ...PROJECTS].map((project, i) => (
            <motion.div
              key={`${project.id}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-[2.5rem]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-slate-950 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="mb-2 font-display text-xs font-bold tracking-widest text-brand-primary uppercase">
                  {project.category}
                </p>
                <h3 className="mb-4 font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-brand-primary hover:text-white">
                  View Detail <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
