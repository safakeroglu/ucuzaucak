import type { Article } from '../types';

export const guideArticles: Article[] = [
  {
    title: "Complete Guide: Flying to Japan in 2024",
    excerpt: "Everything you need to know about flights, airports, and travel requirements for Japan.",
    image: "/images/japan-guide.jpg",
    href: "/guides/japan-flight-guide",
    category: 'guide',
    publishDate: new Date('2024-03-17')
  },
  {
    title: "Best Airlines for Europe Flights",
    excerpt: "Comparing prices, service quality, and baggage allowances for European carriers.",
    image: "/images/europe-airlines.jpg",
    href: "/guides/best-europe-airlines",
    category: 'guide',
    publishDate: new Date('2024-03-16')
  },
  {
    title: "Airport Transfer Guide: Istanbul",
    excerpt: "How to get to/from Istanbul Airport and Sabiha Gökçen Airport - all transportation options.",
    image: "/images/ist-transfer.jpg",
    href: "/guides/istanbul-airport-transfer",
    category: 'guide',
    publishDate: new Date('2024-03-15')
  }
];