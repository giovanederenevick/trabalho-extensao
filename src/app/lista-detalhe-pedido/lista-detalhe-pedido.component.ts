import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-detalhe-pedido',
  templateUrl: './lista-detalhe-pedido.component.html',
  styleUrls: ['./lista-detalhe-pedido.component.css']
})
export class ListaDetalhePedidoComponent implements OnInit {

  detalhepedidos: any = [
    {
      descricao: 'Vidro temperado metro',
      quantidade: 10,
      valorTotal: '200,00'
    },
    {
      descricao: 'Silicone',
      quantidade: 2,
      valorTotal: '110,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
