import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ModelosService } from 'src/app/services/modelos.service';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.scss']
})
export class CriarModeloComponent {
  title: string = 'Criar Modelo'
  // model: Modelos | undefined;
  // constructor(private modelosService: ModelosService) { }

  // async ngOnInit(){
  //   this.model = await this.modelosService.getModelo(1).toPromise();
  //   console.log(this.model)
  // }

}
