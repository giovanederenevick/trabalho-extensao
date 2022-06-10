import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: any = [{
    descricao: 'Vidro temperado metro',
    valor: 20
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
