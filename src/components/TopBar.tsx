import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export default function TopBar() {
  const phoneNumber = '+91 8285927937';
  const email = 'info@webworldhub.com';
  const whatsappNumber = '918285927937';
  const whatsappMessage = encodeURIComponent('Hello! I would like to know more about your services.');

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: Facebook,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: Instagram,
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: Twitter,
      color: 'hover:bg-sky-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin,
      color: 'hover:bg-blue-700'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: Youtube,
      color: 'hover:bg-red-600'
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      icon: MessageCircle,
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <div className="bg-slate-900 text-white dark:bg-slate-950 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 hover:text-brand-primary transition-colors group"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-brand-primary transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-medium">{phoneNumber}</span>
            </a>
            
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-brand-primary transition-colors group"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-brand-primary transition-colors">
                <Mail className="h-4 w-4" />
              </div>
              <span className="font-medium hidden lg:inline">{email}</span>
              <span className="font-medium lg:hidden">Email Us</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-400 mr-2 hidden sm:inline">Follow Us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
