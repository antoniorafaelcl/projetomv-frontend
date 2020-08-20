import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';


@NgModule({
  declarations: [ProdutoCrudComponent, ProdutoListaComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProdutoModule { }
