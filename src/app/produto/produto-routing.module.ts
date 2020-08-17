import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCrudComponent } from '../produto/produto-crud/produto-crud.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCrudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
