import { Component, OnInit } from '@angular/core';
import { faRedoAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Article } from 'src/app/interfaces/article';
import { from } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRedoAlt = faRedoAlt;
  faPlus = faPlus;

  articles: Article[] = [
    { name: 'Tournevis', price: 2.4, qty: 140 },
    { name: 'Tournevis cruciforme', price: 2.78, qty: 140 },
    { name: 'Marteau', price: 2.4, qty: 140 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
