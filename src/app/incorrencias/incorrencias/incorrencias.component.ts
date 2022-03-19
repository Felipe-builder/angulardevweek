import { Component, OnInit } from '@angular/core';
import { Incorrencia } from '../model/incorrencia';
import { IncorrenciaService } from '../service/incorrencia.service';

@Component({
  selector: 'app-incorrencias',
  templateUrl: './incorrencias.component.html',
  styleUrls: ['./incorrencias.component.css']
})
export class IncorrenciasComponent implements OnInit {

  incorrencias: Incorrencia[] = [];
  constructor(private incorrenciaService:IncorrenciaService) { }

  ngOnInit(): void {
    this.incorrencias = this.incorrenciaService.listIncorrencias();
  }

}
