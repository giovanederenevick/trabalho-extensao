import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-produtos',
  templateUrl: './item-produtos.component.html',
  styleUrls: ['./item-produtos.component.css']
})
export class ItemProdutosComponent implements OnInit {

  @Input() produto: any

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {

  }

}
