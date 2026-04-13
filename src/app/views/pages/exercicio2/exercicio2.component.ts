import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tarefas } from '../../../core/model/tarefas';
import { TarefaApiService } from '../../../core/services/tarefa-api.service';

@Component({
  selector: 'vex-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.scss']
})
export class Exercicio2Component implements OnInit {
  displayedColumns: string[] = ['id', 'descricao', 'status'];
  tarefas: tarefas[] = []; // alterar para receber do backend - Tarefas:

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form!: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private tarefasApi: TarefaApiService) {
    this.form = this.fb.group({
      descricao: ['']
    });
    this.tarefasApi.getTarefas().subscribe({
      next: response => {

        if (response != null) {
          this.tarefas = response
        }
      },
      error: err => console.error('falha ao buscar tarefas', err)
    });
  }

  ngOnInit() {

  }

}
