import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  peliculas:Pelicula[];
  constructor(private service:ServiceService, private router:Router) { }

  //comienza con un filtro vacío
  filterPost = '';
  ngOnInit(){
    this.service.getPelicula().subscribe(data=>{
      this.peliculas=data;
    })
  }
}
