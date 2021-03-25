import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema';

  constructor(private router:Router){
  }
  Listar(){
    this.router.navigate(["listar"]);
  }
  Buscar(){
    this.router.navigate(["buscar"]);
  }
  Editar(){
    this.router.navigate(["editar"]);
  }
  Eliminar(){
    this.router.navigate(["eliminar"])
  }
  Crear(){
    this.router.navigate(["crear"])
  }
  Top(){
    this.router.navigate(["top"]);
  }
}
