import { Service, Project, Post, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build high-performance, responsive websites using React, Next.js, and modern technologies that drive results.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    fullContent: 'Our web development services cover everything from simple landing pages to complex enterprise applications. We specialize in React, Next.js, and modern CSS frameworks like Tailwind. Every project is built with performance, scalability, and user experience in mind.'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Custom mobile applications for iOS and Android with seamless user experiences and native performance.',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    fullContent: 'We create intuitive mobile apps that engage users and drive business growth. Our cross-platform solutions using React Native and Flutter ensure your app works perfectly on all devices while maintaining native performance.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Grow your online presence with data-driven marketing strategies that convert visitors into customers.',
    icon: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    fullContent: 'From social media management to PPC campaigns, we help you reach your target audience and convert them into loyal customers. Our data-driven approach ensures maximum ROI on every marketing dollar spent.'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Rank higher on search engines and attract more organic traffic with proven SEO strategies.',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1562577353-35f4244a9436?auto=format&fit=crop&q=80&w=800',
    fullContent: 'Our SEO experts use proven techniques including technical SEO, content optimization, and link building to improve your search visibility and drive meaningful traffic to your website.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centric designs that prioritize usability, accessibility, and stunning aesthetics.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    fullContent: 'We create designs that not only look great but also provide a smooth, enjoyable experience for your users. Our design process includes user research, wireframing, prototyping, and extensive testing.'
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Tailored enterprise software to solve your unique business challenges and streamline operations.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
    fullContent: 'Our custom software solutions are designed to streamline your business processes and increase efficiency. From CRM systems to automation tools, we build software that scales with your business.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LuxeShop E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    description: 'A full-featured online store with complex inventory management, payment processing, and real-time analytics dashboard.'
  },
  {
    id: '2',
    title: 'PayFlow Fintech Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    description: 'Secure and fast banking application with biometric authentication, instant transfers, and investment tracking.'
  },
  {
    id: '3',
    title: 'MetricPro SaaS Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Analytical dashboard for a leading marketing firm with real-time data visualization and custom reporting.'
  },
  {
    id: '4',
    title: 'HealthFit Wellness Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive health tracking platform with AI-powered recommendations and telemedicine integration.'
  },
  {
    id: '5',
    title: 'EduLearn Online Academy',
    category: 'Software Solutions',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    description: 'E-learning platform with video courses, interactive quizzes, and certification management system.'
  },
  {
    id: '6',
    title: 'FoodieHub Restaurant App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    description: 'Food delivery and restaurant management app with real-time order tracking and loyalty rewards.'
  }
];

export const BLOG_POSTS: Post[] = [
  {
    id: '1',
    title: 'The Future of AI in Web Development',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we build websites, from automated coding to intelligent design systems that adapt to user behavior.',
    date: 'Jan 15, 2025',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    author: 'Alex Thompson'
  },
  {
    id: '2',
    title: 'Maximizing Your SEO Strategy in 2025',
    excerpt: 'Learn the latest SEO techniques including Core Web Vitals optimization, AI-generated content strategies, and voice search optimization to stay ahead.',
    date: 'Jan 10, 2025',
    image: 'https://tse1.mm.bing.net/th/id/OIP.GF1mRqrKU-pUytFZNCGJ-gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    author: 'Sarah Mitchell'
  },
  {
    id: '3',
    title: 'Mobile-First Design: Best Practices',
    excerpt: 'Explore why mobile-first design is crucial in 2025 and learn practical tips for creating responsive experiences that convert.',
    date: 'Jan 5, 2025',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    author: 'David Chen'
  },
  {
    id: '4',
    title: 'The Rise of Progressive Web Apps',
    excerpt: 'Why PWAs are becoming the preferred choice for businesses looking to combine the best of web and mobile applications.',
    date: 'Dec 28, 2024',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
    author: 'Emily Rodriguez'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO at TechStream',
    content: 'WebWorldHub transformed our digital presence completely. Their attention to detail and innovative solutions exceeded all our expectations. Our conversion rate increased by 300%!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder of Bloom App',
    content: 'The mobile app they developed for us has received glowing reviews from our users. The team was professional, responsive, and delivered on time. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director at GrowthCo',
    content: 'Their SEO and digital marketing strategies helped us achieve first-page rankings for our key terms. The ROI has been incredible - best investment we made!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'CTO at InnovateTech',
    content: 'Working with WebWorldHub was a game-changer. They built a scalable platform that handles millions of users seamlessly. Exceptional technical expertise!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];
