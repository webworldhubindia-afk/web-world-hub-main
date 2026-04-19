import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const mapUrl = "https://www.google.com/maps?q=House+No.4/1089+HAMDARD+NAGAR+B+NEAR+CHAD+MASJID+JAMALPUR+KOIL+ALIGARH+UTTAR+PRADESH+202001&output=embed";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24 pt-32"
    >
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          subtitle="Get in Touch"
          title="Contact Web World Hub"
          description="Have a project in mind? Let's build something amazing together."
        />

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="rounded-[2.5rem] bg-brand-primary p-12 text-white shadow-2xl shadow-brand-primary/40">
              <h3 className="mb-8 font-display text-3xl font-bold">Contact Details</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-70">Email Us</p>
                    <p className="text-xl font-bold">info@webworldhub.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-70">Call Us</p>
                    <p className="text-xl font-bold">+91 8285927937</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-70">Our Office</p>
                    <p className="text-lg font-bold">House No.4/1089 HAMDARD NAGAR B, NEAR CHAD MASJID, JAMALPUR KOIL, ALIGARH, UTTAR PRADESH - 202001</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <div className="h-10 w-10 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="rounded-[2rem] glass-card p-8 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold">Direct Message</h4>
                <p className="text-sm text-slate-500">Fast response via WhatsApp</p>
              </div>
              <button className="rounded-full bg-green-500 p-4 text-white hover:bg-green-600 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-70">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl bg-slate-100 p-4 outline-none focus:ring-2 focus:ring-brand-primary dark:bg-slate-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-70">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl bg-slate-100 p-4 outline-none focus:ring-2 focus:ring-brand-primary dark:bg-slate-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-70">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-2xl bg-slate-100 p-4 outline-none focus:ring-2 focus:ring-brand-primary dark:bg-slate-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-70">Your Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl bg-slate-100 p-4 outline-none focus:ring-2 focus:ring-brand-primary dark:bg-slate-800"
                />
              </div>
              <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-primary py-5 font-bold text-white shadow-xl shadow-brand-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Send Message <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <SectionHeader
            subtitle="Find Us"
            title="Our Location"
            description="Visit our office or get directions using the map below."
          />
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-card p-4">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Web World Hub Location"
                className="absolute inset-0"
              />
            </div>
            
            {/* Location Info Card */}
            <div className="mt-6 p-6 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Web World Hub</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    House No.4/1089 HAMDARD NAGAR B, NEAR CHAD MASJID,<br />
                    JAMALPUR KOIL, ALIGARH, UTTAR PRADESH - 202001
                  </p>
                  <a
                    href="https://www.google.com/maps?q=House+No.4/1089+HAMDARD+NAGAR+B+NEAR+CHAD+MASJID+JAMALPUR+KOIL+ALIGARH+UTTAR+PRADESH+202001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:underline"
                  >
                    Get Directions <MapPin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
