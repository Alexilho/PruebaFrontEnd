import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  peliculas:Pelicula[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getPelicula().subscribe(data=>{
      this.peliculas=data;
    })
  }
}
