import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CrearListaComponent } from './pages/crear-lista/crear-lista.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModificarListaComponent } from './pages/modificar-lista/modificar-lista.component';
import { ListaComponent } from './pages/cancionMod/lista.component';
import { MislistasComponent } from './pages/mislistas/mislistas.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'inicio',
        component:InicioComponent
      },
      {
        path:'buscar',
        component:BuscarComponent
      },
      {
        path:'crear-lista',
        component:CrearListaComponent
      },
      {
        path:'modificar/:id',
        component:ModificarListaComponent
      },
      {
        path:'modcancion/:lista/:name',
        component:ListaComponent
      },
      {
        path:'mislistas',
        component:MislistasComponent
      },
      {
        path:'**',
        redirectTo:'inicio'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReproductorRoutingModule { }
