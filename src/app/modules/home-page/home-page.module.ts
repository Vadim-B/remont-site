import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgxMaskModule} from 'ngx-mask';
import { StepsComponent } from './components/steps/steps.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { SmetaComponent } from './components/smeta/smeta.component';
import { GuaranteeComponent } from './components/guarantee/guarantee.component';

@NgModule({
  declarations: [
    JumbotronComponent,
    CalculatorComponent,
    StepsComponent,
    GalleryComponent,
    FooterComponent,
    AdvantagesComponent,
    SmetaComponent,
    GuaranteeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    NgxMaskModule.forRoot()
  ],
  exports: [
    JumbotronComponent,
    CalculatorComponent,
    StepsComponent,
    GalleryComponent,
    AdvantagesComponent,
    SmetaComponent,
    GuaranteeComponent,
    FooterComponent
  ]
})
export class HomePageModule { }
