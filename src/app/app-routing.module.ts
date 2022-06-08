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
    path: 'orcamentos',
    component: OrcamentosComponent
  },
  {
    path: 'cliente-detalhe',
    component: EditClienteComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
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
