import { type ImageMetadata } from 'astro';

export type NavItem =
  | {
      label: string;
      href: string;
      external?: boolean;
    }
  | {
      label: string;
      children: NavItem[];
    };

export interface CardItem {
  label: string;
  href?: string;
  img: ImageMetadata;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
}
