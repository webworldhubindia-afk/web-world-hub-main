import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SectionHeader from '../components/SectionHeader';
import { SERVICES, PROJECTS, TESTIMONIALS, BLOG_POSTS } from '../constants';
import ServiceIcon from '../components/ServiceIcon';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <Stats />

      {/* Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeader
            subtitle="What We Offer"
            title="Our Digital Services"
            description="We provide innovative solutions tailored to your business needs, helping you stay ahead in the digital lens."
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl p-8 glass-card"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <ServiceIcon name={service.icon} className="h-8 w-8" />
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
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
                
                {/* Background Hover Effect */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/5 transition-transform group-hover:scale-150" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end mb-16">
            <div className="text-left">
              <SectionHeader
                centered={false}
                subtitle="Recent Work"
                title="Our Portfolio"
                description="A glimpse of global projects we've successfully delivered."
              />
            </div>
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 font-display text-lg font-bold hover:text-brand-primary transition-colors mb-20"
            >
              View All Projects <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative h-[450px] overflow-hidden rounded-3xl"
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
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md hover:bg-white/20"
                  >
                    View Case Study <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Our success is reflected in the satisfaction of our global partners."
          />
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative space-y-6 rounded-3xl p-10 glass-card text-left"
                >
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-xl italic text-slate-600 dark:text-slate-300">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-display font-bold">{t.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[3rem] bg-brand-primary px-8 py-20 text-center text-white lg:py-32">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-3xl"
            >
              <h2 className="mb-8 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
                Ready to transform <br />
                your digital presence?
              </h2>
              <p className="mb-10 text-xl text-white/80">
                Let's discuss your project and see how we can help you grow.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-brand-primary shadow-2xl transition-all hover:scale-105 hover:bg-slate-50 active:scale-95"
              >
                Start a Conversation <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            
            {/* Abstract Shapes */}
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-accent/30 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <SectionHeader
            subtitle="Latest Insights"
            title="Our Blog"
            description="Explore our latest thoughts on technology, design, and business strategy."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl glass-card flex flex-col md:flex-row"
              >
                <div className="h-64 w-full overflow-hidden md:h-auto md:w-2/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">{post.date}</p>
                  <h3 className="mb-4 font-display text-2xl font-bold group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-slate-600 dark:text-slate-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 font-bold text-brand-primary"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
