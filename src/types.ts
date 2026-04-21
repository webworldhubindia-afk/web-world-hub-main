export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  fullContent: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
