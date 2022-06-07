import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(submittedForm: any) {
    if (submittedForm.invalid) {
      return
    }
    console.log(submittedForm.value)
  }
}
