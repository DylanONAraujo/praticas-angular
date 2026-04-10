import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { tarefas } from '../../../model/tarefas';
import { TarefaApiService } from '../../../services/tarefa-api.service';

@Component({
  selector: 'vex-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] = ['id', 'descricao', 'status'];
  @Input() dataSource!: MatTableDataSource<tarefas>;
  @Input() tarefas: tarefas[] = []; // alterar para receber do backend - Tarefas:


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form!: FormGroup;
  novaTarefa: String = '';


  constructor(private fb: FormBuilder, private dialog: MatDialog, private tarefasApi: TarefaApiService) {

    // for (let i = 0; i < this.displayedColumns.length; i++) {
    //   let colunas = this.displayedColumns[i];
    // }
  }

  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.tarefas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  alterarStatus(index: number, checked: boolean) {
    this.dataSource.data[index].status = checked ? true : false;
    this.dataSource.data = [...this.dataSource.data];
  }

}
