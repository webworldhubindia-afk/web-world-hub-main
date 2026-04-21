import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { Users, Award, Zap, Smile } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Users, title: 'Client Centric', description: 'Your business goals are our top priority.' },
    { icon: Award, title: 'Quality Focus', description: 'We maintain the highest standards in every line of code.' },
    { icon: Zap, title: 'Innovation', description: 'We always look for the most efficient and modern solutions.' },
    { icon: Smile, title: 'Reliability', description: 'You can count on us to deliver on time and as promised.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Our Story"
          title="About WEB World Hub  "
          description="We are a team of passionate creators, engineers, and strategists dedicated to redefining digital possibilities."
        />

        {/* Vision & Mission */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-brand-primary/20" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Our Team"
              className="relative rounded-3xl object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 font-display text-3xl font-bold">Our Philosophy</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                At Nexus, we believe that technology should be an enabler, not a barrier. We work closely with our clients to understand their vision and translate it into powerful digital experiences that drive growth and engagement.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-brand-primary/10 p-6">
                <h4 className="mb-2 font-display text-xl font-bold text-brand-primary text-center">Vision</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  To be the global leader in digital transformation and innovative software solutions.
                </p>
              </div>
              <div className="rounded-2xl bg-brand-accent/10 p-6">
                <h4 className="mb-2 font-display text-xl font-bold text-brand-accent text-center">Mission</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  Empowering businesses through cutting-edge technology and human-centric design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-32">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Our Core Values"
            description="The principles that guide everything we do at Nexus Digital Agency."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl glass-card p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-lg shadow-brand-primary/30">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold">{v.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
