import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-orcamentos',
  templateUrl: './lista-orcamentos.component.html',
  styleUrls: ['./lista-orcamentos.component.css']
})
export class ListaOrcamentosComponent implements OnInit {

  orcamentos: any = [{
    data: '09/06/2022'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
