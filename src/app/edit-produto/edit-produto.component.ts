import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

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
