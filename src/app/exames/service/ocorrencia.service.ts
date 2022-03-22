import { Injectable } from '@angular/core';
import { Ocorrencia } from '../model/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor() { }

  listIncorrencias(): Ocorrencia[] {
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
