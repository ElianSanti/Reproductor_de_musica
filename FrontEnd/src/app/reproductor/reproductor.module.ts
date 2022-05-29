import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReproductorRoutingModule } from './reproductor-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CrearListaComponent } from './pages/crear-lista/crear-lista.component';
import { ModificarListaComponent } from './pages/modificar-lista/modificar-lista.component';
import { ListaComponent } from './pages/cancionMod/lista.component';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MislistasComponent } from './pages/mislistas/mislistas.component';


@NgModule({
  declarations: [
    InicioComponent,
    BuscarComponent,
    CrearListaComponent,
    ModificarListaComponent,
    ListaComponent,
    BuscadorComponent,
    MislistasComponent
  ],
  imports: [
    CommonModule,
    ReproductorRoutingModule,
    FormsModule
  ]
})
export class ReproductorModule { }
