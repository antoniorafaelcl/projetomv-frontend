import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';


@NgModule({
  declarations: [ProdutoCrudComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
