import { Component, OnInit } from '@angular/core';
import { CarrosApiService } from '../../../core/services/carros/carros-api.service';

@Component({
  selector: 'vex-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.scss']
})
export class Exercicio3Component implements OnInit {

  constructor(private carrosApi: CarrosApiService) { }

  ngOnInit(): void {
  }

  todosCarros() {
    this.carrosApi.getCarros().subscribe(carros =>{
      console.log("Tudo certo!");
      console.log(carros);
    }, (error)=> {
      console.log(error);
    });
  }

}
