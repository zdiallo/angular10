import { Injectable } from '@angular/core';

import { Article } from 'src/app/interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();
  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        { name: 'Tournevis', price: 2.44, qty: 140 },
        { name: 'Tournevis cruciforme', price: 2.78, qty: 110 },
        { name: 'Marteau', price: 1.2, qty: 25 },
        { name: 'Pince', price: 4.21, qty: 13 },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(a: Article): void {
    this.articles.push(a);
    this.save();
  }

  remove(selectedArticles: Article[]): void {
    this.articles = this.articles.filter((a) => !selectedArticles.includes(a));
    this.save();
  }

  refresh(): void {
    this.articles = this.getArticles();
  }
}
