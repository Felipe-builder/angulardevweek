import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaixasEtariasComponent } from './faixas-etarias/faixas-etarias.component';

const routes: Routes = [
  {
    path: '', component: FaixasEtariasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaixasEtariasRoutingModule { }
