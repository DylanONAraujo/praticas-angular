import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vex-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {
  mensagem: string ='';
  user: {nome: string, idade: number, sexo:string, cpf: string}[] = [];


  mensagemRecedida(mensagemPai:string){
    this.mensagem = mensagemPai;
  }


  usuarioRecebido(usuario: {nome: string, idade: number, sexo:string, cpf: string}){
    this.user.push(usuario);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
