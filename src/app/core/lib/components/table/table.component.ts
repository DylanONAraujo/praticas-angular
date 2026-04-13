import { Component, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  dataSource: MatTableDataSource<tarefas> = new MatTableDataSource();
  @Input() dados: any; // alterar para receber do backend - Tarefas:
  @Output() 


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form!: FormGroup;
  novaTarefa: String = '';

  adicionarTarefa(nova: tarefas) {
    this.dataSource.data = [...this.dataSource.data, nova];
  }


  constructor(private fb: FormBuilder, private dialog: MatDialog, private tarefasApi: TarefaApiService) {
  }

  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.dados);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dados'] && changes['dados'].currentValue) {
      this.dataSource.data = changes['dados'].currentValue;
    }
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
