import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vex-componentizacao',
  templateUrl: './componentizacao.component.html',
  styleUrls: ['./componentizacao.component.scss']
})
export class ComponentizacaoComponent implements OnInit {
  @Input() label: string = 'Clique Aqui';
  @Input() color: string = 'primary';
  

  constructor() { }

  ngOnInit(): void {
  }

  alertaClick(){
    alert(`Você clicou no botão: ${this.color}`);
  }

}
