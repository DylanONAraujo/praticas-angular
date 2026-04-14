import { Component, OnInit } from '@angular/core';

const carros = [
  { id: 1, nome: 'Ferrari 488', marca: 'Ferrari', preco: ' entre R$ 2,5 milhões e R$ 3 milhões' },
  { id: 2, nome: 'Lamborghini Aventador', marca: 'Lamborghini', preco: 'entre R$ 3,5 milhões e R$ 5 milhões+' },
  { id: 3, nome: 'Porsche 911', marca: 'Porsche', preco: 'entre R$ 930 mil e R$ 1,3 milhão+' },
  { id: 4, nome: 'Nissan GT-R', marca: 'Nissan', preco: 'entre R$ 800 mil e R$ 1,5 milhão' },
];

@Component({
  selector: 'vex-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'marca', 'preco'];
  carro = carros;


  constructor() { }

  ngOnInit(): void {
  }

}
