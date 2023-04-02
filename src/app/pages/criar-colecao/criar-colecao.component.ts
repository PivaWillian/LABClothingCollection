import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent implements OnInit{
  criar:boolean = true
  routeID:any;
  constructor(private active:ActivatedRoute){}

  ngOnInit(): void {
    this.routeID = this.active.snapshot.params['id'];
    if(this.routeID && this.routeID>0){
      this.criar = false;
    }
  }
}
