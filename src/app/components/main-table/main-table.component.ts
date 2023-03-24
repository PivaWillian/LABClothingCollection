import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Colecoes } from 'src/app/tipos/colecoes';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnChanges{

  @Input() modelos!: Modelos[];
  @Input() colecoes!: Colecoes[];
  

  ngOnChanges() {
    this.ordenaValor();
  }

  ordenaValor() {
    this.colecoes.sort((a, b) => (a.orcamento > b.orcamento ? -1 : 1));
  }

  
}
