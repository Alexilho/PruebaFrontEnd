import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './modulo2/crear/crear.component';
import { EditarComponent } from './Pelicula/editar/editar.component';
import { EliminarComponent } from './Pelicula/eliminar/eliminar.component';
import { ListarComponent } from './modulo1/listar/listar.component';
import { BuscarComponent} from './modulo1/buscar/buscar.component';
import { TopComponent } from './modulo2/top/top.component';

const routes: Routes = [
  {path:'editar', component:EditarComponent}, 
  {path:'eliminar', component:EliminarComponent},
  {path:'listar', component:ListarComponent},
  {path: 'crear', component:CrearComponent},
  {path: 'buscar', component:BuscarComponent},
  {path: 'top', component:TopComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
