import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { BLOG_POSTS } from '../constants';
import { Search, Tag } from 'lucide-react';

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 pt-32"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Insights & News"
          title="The Nexus Blog"
          description="Stay updated with the latest trends in technology and digital marketing."
        />

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {['All', 'Web Dev', 'SEO', 'UI/UX', 'Cloud'].map(tag => (
              <button key={tag} className="rounded-full bg-slate-200 px-4 py-2 text-sm font-bold transition-colors hover:bg-brand-primary hover:text-white dark:bg-slate-800">
                {tag}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-full bg-slate-200 py-3 pl-12 pr-6 outline-none focus:ring-2 focus:ring-brand-primary dark:bg-slate-800 lg:w-80"
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {[...BLOG_POSTS, ...BLOG_POSTS].map((post, i) => (
            <motion.article
              key={`${post.id}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-[2.5rem] glass-card"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-4 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-primary">
                  <Tag className="h-4 w-4" />
                  <span>Technology</span>
                </div>
                <h3 className="mb-6 font-display text-3xl font-bold transition-colors group-hover:text-brand-primary">
                  {post.title}
                </h3>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200" />
                    <span className="font-bold">{post.author}</span>
                  </div>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
