import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'vex-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {
  @Output() mensagemEvent = new EventEmitter<string>();
  @Output() usuarioCriadoEvent = new EventEmitter<{nome:string, idade: number, sexo:string, cpf: string}>();
  //  @Output() usuarioCriadoEvent = new EventEmitter<string>();

  //  user = {nome:'Dylan Araujo', idade: 28, sexo:'Masculino', cpf:'125.478.259-54'};

  enviarMensagem(){
    this.mensagemEvent.emit('Batatinha Dev, indo pra cima.');
  }

  usuario() {
    const user = {nome:'Dylan Araujo', idade: 28, sexo:'Masculino', cpf:'125.478.259-54'};
    this.usuarioCriadoEvent.emit(user);
  }


  // usuario(user: string) {
    
  //   this.usuarioCriadoEvent.emit(user);
  // }

  


  
  constructor() { }

  ngOnInit(): void {
  }

}
