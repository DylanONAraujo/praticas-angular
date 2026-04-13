import { Component, OnInit } from '@angular/core';

const produtos = [
  { id: 1, nome: 'Arroz', detalhe: 'Pacote 1kg', marca: 'Riviera', preco: '5.00' },
  { id: 2, nome: 'Feijão', detalhe: 'Tipo carioca 1kg', marca: 'Kicaldo', preco: '8.00' },
  { id: 3, nome: 'Macarrão', detalhe: 'Espaguete 1kg', marca: 'Amalia', preco: '5.20' },
  
];

@Component({
  selector: 'vex-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'detalhe', 'marca', 'preco'];
  produto = produtos;
  products: String[] = [];

  addToCart(newProduct: string){
    this.products.push(newProduct);
  }

  remover(produto: string) {
  this.products = this.products.filter(p => p !== produto);
}


  constructor() { }

  ngOnInit(): void {
  }

}
