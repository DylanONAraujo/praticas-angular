import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { tarefas } from '../../../core/model/tarefas';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'vex-exercico1',
  templateUrl: './exercico1.component.html',
  styleUrls: ['./exercico1.component.scss']
})
export class Exercico1Component implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'descricao', 'status'];
  dataSource!: MatTableDataSource<tarefas>;
  tarefas: tarefas[] = []; // alterar para receber do backend - Tarefas:


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form!: FormGroup;
  novaTarefa: String = '';


  
  constructor(private fb: FormBuilder, private dialog: MatDialog) { 

  }
  ngOnInit() {
  
  this.form = this.fb.group({
    descricao: ['']
  });
    this.tarefas = [
      {
        id: 1, descricao: 'Revisar conceitos de componentização',
        status: "true"
      },
      {
        id: 2, descricao: 'Praticar a exibição de listas', status:
          "false"
      },
    ];
    this.dataSource = new MatTableDataSource(this.tarefas);
    console.log(this.tarefas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  adcionarTarefa(){
  const descricao = this.form.get('descricao')?.value;

  const add = {
    id: this.tarefas.length + 1,
    descricao: descricao,
    concluida: false
  };

  this.dataSource.data = [...this.tarefas, add];
  this.tarefas = this.dataSource.data;

  this.form.reset();
}


alterarStatus(index: number, checked: boolean) {
  this.dataSource.data[index].status = checked ? 'true' : 'false';
  this.dataSource.data = [...this.dataSource.data];
}

}
