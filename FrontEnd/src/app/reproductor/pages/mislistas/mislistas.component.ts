import { Component, OnInit } from '@angular/core';
import { Lista } from '../../interfaces/lista.interface';
import { MusicaService } from '../../services/musica.service';

@Component({
  selector: 'app-mislistas',
  templateUrl: './mislistas.component.html',
  styleUrls: ['./mislistas.component.css']
})
export class MislistasComponent implements OnInit {

  listas:Lista[]=[]

  constructor(private musica:MusicaService) { }

  ngOnInit(): void {
    this.musica.obtenerListas()
      .subscribe(l=>{
        this.listas = l
        console.log(this.listas)
      })
  }

  buscarLista(termino:string){
    this.listas = []
    this.musica.buscarPorNombre(termino)
      .subscribe(l=>{
        this.listas = l
      })
  }

  eliminarLista(nombre:string,index:number){
    this.musica.eliminarPorNombre(nombre)
      .subscribe(m=>{
        this.listas.splice(index)
        console.log(m)
      })
  }
}
