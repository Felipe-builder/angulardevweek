import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';



import { IncorrenciasRoutingModule } from './incorrencias-routing.module';
import { IncorrenciasComponent } from './incorrencias/incorrencias.component';


@NgModule({
  declarations: [
    IncorrenciasComponent
  ],
  imports: [
    CommonModule,
    IncorrenciasRoutingModule,
    MatCardModule,
    MatSortModule
  ]
})
export class IncorrenciasModule { }
