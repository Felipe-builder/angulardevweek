import { Injectable } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(
    private http:HttpClient
  ) { }

  listarFaixaEtarias(): Observable<FaixaEtaria[]> {
    const url = 'assets/faixaetaria.json'
    return this.http.get<FaixaEtaria[]>(url)
  }
}
