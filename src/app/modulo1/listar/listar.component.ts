import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  peliculas:Pelicula[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getPelicula().subscribe(data=>{
      this.peliculas=data;
    })
  }
  //metodo para capturar datos de pelicula y redirigir a editar
  Editar(pelicula:Pelicula):void{
    localStorage.setItem("id",pelicula.id.toString());
    this.router.navigate(["editar"]);
  }
  //metodo para eliminar pelicula
  Eliminar(pelicula:Pelicula):void{
    this.service.deletePelicula(pelicula).
    subscribe(data=>{
      this.peliculas=this.peliculas.filter(p=>p!==pelicula);
      alert("Eliminación pelicula exitosa");
    })
  }
}
