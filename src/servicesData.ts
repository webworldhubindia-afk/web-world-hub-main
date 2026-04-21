export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  services: string[];
}

export const ALL_SERVICES: ServiceCategory[] = [
  {
    id: 'web-designing',
    title: 'Web Designing',
    icon: 'Palette',
    description: 'Professional web design services to create stunning, user-friendly websites.',
    services: [
      'Mobile Responsive Web Designing',
      'Website Development',
      'Static Web Designing',
      'Custom Website Designing',
      'Website Designing Packages',
      'Website Re-Designing',
      'Website Maintenance',
      'Template Based Web Design',
      'eCommerce Website Designing',
      'Flash Websites Designing',
      'Web Portal Design',
      'Landing Web Page Design',
      'Website Maintained Service',
      'Company Logo Designing Services',
      'Brochure/Catalog Designing',
      'Catalog Designing Services',
      'B2B Website Designing Service',
      'B2C Website Designing Services',
      'Business Websites Designing',
      'Personal Website Designing',
      'Blog Website Designing',
      'Dynamic Website Designing'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'Globe',
    description: 'Custom web development solutions using cutting-edge technologies.',
    services: [
      'PHP Web Development',
      'Custom Web Development',
      'Laravel Web Development',
      'Python Web Development',
      'eCommerce Web Development',
      'React.js Web Development',
      'Node.js Development',
      'Dynamic Web Development'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'Megaphone',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    services: [
      'SEO Services',
      'SEO Packages',
      'PPC Services',
      'PPC Packages',
      'Brand/Reputation Management',
      'Online Branding Services',
      'Blog Promotion Services',
      'Google Business Listing',
      'Article Distribution Services',
      'Social Bookmarking Services',
      'Social Video Sharing and Promotion',
      'Classified Ad Posting Services',
      'On Page SEO Services',
      'Off Page SEO Services',
      'SMO Services',
      'Leads Generation',
      'Content Writing',
      'Online Reputation Management (ORM)',
      '360 Digital Marketing'
    ]
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    icon: 'Target',
    description: 'Generate quality leads from multiple platforms and channels.',
    services: [
      'Twitter Lead Generation',
      'LinkedIn Lead Generation',
      'YouTube Lead Generation',
      'WhatsApp Leads Generation',
      'Pinterest Lead Generation',
      'On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Facebook Lead Generation',
      'Google Lead Generation',
      'Instagram Lead Generation'
    ]
  },
  {
    id: 'seo',
    title: 'SEO',
    icon: 'Search',
    description: 'Improve your search engine rankings with our expert SEO services.',
    services: [
      'Local SEO',
      'On-Page SEO',
      'White Hat SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Black Hat SEO',
      'Industry Wise SEO',
      'Location Wise SEO'
    ]
  },
  {
    id: 'smo',
    title: 'SMO',
    icon: 'Share2',
    description: 'Optimize your social media presence and engagement.',
    services: [
      'Social Media Optimization',
      'Social Media Marketing',
      'Social Media Handling',
      'Facebook Page Creation & Management',
      'Google Plus Business Page Management',
      'LinkedIn Page Creation & Management',
      'Instagram Page Creation & Management',
      'Twitter Page Creation & Management',
      'Pinterest Page Creation & Management',
      'SMO Packages',
      'Social Video Promotion'
    ]
  },
  {
    id: 'ppc',
    title: 'PPC',
    icon: 'DollarSign',
    description: 'Maximize ROI with targeted pay-per-click advertising campaigns.',
    services: [
      'Google My Business (GMB) PPC Ads',
      'Facebook PPC Ads',
      'Instagram PPC Ads',
      'Twitter PPC Ads',
      'LinkedIn PPC Ads',
      'Pinterest PPC Ads',
      'Google PPC Ads',
      'Meta PPC Ads'
    ]
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: 'Cpu',
    description: 'Custom software solutions tailored to your business needs.',
    services: [
      'ERP Software Development',
      'CRM Software Development Services',
      'Custom Software Development',
      'Inventory Management Software',
      'School Management Software',
      'Employee Management Software',
      'Hospital Software Development',
      'Hotel Software Development',
      'Data Entry Software Development',
      'HRMS Software Development',
      'Projects Management Software Development',
      'Order Management Software Development',
      'Leads Management Software Development',
      'Payments Management Software Development',
      'Clients Management Software Development',
      'Vehicle Management Software Development',
      'Survey Verification Software Development',
      'Game Software Development',
      'Educational Software Development',
      'Property Management Software Development'
    ]
  },
  {
    id: 'bulk-sms',
    title: 'Bulk SMS Solutions',
    icon: 'MessageSquare',
    description: 'Reach your audience instantly with our bulk SMS marketing solutions.',
    services: [
      'Promotional Bulk SMS Services',
      'Bulk SMS Software',
      'Bulk SMS Packages',
      'Resale Bulk SMS',
      'Transactional Bulk SMS',
      'Transactional Bulk SMS Packages',
      'DND Bulk SMS Services',
      'DND SMS Packages',
      'NON-DND Bulk SMS Services',
      'NON-DND SMS Packages',
      'Voice SMS Services',
      'WhatsApp Bulk SMS Marketing',
      'WhatsApp SMS Packages',
      'Email Marketing Services',
      'Email Marketing Packages',
      'Bulk Email Software Solution',
      'Shortcode SMS Services'
    ]
  },
  {
    id: 'domain-solutions',
    title: 'Domain Solutions',
    icon: 'Globe',
    description: 'Complete domain registration and management services.',
    services: [
      'Domain Name Registration',
      'Domain Name Transfer',
      'Bulk Domain Name Registration',
      'Bulk Domain Name Transfer',
      'Become Domain Reseller',
      'Domain Name Promo Offers'
    ]
  },
  {
    id: 'web-hosting',
    title: 'Web Hosting Service',
    icon: 'Server',
    description: 'Reliable and secure web hosting solutions for all your needs.',
    services: [
      'Single Domain Hosting',
      'Multiple Domain Hosting',
      'Linux Web Hosting Service',
      'Windows Hosting Service',
      'Linux Reseller Hosting',
      'Windows Reseller Hosting',
      'Virtual Private Servers',
      'Dedicated Servers',
      'Managed Servers',
      'Website Builder Services',
      'Business Email Hosting',
      'Enterprise Email Hosting',
      'SSL Certificate Service',
      'SiteLock',
      'Codeguard',
      'Web Hosting Promo And Offers'
    ]
  },
  {
    id: 'web-portal',
    title: 'Web Portal Development',
    icon: 'Layout',
    description: 'Custom web portal development for various industries.',
    services: [
      'Social Media Portals Development',
      'B2B Portal Design Development',
      'B2C Portal Design Development',
      'Travel Portal Development',
      'Recharge Portal Development',
      'Custom Portal Development',
      'Real Estate Portal Development',
      'Job Portal Development Services',
      'Matrimonial Portal Development',
      'Hotel Portal Development Service',
      'Enterprise Portal Development',
      'Hospital Portal Development',
      'Shopify Web Development',
      'Wix Web Development',
      'Squarespace Web Development',
      'Blogger Web Development',
      'Weebly Web Development'
    ]
  },
  {
    id: 'cms-development',
    title: 'CMS Web Development',
    icon: 'FileText',
    description: 'Expert CMS development and customization services.',
    services: [
      'Wordpress Website Development',
      'Joomla Custom Development',
      'Magento Development Services',
      'Drupal Development Services',
      'Shopify Web Development',
      'Wix Web Development',
      'Squarespace Web Development',
      'Blogger Web Development',
      'Weebly Web Development'
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    icon: 'Smartphone',
    description: 'Native and cross-platform mobile app development services.',
    services: [
      'IOS Application Development',
      'Android Apps Development',
      'Windows Apps Development',
      'BlackBerry Apps Development',
      'App Support and Maintenance',
      'App Marketing Services'
    ]
  },
  {
    id: 'ecommerce',
    title: 'eCommerce Web Development',
    icon: 'ShoppingCart',
    description: 'Build powerful online stores with our eCommerce solutions.',
    services: [
      'eCommerce Website Development',
      'eCommerce Portal Development',
      'OpenCart Ecommerce Web Development',
      'Zencart Website Development Services',
      'Custom Oscommerce Web Development',
      'Software-as-a-Service (SAAS) eCommerce',
      'Payment Gateway Integration',
      'PHP Ecommerce Web Development'
    ]
  }
];
