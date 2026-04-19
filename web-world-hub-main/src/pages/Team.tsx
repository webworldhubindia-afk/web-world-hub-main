import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Fiza shawar',
    role: 'Web Developer',
    image: '/images/slide1.jpeg',
    bio: 'Visionary leader with 15+ years of experience in digital innovation and technology strategy.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'alex@webworldhub.com'
    }
  },
  {
    id: 2,
    name: 'Supriya sharam',
    role: 'Web Developer',
    image: '/images/slide2.jpeg',
    bio: 'Award-winning designer passionate about creating beautiful and user-centric digital experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'sarah@webworldhub.com'
    }
  },
  {
    id: 3,
    name: 'shan malik',
    role: 'Marketing Manager',
    image: '/images/slide3.jpeg',
    bio: 'Full-stack expert specializing in React, Node.js, and cloud architecture solutions.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'david@webworldhub.com'
    }
  },
  {
    id: 4,
    name: 'shan malik',
    role: 'Marketing Strategist',
    image: '/images/slide4.jpeg',
    bio: 'Data-driven marketing professional with expertise in SEO, PPC, and growth hacking.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'emily@webworldhub.com'
    }
  },
  {
    id: 5,
    name: 'shan malik',
    role: 'HR',
    image: '/images/slide5.jpeg',
    bio: 'Creative designer focused on crafting intuitive and engaging user interfaces.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'michael@webworldhub.com'
    }
  },
  {
    id: 6,
    name: 'Himanshu rawat',
    role: 'Sales & Marketing',
    image: '/images/slide6.jpeg',
    bio: 'Organized leader ensuring seamless project delivery and client satisfaction.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'jessica@webworldhub.com'
    }
  },
  {
    id: 7,
    name: 'Asma parveen',
    role: 'Social Media',
    image: '/images/slide7.jpeg',
    bio: 'Database and API specialist building robust and scalable backend systems.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'ryan@webworldhub.com'
    }
  },
  {
    id: 8,
    name: 'Asad malik',
    role: 'Programmer and Web Developer',
    image: '/images/slide8.jpeg',
    bio: 'Storyteller and content expert creating compelling narratives for brands.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'olivia@webworldhub.com'
    }
  }
];

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="Meet Our Experts"
            title="Our Amazing Team"
            description="We are a diverse group of talented professionals passionate about creating exceptional digital experiences that drive results."
          />
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl glass-card"
              >
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.twitter}
                      className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-brand-primary text-sm font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/5 transition-transform group-hover:scale-150" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-brand-primary px-8 py-20 text-center text-white lg:py-32">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-3xl"
            >
              <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Join Our Team
              </h2>
              <p className="mb-10 text-xl text-white/80 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-brand-primary shadow-2xl transition-all hover:scale-105 hover:bg-slate-50 active:scale-95"
              >
                View Open Positions
              </a>
            </motion.div>
            
            {/* Abstract Shapes */}
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-accent/30 blur-3xl" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
