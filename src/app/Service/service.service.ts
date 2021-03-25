import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pelicula} from '../Modelo/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  //Esta es la dirección de comunicación al BackEnd
  backendUrl='http:/localhost:8080/sistema/pelicula';

  //Añadimos los metodos correspondientes acompañados del servicio
  getPelicula(){
    return this.http.get<Pelicula[]>(this.backendUrl);
  }
  createPelicula(pelicula:Pelicula){
    return this.http.post<Pelicula>(this.backendUrl,Pelicula);
  }
  getPeliculaID(id:number){
    return this.http.get<Pelicula>(this.backendUrl+"/"+id);
  }
  updatePelicula(pelicula:Pelicula){
    return this.http.put<Pelicula>(this.backendUrl+"/"+pelicula.id,pelicula);
  }
  deletePelicula(pelicula:Pelicula){
    return this.http.delete<Pelicula>(this.backendUrl+"/"+pelicula.id);
  }
}
