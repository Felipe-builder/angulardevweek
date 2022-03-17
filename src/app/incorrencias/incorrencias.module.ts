import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncorrenciasRoutingModule } from './incorrencias-routing.module';
import { IncorrenciasComponent } from './incorrencias/incorrencias.component';


@NgModule({
  declarations: [
    IncorrenciasComponent
  ],
  imports: [
    CommonModule,
    IncorrenciasRoutingModule
  ]
})
export class IncorrenciasModule { }
