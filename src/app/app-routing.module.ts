import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { CadastramentoComponent } from './pages/cadastramento/cadastramento.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {  path: '', component: ContentComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastramentoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
