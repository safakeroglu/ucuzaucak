import type { Article } from '../types';

export const dealArticles: Article[] = [
  {
    title: "Flash Sale: Istanbul to Tokyo for 15,777 TL",
    excerpt: "Limited time offer for direct flights to Tokyo with Turkish Airlines. Available for February-April 2024.",
    image: "/images/istanbul-tokyo.jpg",
    href: "/deals/istanbul-tokyo-flash-sale",
    category: 'deals',
    publishDate: new Date('2024-03-20')
  },
  {
    title: "Special Offer: Istanbul to Bangkok from 18,840 TL",
    excerpt: "Round-trip flights to Bangkok with Emirates. Multiple dates available in June 2024.",
    image: "/images/istanbul-bangkok.jpg",
    href: "/deals/istanbul-bangkok-offer",
    category: 'deals',
    publishDate: new Date('2024-03-19')
  },
  {
    title: "Weekend Deal: Istanbul to Bali for 21,350 TL",
    excerpt: "Amazing prices for May-June 2024. Includes 23kg checked baggage.",
    image: "/images/istanbul-bali.jpg",
    href: "/deals/istanbul-bali-weekend",
    category: 'deals',
    publishDate: new Date('2024-03-18')
  }
];