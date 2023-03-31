import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
  
  constructor(private router: Router){}
  
  logOut(){
    console.log("saindo")
    localStorage.setItem('Logado', 'false');
    this.router.navigate(['/login']);
  }  
}
