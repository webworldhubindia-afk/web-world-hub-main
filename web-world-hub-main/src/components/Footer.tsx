import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Facebook, Instagram, Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 transition-colors dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-tighter">NEXUS</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400">
              Empowering businesses with cutting-edge digital solutions and innovative strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-slate-200 p-2 text-slate-700 transition-colors hover:bg-brand-primary hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-200 p-2 text-slate-700 transition-colors hover:bg-brand-primary hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-200 p-2 text-slate-700 transition-colors hover:bg-brand-primary hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-slate-200 p-2 text-slate-700 transition-colors hover:bg-brand-primary hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-primary">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-primary" />
                <span>House No.4/1089 HAMDARD NAGAR B NEAR CHAD MASJID JAMALPUR KOIL,ALIGHAR,UTTARDESH - 202001</span> 
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-primary" />
                <span>+91 8285927937</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-primary" />
                <span>info@webworldhub.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              Subscribe to get latest news and insights.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full bg-slate-200 py-3 pl-6 pr-12 text-sm outline-none focus:ring-2 focus:ring-brand-primary dark:bg-slate-800"
              />
              <button className="absolute right-1 top-1 rounded-full bg-brand-primary p-2 text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {new Date().getFullYear()} WEB world hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
