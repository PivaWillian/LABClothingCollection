import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelosService } from 'src/app/services/modelos.service';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {
  modelos: Modelos[] = []

  constructor(private modelosService: ModelosService, private router:Router) { }

  criarModelo() {
    this.router.navigate(['/editmodel/criar'])
  }
  
  ngOnInit(): void {
    this.modelosService.getModelos().subscribe(data => this.modelos = data)
  }
}
