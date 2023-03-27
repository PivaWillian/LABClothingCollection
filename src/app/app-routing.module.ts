import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { CadastramentoComponent } from './pages/cadastramento/cadastramento.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperacaoComponent } from './pages/recuperacao/recuperacao.component';

const routes: Routes = [

  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  // {  path: '', component: ContentComponent, children:[
  //   { path: 'login', component: LoginComponent },
  //   { path: 'cadastro', component: CadastramentoComponent },
  //   { path: 'recuperacao', component: RecuperacaoComponent}
  // ]
  // },
  // {
  //   path: '', component: FullComponent, children: [
  //     {path: 'home', component: HomeComponent},
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
