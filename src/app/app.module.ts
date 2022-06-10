import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { FormsModule } from '@angular/forms';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ItemClienteComponent } from './item-cliente/item-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaOrcamentosComponent } from './lista-orcamentos/lista-orcamentos.component';
import { ItemOrcamentosComponent } from './item-orcamentos/item-orcamentos.component';
import { ItemProdutosComponent } from './item-produtos/item-produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { EditOrcamentoComponent } from './edit-orcamento/edit-orcamento.component';
import { ListaDetalhePedidoComponent } from './lista-detalhe-pedido/lista-detalhe-pedido.component';
import { ItemDetalhePedidoComponent } from './item-detalhe-pedido/item-detalhe-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientesComponent,
    OrcamentosComponent,
    ListaClientesComponent,
    ItemClienteComponent,
    EditClienteComponent,
    ProdutosComponent,
    ListaOrcamentosComponent,
    ItemOrcamentosComponent,
    ItemProdutosComponent,
    ListaProdutosComponent,
    EditProdutoComponent,
    EditOrcamentoComponent,
    ListaDetalhePedidoComponent,
    ItemDetalhePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
