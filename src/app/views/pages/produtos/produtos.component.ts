import { Component, OnInit } from '@angular/core';


const produtos = [
  {id: 1, nome: 'Arroz', detalhe: 'Pacote 5kg', marca: 'Tio João', preco: '25.90'},
  {id: 2, nome: 'Feijão', detalhe: 'Tipo carioca 1kg', marca: 'Kicaldo', preco: '8.50'},
  {id: 3, nome: 'Macarrão', detalhe: 'Espaguete 500g', marca: 'Renata', preco: '5.20'},
  {id: 4, nome: 'Óleo de soja', detalhe: 'Garrafa 900ml', marca: 'Liza', preco: '7.80'},
  {id: 5, nome: 'Leite', detalhe: 'Integral 1L', marca: 'Itambé', preco: '4.90'},
  {id: 6, nome: 'Café', detalhe: 'Tradicional 500g', marca: 'Pilão', preco: '14.70'},
  {id: 7, nome: 'Açúcar', detalhe: 'Refinado 1kg', marca: 'União', preco: '4.30'},
  {id: 8, nome: 'Detergente', detalhe: 'Neutro 500ml', marca: 'Ypê', preco: '2.50'},
  {id: 9, nome: 'Sabão em pó', detalhe: 'Pacote 2kg', marca: 'Omo', preco: '22.90'},
  {id: 10, nome: 'Refrigerante', detalhe: 'Coca-Cola 2L', marca: 'Coca-Cola', preco: '9.90'}
];

@Component({
  selector: 'vex-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'nome', 'detalhe', 'marca', 'preco'];
  produto = produtos;

  constructor() { }

  ngOnInit(): void {
  }

}
