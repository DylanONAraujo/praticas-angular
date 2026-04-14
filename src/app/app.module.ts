import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { Exercico1Component } from './views/pages/exercico1/exercico1.component';
import { Exercicio2Component } from './views/pages/exercicio2/exercicio2.component';
import {FormControl, Validators} from  '@angular/forms' ;
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Exercicio3Component } from './views/pages/exercicio3/exercicio3.component';
import { TableComponent } from './core/lib/components/table/table.component';
import { CommonModule } from '@angular/common';
import { CarrosComponent } from './views/pages/carros/carros.component';
import { TarefasComponent } from './core/lib/components/tarefas/tarefas.component';
import { EcommerceComponent } from './views/pages/ecommerce/ecommerce.component';
import { ProdutosComponent } from './core/lib/components/produtos/produtos.component';
import { MatCardModule } from '@angular/material/card';
import { PaiComponent } from './views/pages/pai/pai.component';
import { FilhoComponent } from './core/lib/components/filho/filho.component';
import { FilhoDoisComponent } from './core/lib/components/filho-dois/filho-dois.component';
import { NbActionsModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbProgressBarModule } from '@nebular/theme';

;



@NgModule({
  declarations: [AppComponent, Exercicio2Component, Exercico1Component, Exercicio3Component, TableComponent, CarrosComponent, ProdutosComponent, TarefasComponent, EcommerceComponent, PaiComponent, FilhoComponent, FilhoDoisComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FlexLayoutModule,
    MatCheckboxModule,
    CommonModule,
    MatCardModule,
    NbActionsModule,
    NbCardModule,
    NbProgressBarModule,


    // Vex
    VexModule,
    CustomLayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
