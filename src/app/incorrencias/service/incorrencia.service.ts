import { Injectable } from '@angular/core';
import { Incorrencia } from '../model/incorrencia';

@Injectable({
  providedIn: 'root'
})
export class IncorrenciaService {

  constructor() { }

  listIncorrencias(): Incorrencia[] {
    return [
      {
        id: 1, regiao_id: 1, mes: 5, faixa_id: 2, qnt_exames: 1
      },
      {
        id: 2, regiao_id: 1, mes: 5, faixa_id:4, qnt_exames: 2
      }
    ]
  }
}
