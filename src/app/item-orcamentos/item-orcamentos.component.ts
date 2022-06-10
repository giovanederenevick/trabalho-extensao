import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-orcamentos',
  templateUrl: './item-orcamentos.component.html',
  styleUrls: ['./item-orcamentos.component.css']
})
export class ItemOrcamentosComponent implements OnInit {

  @Input() orcamento: any

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    console.log('Editar cliente')
  }
}
