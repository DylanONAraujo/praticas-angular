import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { Exercico1Component } from './views/pages/exercico1/exercico1.component';
import { Exercicio2Component } from './views/pages/exercicio2/exercicio2.component';
import { Exercicio3Component } from './views/pages/exercicio3/exercicio3.component';
import { ComponentizacaoComponent } from './views/pages/componentizacao/componentizacao.component';
import { CarrosComponent } from './views/pages/carros/carros.component';
import { ProdutosComponent } from './views/pages/produtos/produtos.component';


const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
       { path: 'exercico1', component: Exercico1Component},
       { path: 'exercicio2', component: Exercicio2Component},
       { path: 'exercicio3', component: Exercicio3Component},
       { path: 'componentizacao', component: ComponentizacaoComponent},
       { path: 'carros', component: CarrosComponent},
       { path: 'produtos', component: ProdutosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
