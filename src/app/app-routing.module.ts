import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo:'incorrencias'
  },
  {
    path: 'incorrencias',
    loadChildren: () => import('./incorrencias/incorrencias.module').then(m => m.IncorrenciasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
