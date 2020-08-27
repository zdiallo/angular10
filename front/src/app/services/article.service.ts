import { Injectable } from '@angular/core';

import { Article } from 'src/app/interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 2.44, qty: 140 },
    { name: 'Tournevis cruciforme', price: 2.78, qty: 110 },
    { name: 'Marteau', price: 1.2, qty: 25 },
    { name: 'Pince', price: 4.21, qty: 13 },
  ];
  constructor() {}

  add(article: Article): void {
    this.articles.push(article);
  }
}
