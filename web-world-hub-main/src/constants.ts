import { Service, Project, Post, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build high-performance, responsive websites using the latest technologies.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    fullContent: 'Our web development services cover everything from simple landing pages to complex enterprise applications. We specialize in React, Next.js, and modern CSS frameworks like Tailwind.'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Custom mobile applications for iOS and Android with seamless user experiences.',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    fullContent: 'We create intuitive mobile apps that engage users and drive business growth. Our cross-platform solutions ensure your app works perfectly on all devices.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Grow your online presence with data-driven marketing strategies.',
    icon: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
    fullContent: 'From social media management to PPC campaigns, we help you reach your target audience and convert them into loyal customers.'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Rank higher on search engines and attract more organic traffic.',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1562577353-35f4244a9436?auto=format&fit=crop&q=80',
    fullContent: 'Our SEO experts use proven techniques to improve your search visibility and drive meaningful traffic to your website.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centric designs that prioritize usability and aesthetics.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80',
    fullContent: 'We create designs that not only look great but also provide a smooth, enjoyable experience for your users.'
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Tailored software to solve your unique business challenges.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80',
    fullContent: 'Our custom software solutions are designed to streamline your business processes and increase efficiency.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    description: 'A full-featured online store with complex inventory management.'
  },
  {
    id: '2',
    title: 'Fintech Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    description: 'Secure and fast banking application for modern users.'
  },
  {
    id: '3',
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    description: 'Analytical dashboard for a leading marketing firm.'
  }
];

export const BLOG_POSTS: Post[] = [
  {
    id: '1',
    title: 'The Future of AI in Web Dev',
    excerpt: 'How artificial intelligence is changing the way we build websites.',
    date: 'Oct 24, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    author: 'John Doe'
  },
  {
    id: '2',
    title: 'Maximizing Your SEO in 2024',
    excerpt: 'Key strategies to keep your ranking at the top.',
    date: 'Oct 20, 2024',
    image: 'https://images.unsplash.com/photo-1562577353-35f4244a9436?auto=format&fit=crop&q=80',
    author: 'Jane Smith'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO at TechStream',
    content: 'Nexus transformed our digital presence. Their attention to detail and innovative solutions are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder of Bloom App',
    content: 'The mobile app they developed for us has received glowing reviews from our users. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  }
];
