import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncorrenciasComponent } from './incorrencias/incorrencias.component';

const routes: Routes = [
  {
    path:'', component: IncorrenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncorrenciasRoutingModule { }
