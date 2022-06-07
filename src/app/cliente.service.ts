import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes = [
    {nome: "Cliente1"},{nome: "Cliente2"},{nome: "Cliente3"},{nome: "Cliente4"},{nome: "Cliente5"},{nome: "Cliente6"},{nome: "Cliente7"},{nome: "Cliente8"},{nome: "Cliente9"},{nome: "Cliente10"},{nome: "Cliente11"},{nome: "Cliente12"},{nome: "Cliente13"},{nome: "Cliente14"},{nome: "Cliente15"}
  ]

  constructor() { }

  getClientes() {
    return this.clientes.slice()
  }
}
