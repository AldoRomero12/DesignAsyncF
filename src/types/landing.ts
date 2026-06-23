export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  country: string;
  avatar: string;
  content: string;
}

export interface SliderItem {
  text: string;
  accent?: boolean;
}