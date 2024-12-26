export interface Article {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: 'guide' | 'tips' | 'news';
  publishDate: Date;
}

export const articles: Article[] = [
  {
    title: "What is eSIM? Complete Guide for Travelers",
    excerpt: "Everything you need to know about using eSIM for international travel in 2024. Save money on roaming charges and stay connected worldwide.",
    image: "/images/esim-guide.jpg",
    href: "/useful-info/what-is-esim",
    category: 'guide',
    publishDate: new Date('2024-03-15')
  },
  {
    title: "Airline Passenger Rights - Complete Guide",
    excerpt: "Understanding your rights as an airline passenger. Learn about compensation for delays, cancellations, and lost baggage.",
    image: "/images/passenger-rights.jpg",
    href: "/useful-info/passenger-rights",
    category: 'guide',
    publishDate: new Date('2024-03-14')
  },
  {
    title: "Train and Bus Ticket Discount Codes 2024",
    excerpt: "Find the best discount codes for train and bus travel across Europe. Save up to 10 EUR on your next journey.",
    image: "/images/train-discount.jpg",
    href: "/useful-info/train-bus-discounts",
    category: 'tips',
    publishDate: new Date('2024-03-13')
  },
  {
    title: "Schengen Visa Guide 2024",
    excerpt: "Complete guide to obtaining a Schengen visa. Requirements, application process, and tips for approval.",
    image: "/images/schengen-visa.jpg",
    href: "/useful-info/schengen-visa-guide",
    category: 'guide',
    publishDate: new Date('2024-03-12')
  },
  {
    title: "Amazon Tax Refund Guide",
    excerpt: "How to get a full tax refund on your Amazon purchases while traveling. Step-by-step guide for 2024.",
    image: "/images/tax-refund.jpg",
    href: "/useful-info/amazon-tax-refund",
    category: 'tips',
    publishDate: new Date('2024-03-11')
  },
  {
    title: "Montenegro Tax Free Shopping Guide",
    excerpt: "Complete guide to tax-free shopping in Montenegro. How to claim your refund and save money.",
    image: "/images/montenegro-tax.jpg",
    href: "/useful-info/montenegro-tax-free",
    category: 'tips',
    publishDate: new Date('2024-03-10')
  }
];