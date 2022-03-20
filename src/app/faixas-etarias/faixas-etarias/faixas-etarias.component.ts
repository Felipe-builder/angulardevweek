import { Component, OnInit } from '@angular/core';
import { FaixasEtarias } from '../model/faixas-etarias';
import { FaixasEtariasService } from '../service/faixas-etarias.service';

@Component({
  selector: 'app-faixas-etarias',
  templateUrl: './faixas-etarias.component.html',
  styleUrls: ['./faixas-etarias.component.css']
})
export class FaixasEtariasComponent implements OnInit {

  faixas_etarias: FaixasEtarias[] = [];
  constructor(private faixasEtariasService: FaixasEtariasService) { }

  ngOnInit(): void {
    this.faixas_etarias = this.faixasEtariasService.listarFaixaEtarias();
  }

}
