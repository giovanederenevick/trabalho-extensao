import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-orcamento',
  templateUrl: './edit-orcamento.component.html',
  styleUrls: ['./edit-orcamento.component.css']
})
export class EditOrcamentoComponent implements OnInit {

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
