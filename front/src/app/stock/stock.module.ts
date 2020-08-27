import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [StockComponent, CreateComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class StockModule {}
