import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'vex-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  @Output() addToCartEvent = new EventEmitter<string>();

  addToCart(product: string){
    this.addToCartEvent.emit(product);
  }

  products = [
     {
      nome: 'Arroz',
      descricao: 'Pacote 5kg',
      preco: 5,
      imagem: 'assets/img/products/arroz-branco.jpeg'
    },
    {
      nome: 'Feijão',
      descricao: 'Carioca 1kg',
      preco: 8,
      imagem: 'assets/img/products/feijao-carioca.jpeg'
    },
    {
      nome: 'Espaguete',
      descricao: 'Amália 500g',
      preco: 4,
      imagem: 'assets/img/products/espaguete-amalia.jpeg'
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
