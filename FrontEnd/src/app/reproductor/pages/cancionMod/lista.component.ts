import { Component, OnInit } from '@angular/core';
import { Song } from '../../interfaces/lista.interface';
import { MusicaService } from '../../services/musica.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nombreLista:string = ''
  nombreCancion:string = ''

  cancion:Song ={
    title: '',
    artist: '',
    album: '',
    year: '',
    img: '',
    url: ''
  }

  constructor(private musica:MusicaService, private rute:ActivatedRoute) { }

  ngOnInit(): void {
    this.rute.params.subscribe(({name,lista})=>{
      this.nombreLista = lista
      this.nombreCancion = name
      console.log(this.nombreCancion)
      this.musica.buscarCancionPorNombre(lista,name)
        .subscribe(m=>{
          this.cancion = m
        })
    })
  }

  guardar(){
    this.musica.modificarCancion(this.nombreLista,this.nombreCancion,this.cancion)
      .subscribe(m=>console.log(m))
  }
}
