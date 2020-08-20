import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  produtos:Array<any>;
  formAjustePorCategoria: FormGroup;
  formAjustePorRangePercentual: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.produtoService.getTodosProdutos().subscribe(res => {
      this.produtos = new Array<any>();
      if(res){
        this.produtos = res;
      }
    });

    this.formAjustePorCategoria = this.formBuilder.group({
      preco: [''],
      categoria: ['']
    });

    this.formAjustePorRangePercentual = this.formBuilder.group({
      preco: [''],
      percentualInicial: [''],
      percentualFim: ['']
    });
  }

  editar (id: number) {
    this.router.navigate(['/produto/cadastroEdicao'], {queryParams:{id: id}});

  }

  excluir(id: number): void {
    this.produtoService.deletarProduto(id).subscribe( res => {
      alert(res.mensagem)
      location.reload();
    })
  }

  ajustarPrecoCategoria() {
    this.produtoService.ajustarProdutoPorCategoria(this.formAjustePorCategoria.value.categoria, this.formAjustePorCategoria.value.preco).subscribe(res => {
      alert(res.mensagem)
    })
  }

  ajustarPrecoRange() {
    this.produtoService.ajustarProdutoPorRangePercentual(this.formAjustePorRangePercentual.value.percentualInicial,
    this.formAjustePorRangePercentual.value.percentualFim, this.formAjustePorRangePercentual.value.preco).subscribe(res => {
    alert(res.messagem);
    })
  }
}
