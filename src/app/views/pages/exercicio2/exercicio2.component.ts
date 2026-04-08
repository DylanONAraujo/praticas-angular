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
  dataSource!: MatTableDataSource<tarefas>;
  tarefas: tarefas[] = []; // alterar para receber do backend - Tarefas:

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form!: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private tarefasApi: TarefaApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      descricao: ['']
    });
    this.tarefasApi.getTarefas().subscribe({
      next: response => {
        console.log('dados recebidos da API', response);
        this.tarefas = Array.isArray(response) ? response : response?.tarefas || [];
        this.dataSource = new MatTableDataSource(this.tarefas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: err => console.error('falha ao buscar tarefas', err)
    });
  }


  alterarStatus(index: number, checked: boolean) {
    this.dataSource.data[index].status = checked ? true : false;
    this.dataSource.data = [...this.dataSource.data];
  }

}
