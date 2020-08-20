import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProdutoDTO } from '../produto/model/produto-dto.model';

const URL_BASE = 'http://localhost:8080/projetomv-backend/api/v1/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private httpClient: HttpClient,
    ) { }

  getTodosProdutos(): Observable <any> {
    return this.httpClient.get(URL_BASE);
  }

  getProdutoPorCodigo(codigo: number): Observable<any>{
    return this.httpClient.get(`${URL_BASE}/${codigo}`);
  }

  salvarProduto(produtoDTO : ProdutoDTO): Observable<any>{
    return this.httpClient.post(URL_BASE, produtoDTO);
  }

  editarProduto(produtoDTO : ProdutoDTO): Observable<any>{
    return this.httpClient.put(URL_BASE, produtoDTO);
  }

  deletarProduto(codigo: number): Observable<any>{
    return this.httpClient.delete(URL_BASE + '/' + codigo);
  }

  ajustarProdutoPorCategoria(categoria: string, preco: number): Observable<any>{
    return this.httpClient.put(URL_BASE + '/ajuste-preco-categoria?categoria=' + categoria + "&preco=" + preco, null);
  }

  ajustarProdutoPorRangePercentual(percentualInicial: number, percentualFim: number, preco: number): Observable<any>{
    return this.httpClient.put(URL_BASE
      + '/ajuste-preco-range-categoria?percentualInicial=' + percentualInicial
      + "&percentualFim=" + percentualFim
      + "&preco=" + preco, null);
  }

}
