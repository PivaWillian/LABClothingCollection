import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';
import { Colecoes } from 'src/app/tipos/colecoes';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  models!: Modelos[];
  collections!: Colecoes[];
  dashboard = true;

  constructor(private colecoesService: ColecoesService,
    private modelosService: ModelosService) { }

  ngOnInit(): void {
    this.modelosService.getModelos().subscribe(data => {
      this.models = data;
    });

    this.colecoesService.getColecoes().subscribe(data =>{
      this.collections = data;
    });
  }  

}
