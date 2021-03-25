import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  //Metodo de busqueda entre la tabla de peliculas
  transform(value: any, ...arg: any): any {
    const resultPosts = [];
    for(const pelicula of value){
      if(pelicula.tittle.indexOf(arg)> -1){
        resultPosts.push(pelicula);
      };
    };
    return resultPosts; 
  }

}
