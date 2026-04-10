import { Component, Input, OnInit } from '@angular/core';

export interface carro {
  nome: string;
  id: number;
  marca: string;
  preco: string;
}

@Component({
  selector: 'vex-tabela-carros',
  templateUrl: './tabela-de-carros.component.html',
  styleUrls: ['./tabela-de-carros.component.scss']
})
export class TabelaDeCarrosComponent implements OnInit {
    @Input() displayedColumns: string[] = ['id', 'nome', 'marca', 'preco'];
    @Input() dataSource: any;

  constructor() { }

  ngOnInit(): void {
  }

}
