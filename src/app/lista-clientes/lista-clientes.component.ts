import { ClienteService } from './../cliente.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit, OnDestroy {

  clientes: any = []
  clienteService: ClienteService

  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService
  }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes()
  }

  ngOnDestroy(): void {
  }
}
