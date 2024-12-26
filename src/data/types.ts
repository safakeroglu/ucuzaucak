export interface Article {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: 'deals' | 'guide' | 'tips' | 'news';
  publishDate: Date;
}