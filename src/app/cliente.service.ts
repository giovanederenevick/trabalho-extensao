import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  router: Router

  private clientes = [
    {
      nome: "Fulano de Tal",
      endereco: "Rua tal",
      numero: '1',
      complemento: '',
      dddcelular: '41',
      numcelular: '91234567',
      dddtelefone: '',
      numtelefone: '',
      email: 'email@email.com'
    },
    {nome: "Cliente2"},
    {nome: "Cliente3"}
  ]

  constructor(router: Router) {
    this.router = router
   }

  getClientes() {
    return this.clientes.slice()
  }

  createCliente(nome: string, endereco: string, numero: string, complemento: string, dddcelular: string, numcelular: string, dddtelefone: string, numtelefone: string, email: string){
    const newCliente = {nome: nome, endereco: endereco, numero: numero, complemento: complemento, dddcelular: dddcelular, numcelular: numcelular, dddtelefone: dddtelefone, numtelefone: numtelefone, email: email}
    this.clientes.push(newCliente)
    this.router.navigate(['/clientes'])
  }
}
