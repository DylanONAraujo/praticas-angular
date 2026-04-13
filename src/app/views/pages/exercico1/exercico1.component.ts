import { Component, EventEmitter, NgModule, OnInit, Output, } from '@angular/core';
import { tarefas } from '../../../core/model/tarefas';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'vex-exercico1',
  templateUrl: './exercico1.component.html',
  styleUrls: ['./exercico1.component.scss']
})

export class Exercico1Component implements OnInit {
  displayedColumns: string[] = ['id', 'descricao', 'status'];
  dataSource: MatTableDataSource<tarefas> = new MatTableDataSource<tarefas>([]);
  tarefas: tarefas[] = []; // alterar para receber do backend - Tarefas:
  // color: string = 'secondary';

  form!: FormGroup;


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

    this.dataSource = new MatTableDataSource(this.tarefas);
  }

  adicionarTarefa(nova: Partial<tarefas>) {
    const tarefas = {
      id: this.tarefas.length + 1, 
      descricao: nova.descricao!,
      status: nova.status!
    };

    this.tarefas = [...this.tarefas, tarefas];
    this.dataSource.data = this.tarefas;
    // console.log('Recebido no pai:', nova);
  }

}
