import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { Exercico1Component } from './views/pages/exercico1/exercico1.component';
import { Exercicio2Component } from './views/pages/exercicio2/exercicio2.component';


const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
       { path: 'exercico1', component: Exercico1Component},
       { path: 'exercicio2', component: Exercicio2Component},
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
