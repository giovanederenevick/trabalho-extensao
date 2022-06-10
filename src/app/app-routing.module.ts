import { EditOrcamentoComponent } from './edit-orcamento/edit-orcamento.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { ItemProdutosComponent } from './item-produtos/item-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'cliente-detalhe',
    component: EditClienteComponent
  },
  {
    path: 'pedidos',
    component: OrcamentosComponent
  },
  {
    path: 'pedido-detalhe',
    component: EditOrcamentoComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produto-detalhe',
    component: EditProdutoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
