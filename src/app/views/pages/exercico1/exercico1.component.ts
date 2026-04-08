import { Component, NgModule, OnInit, } from '@angular/core';
import { tarefas } from '../../../core/model/tarefas';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'vex-exercico1',
  templateUrl: './exercico1.component.html',
  styleUrls: ['./exercico1.component.scss']
})

export class Exercico1Component implements OnInit {
  displayedColumns: string[] = ['id', 'descricao', 'status'];
  tarefas: tarefas[] = []; // alterar para receber do backend - Tarefas:
  // color: string = 'secondary';


  form!: FormGroup;
  novaTarefa: String = '';

  constructor(private fb: FormBuilder) { 

  }
  ngOnInit() {
  
  this.form = this.fb.group({
    descricao: ['']
  });
    this.tarefas = [
      {
        id: 1, descricao: 'Revisar conceitos de componentização',
        status: false
      },
      {
        id: 2, descricao: 'Praticar a exibição de listas', status:
          false
      },
    ];
  }

  adcionarTarefa(){
  const descricao = this.form.get('descricao')?.value;

  const add = {
    id: this.tarefas.length + 1,
    descricao: descricao,
    status: false
  };

  this.tarefas = [...this.tarefas, add];

  this.form.reset();
}

}
