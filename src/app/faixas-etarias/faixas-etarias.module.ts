import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';

import { FaixasEtariasRoutingModule } from './faixas-etarias-routing.module';
import { FaixasEtariasComponent } from './faixas-etarias/faixas-etarias.component';


@NgModule({
  declarations: [
    FaixasEtariasComponent
  ],
  imports: [
    CommonModule,
    FaixasEtariasRoutingModule,
    MatCardModule,
    MatSortModule
  ]
})
export class FaixasEtariasModule { }
