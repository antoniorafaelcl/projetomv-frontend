import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { ProdutoDTO } from '../model/produto-dto.model';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.css']
})
export class ProdutoCrudComponent implements OnInit {

  formProduto: FormGroup;
  produto: ProdutoDTO;
  idProdutoEditar: number;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formProduto = this.formBuilder.group({
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
      idCategoria: ['', Validators.required],
      codigo:[null]
    });

    if(this.activatedRoute.snapshot.queryParams.id){
      this.visualizarEditar(this.activatedRoute.snapshot.queryParams.id);
    }
  }

  salvar(): void {

    if(this.formProduto.controls['codigo'].value){
      this.produtoService.editarProduto(this.formProduto.value).subscribe(res => {
        alert(res.mensagem)
      })
    } else {
      this.produtoService.salvarProduto(this.formProduto.value).subscribe(res => {
        alert(res.mensagem)
      });
    }
  }

  visualizarEditar(id: number): void {
    this.produtoService.getProdutoPorCodigo(id).subscribe(res => {
      this.formProduto.controls['codigo'].setValue(res.id);
      this.formProduto.controls['descricao'].setValue(res.descricao);
      this.formProduto.controls['preco'].setValue(res.preco);
      this.formProduto.controls['idCategoria'].setValue(res.categoria.id);
    })
  }

}
