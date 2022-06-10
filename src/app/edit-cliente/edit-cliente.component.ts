import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  clienteService: ClienteService

  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService
   }

  ngOnInit(): void {
  }

  onSubmit(submittedForm: any) {
    if (submittedForm.invalid) {
      return
    }
    console.log(submittedForm.value)
    this.clienteService.createCliente(
      submittedForm.value.nome,
      submittedForm.value.endereco,
      submittedForm.value.numero,
      submittedForm.value.complemento,
      submittedForm.value.dddcelular,
      submittedForm.value.numcelular,
      submittedForm.value.dddtelefone,
      submittedForm.value.numtelefone,
      submittedForm.value.email
    )
  }
}
