import { Component, OnInit } from '@angular/core';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { Colecoes } from 'src/app/tipos/colecoes';


@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.scss']
})
export class CriarModeloComponent implements OnInit{
  colecoes!:Colecoes[];
  constructor(private colecoesService:ColecoesService){}
  ngOnInit(): void {
    this.colecoesService.getColecoes().subscribe(data => this.colecoes = data);
  }
   

}
