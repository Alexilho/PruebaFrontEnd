import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarComponent } from './Pelicula/editar/editar.component';
import { EliminarComponent } from './Pelicula/eliminar/eliminar.component';
import { CrearComponent } from './modulo2/crear/crear.component';
import { ListarComponent } from './modulo1/listar/listar.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { GuardarComponent } from './Pelicula/guardar/guardar.component';
import { TopComponent } from './modulo2/top/top.component';
import { BuscarComponent } from './modulo1/buscar/buscar.component';
import { FilterPipe } from './pipes/filter.pipe';  


@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    EliminarComponent,
    CrearComponent,
    ListarComponent,
    GuardarComponent,
    TopComponent,
    BuscarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
