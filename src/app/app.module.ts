import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CadastramentoComponent } from './pages/cadastramento/cadastramento.component';
import { RecuperacaoComponent } from './pages/recuperacao/recuperacao.component';
import { HomeComponent } from './pages/home/home.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import{ HttpClientModule } from '@angular/common/http';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';
import { CollectionTableComponent } from './components/collection-table/collection-table.component';
import { CriarColecaoComponent } from './pages/criar-colecao/criar-colecao.component';
import { CriarModeloComponent } from './pages/criar-modelo/criar-modelo.component';
import { ModelTableComponent } from './components/model-table/model-table.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    LoginComponent,
    CadastramentoComponent,
    RecuperacaoComponent,
    HomeComponent,
    MainTableComponent,
    ColecoesComponent,
    CollectionTableComponent,
    CriarColecaoComponent,
    CriarModeloComponent,
    ModelTableComponent,
    ModelosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
