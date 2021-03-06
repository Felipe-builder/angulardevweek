import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { ExamesRoutingModule } from './exames-routing.module'
import { ExamesComponent } from './exames/exames.component';


@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    ExamesRoutingModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class RegioesModule { }
