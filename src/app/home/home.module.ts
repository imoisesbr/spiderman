import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { CardsModule } from '../shared/cards/cards.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
