import { ClienteService } from './../cliente.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cliente',
  templateUrl: './item-cliente.component.html',
  styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

  @Input() cliente: any
  clienteService: ClienteService

  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService
   }

  ngOnInit(): void {

  }

  onEdit() {
    console.log('Editar cliente')
  }

  onCreateOrcamento() {
    console.log('Criar orçamento')
  }
}
