import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detalhe-pedido',
  templateUrl: './item-detalhe-pedido.component.html',
  styleUrls: ['./item-detalhe-pedido.component.css']
})
export class ItemDetalhePedidoComponent implements OnInit {

  @Input() detalhepedido: any

  constructor() { }

  ngOnInit(): void {
  }


  onEdit() {
  }

  onDelete() {
  }
}
