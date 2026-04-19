import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SectionHeader from '../components/SectionHeader';
import { SERVICES, PROJECTS, TESTIMONIALS, BLOG_POSTS } from '../constants';
import ServiceIcon from '../components/ServiceIcon';
import { ArrowRight, Star, ExternalLink, Play, ChevronLeft, ChevronRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    { src: '/images/slide1.jpeg', alt: 'Fiza Shawar - Web Developer' },
    { src: '/images/slide2.jpeg', alt: 'Supriya Sharma - Web Developer' },
    { src: '/images/slide3.jpeg', alt: 'Shan Malik - Marketing Manager' },
    { src: '/images/slide4.jpeg', alt: 'Shan Malik - Marketing Strategist' },
    { src: '/images/slide5.jpeg', alt: 'Shan Malik - HR' },
    { src: '/images/slide6.jpeg', alt: 'Himanshu Rawat - Sales & Marketing' },
    { src: '/images/slide7.jpeg', alt: 'Asma Parveen - Social Media' },
    { src: '/images/slide8.jpeg', alt: 'Asad Malik - Programmer and Web Developer' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <Stats />

      {/* Video Showcase Section */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="See Us In Action"
            title="Watch Our Story"
            description="Discover how we transform ideas into stunning digital experiences."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Video Container */}
              <div className="relative aspect-video bg-slate-900">
                <iframe
                  src="https://www.youtube.com/embed/EeSEqYAXRdo?rel=0&modestbranding=1&autoplay=0"
                  title="WebWorldHub Showcase"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 0 }}
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl" />
            </div>
            
            {/* Video Caption */}
            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                See how we help businesses achieve their digital goals with innovative solutions and creative excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Slider Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="Our Work Gallery"
            title="Featured Projects"
            description="Explore our diverse portfolio of successful digital solutions and creative excellence."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Slider Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900">
              {/* Main Image Display */}
              <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
                {sliderImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 1.05
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain bg-slate-100 dark:bg-slate-800"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Image Caption */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-8 left-8 right-8"
                    >
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                        {image.alt}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Project {index + 1} of {sliderImages.length}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all group"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all group"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center gap-3 py-6 bg-white dark:bg-slate-900">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index 
                        ? 'w-12 h-3 bg-brand-primary' 
                        : 'w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="mt-8 grid grid-cols-4 md:grid-cols-8 gap-4">
              {sliderImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
                    currentSlide === index 
                      ? 'ring-4 ring-brand-primary shadow-xl' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="Trusted By"
            title="Our Valuable Clients"
            description="We're proud to work with industry-leading companies and trusted brands worldwide."
          />
          
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />
            
            {/* Client Logos - Row 1 */}
            <div className="mb-8">
              <motion.div
                className="flex gap-16 items-center"
                animate={{ x: [0, -1920] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-16 items-center shrink-0">
                    {/* GoDaddy */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-orange-600">GoDaddy</div>
                    </div>
                    
                    {/* Netlify */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-cyan-500">Netlify</div>
                    </div>
                    
                    {/* Vercel */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold">▲ Vercel</div>
                    </div>
                    
                    {/* Hostinger */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-purple-600">Hostinger</div>
                    </div>
                    
                    {/* Google */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                      </div>
                    </div>
                    
                    {/* Microsoft */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-600">Microsoft</div>
                    </div>
                    
                    {/* Amazon AWS */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-orange-500">AWS</div>
                    </div>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-700">Meta</div>
                    </div>
                    
                    {/* Shopify */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-green-600">Shopify</div>
                    </div>
                    
                    {/* Cloudflare */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-orange-600">Cloudflare</div>
                    </div>
                    
                    {/* Stripe */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-purple-500">Stripe</div>
                    </div>
                    
                    {/* Adobe */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-red-600">Adobe</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Client Logos - Row 2 (Reverse Direction) */}
            <div>
              <motion.div
                className="flex gap-16 items-center"
                animate={{ x: [-1920, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 45,
                    ease: "linear",
                  },
                }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-16 items-center shrink-0">
                    {/* WordPress */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-800">WordPress</div>
                    </div>
                    
                    {/* GitHub */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold">GitHub</div>
                    </div>
                    
                    {/* Zoom */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-500">Zoom</div>
                    </div>
                    
                    {/* Slack */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-pink-600">Slack</div>
                    </div>
                    
                    {/* Salesforce */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-600">Salesforce</div>
                    </div>
                    
                    {/* IBM */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-700">IBM</div>
                    </div>
                    
                    {/* Oracle */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-red-600">Oracle</div>
                    </div>
                    
                    {/* Intel */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-600">Intel</div>
                    </div>
                    
                    {/* Cisco */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-blue-500">Cisco</div>
                    </div>
                    
                    {/* HubSpot */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-orange-600">HubSpot</div>
                    </div>
                    
                    {/* Mailchimp */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold text-yellow-600">Mailchimp</div>
                    </div>
                    
                    {/* Squarespace */}
                    <div className="flex items-center justify-center w-40 h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <div className="text-2xl font-bold">Squarespace</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 glass-card px-8 py-4 rounded-full">
              <div>
                <p className="text-3xl font-bold text-brand-primary">500+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-slate-300 dark:bg-slate-700" />
              <div>
                <p className="text-3xl font-bold text-brand-primary">50+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Global Brands</p>
              </div>
              <div className="w-px h-12 bg-slate-300 dark:bg-slate-700" />
              <div>
                <p className="text-3xl font-bold text-brand-primary">98%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Marketing Packages Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary/5 via-white to-brand-accent/5 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="Special Offer"
            title="Digital Marketing Packages"
            description="Boost your online presence with our comprehensive digital marketing solutions at affordable prices."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Pricing Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-card">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 dark:from-brand-primary/5 dark:to-brand-accent/5" />
              
              <div className="relative p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Package Info */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-bold text-brand-primary">
                      <Zap className="h-4 w-4" />
                      Most Popular Package
                    </div>
                    
                    <h3 className="font-display text-4xl md:text-5xl font-bold">
                      Complete Digital Marketing
                    </h3>
                    
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                      Everything you need to dominate the digital landscape and grow your business online.
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {[
                        'SEO Optimization & Ranking',
                        'Social Media Marketing (All Platforms)',
                        'Google & Facebook Ads Management',
                        'Content Creation & Strategy',
                        'Monthly Analytics Reports',
                        'Lead Generation Campaigns',
                        'Brand Awareness Building',
                        '24/7 Customer Support'
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Side - Pricing */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative">
                      {/* Price Circle */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative flex flex-col items-center justify-center w-72 h-72 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-2xl shadow-brand-primary/40"
                      >
                        <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm" />
                        <div className="relative z-10 text-center">
                          <p className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90">Starting From</p>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-2xl font-bold">₹</span>
                            <span className="text-6xl md:text-7xl font-bold">25,000</span>
                          </div>
                          <p className="text-sm mt-2 opacity-90">per month</p>
                        </div>
                        
                        {/* Decorative Ring */}
                        <div className="absolute inset-4 rounded-full border-2 border-white/20" />
                      </motion.div>
                      
                      {/* Badge */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-4 -right-4 rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg"
                      >
                        SAVE 40%
                      </motion.div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-primary px-10 py-4 text-lg font-bold text-white shadow-xl shadow-brand-primary/40 transition-all hover:scale-105 hover:bg-brand-primary/90 hover:shadow-brand-primary/60 active:scale-95"
                    >
                      Get Started Now <TrendingUp className="h-5 w-5" />
                    </Link>
                    
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                      Custom packages also available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Info Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl glass-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-bold mb-2">100% Transparent</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">No hidden charges, complete visibility</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl glass-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h4 className="font-bold mb-2">Proven Results</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">300% average ROI for clients</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl glass-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                  <Zap className="h-6 w-6" />
                </div>
                <h4 className="font-bold mb-2">Quick Start</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Campaign live within 48 hours</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="What We Offer"
            title="Our Digital Services"
            description="We provide innovative solutions tailored to your business needs, helping you stay ahead in the digital landscape with cutting-edge technology."
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
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end mb-16">
            <div className="text-left">
              <SectionHeader
                centered={false}
                subtitle="Recent Work"
                title="Our Portfolio"
                description="A glimpse of outstanding projects we've successfully delivered for clients worldwide."
              />
            </div>
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 font-display text-lg font-bold hover:text-brand-primary transition-colors mb-20"
            >
              View All Projects <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl"
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
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Our success is reflected in the satisfaction of our global partners and the results we deliver."
          />
          
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
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
              <p className="mb-10 text-xl text-white/80 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help you achieve your business goals with innovative digital solutions.
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
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <SectionHeader
            subtitle="Latest Insights"
            title="Our Blog"
            description="Explore our latest thoughts on technology, design, digital marketing, and business strategy."
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
