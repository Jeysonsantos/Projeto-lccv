import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesCadastroComponent } from './detalhes-cadastro/detalhes-cadastro.component'
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';

const routes: Routes = [
  { path:  'detalhes-cadastro/:id', component: DetalhesCadastroComponent},
  { path: 'novo-cadastro', component: NovoCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ DetalhesCadastroComponent, ]
