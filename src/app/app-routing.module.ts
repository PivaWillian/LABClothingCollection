import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { CadastramentoComponent } from './pages/cadastramento/cadastramento.component';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';
import { CriarColecaoComponent } from './pages/criar-colecao/criar-colecao.component';
import { CriarModeloComponent } from './pages/criar-modelo/criar-modelo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { RecuperacaoComponent } from './pages/recuperacao/recuperacao.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {  path: '', component: ContentComponent, children:[
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastramentoComponent },
    { path: 'recuperacao', component: RecuperacaoComponent}
  ]
  },
  {
    path: '', component: FullComponent, children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'colecoes', component: ColecoesComponent, canActivate: [AuthGuard] },
      { path: 'modelos', component: ModelosComponent, canActivate: [AuthGuard] },
      { path: 'editcol/:id', component: CriarColecaoComponent, canActivate: [AuthGuard]},
      { path: 'editmodel/:id', component: CriarModeloComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
