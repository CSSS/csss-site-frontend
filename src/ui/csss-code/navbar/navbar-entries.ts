export interface NavbarEntry {
  key: string;
  name: string;
  type: 'file' | 'link' | 'folder';
  link?: string;
  entries: NavbarEntry[];
}
