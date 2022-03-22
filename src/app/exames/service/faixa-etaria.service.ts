import { Injectable } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor() { }

  listarFaixaEtarias(): FaixaEtaria[] {
    return [
      {
        id:1 , faixa_i: 0, faixa_n: 10, descricao: 'Até 10 anos'
      },
      {
        id:2, faixa_i: 11, faixa_n:14 , descricao: 'Entre 11 e 14 anos'
      }
    ]
  }
}
