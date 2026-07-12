export type NavItem =
  | {
      label: string;
      href: string;
    }
  | {
      label: string;
      children: NavItem[];
    };

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
}
