import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pelicula : Pelicula=new Pelicula();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = 0;
    if (id != null){
      localStorage.getItem("id");
      this.service.getPeliculaID(id)
      .subscribe(data=>{
        this.pelicula=data;
      })
    }
  }
  Actualizar(pelicula:Pelicula){
    this.service.updatePelicula(pelicula).
    subscribe(data=>{
      this.pelicula=data;
      alert("Actualización de pelicula exitosa");
      this.router.navigate(["listar"]);
    })
  }
}
