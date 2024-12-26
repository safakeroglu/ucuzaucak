import { dealArticles } from './deals';
import { guideArticles } from './guides';
import { tipArticles } from './tips';
import type { Article } from '../types';

export const articles: Article[] = [
  ...dealArticles,
  ...guideArticles,
  ...tipArticles
];