import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) {
   }

   Guardar(pelicula:Pelicula){
    this.service.createPelicula(pelicula).subscribe(data=>{
      alert("Se ha añadido la pelicula");
      this.router.navigate(["listar"]);
    })
  }
  ngOnInit(): void {
  }
}
