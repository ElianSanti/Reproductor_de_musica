import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'reproductor',
    loadChildren:()=>import ('./reproductor/reproductor.module').then(m=>m.ReproductorModule)
  },
  {
    path:'**',
    redirectTo:'reproductor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
