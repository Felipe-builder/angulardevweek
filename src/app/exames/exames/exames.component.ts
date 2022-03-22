import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';
import { Ocorrencia } from '../model/ocorrencia';
import { FaixaEtaria } from '../model/faixa-etaria';
import { RegiaoService } from '../service/regiao.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { FaixaEtariaService } from '../service/faixa-etaria.service';


@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: FaixaEtaria[] = [];

  constructor(
    private regiaoService: RegiaoService,
    private ocorrenciaService: OcorrenciaService,
    private faixaEtariaService: FaixaEtariaService
  ) { }

  ngOnInit(): void {
    this.regioes = this.regiaoService.listRegioes();
    this.ocorrencia_exame = this.ocorrenciaService.listIncorrencias();
    this.faixaetarias = this.faixaEtariaService.listarFaixaEtarias();
  }

}
