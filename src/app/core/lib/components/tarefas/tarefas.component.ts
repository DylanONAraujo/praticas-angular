import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tarefas } from '../../../model/tarefas';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'vex-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  @Output() tarefaCriada = new EventEmitter<tarefas>();
  tarefas: tarefas[] = [];

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: ['']
    });
  }

  adicionarTarefa() {
    const nova: Partial<tarefas> = {
      // id: this.tarefas.length + 1,
      descricao: this.form.value.descricao,
      status: false
    };

    // console.log('Emitindo tarefa:', nova);

    this.tarefaCriada.emit(nova as tarefas);
    this.form.reset();
  }

}
