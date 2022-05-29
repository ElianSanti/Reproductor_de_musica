import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../interfaces/cancion.interface';
import { Song, Lista } from '../../interfaces/lista.interface';
import { MusicaService } from '../../services/musica.service';

@Component({
  selector: 'app-modificar-lista',
  templateUrl: './modificar-lista.component.html',
  styleUrls: ['./modificar-lista.component.css']
})
export class ModificarListaComponent implements OnInit {
  cancionesSug:Result[]=[]
  termino:string = ''
  rute:string = ''
  songs:Song[] = []

  lista:Lista = {
    name: '',
    description: '',
    songs: []
  }

  

  constructor(private musica:MusicaService, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(({id})=>{
      this.rute = id
      this.musica.buscarPorNombre(id).subscribe(m=>{
        this.lista.name = m[0].name
        this.lista.description = m[0].description
        this.songs = m[0].songs
      })
    })
  }

  guardar(){
    this.lista.songs = this.songs
    this.musica.modificarLista(this.rute, this.lista).subscribe(m=>console.log(m))
  }

  sugerencias(termino:string){
    this.termino = termino;
    this.musica.getCancionesNombre(termino)
    .subscribe(m=>{
      this.cancionesSug = m;
    })
  }

  addSong(name:string,artist:string,album:string,year:Date,img:string, url:string){
    const año = year.toString()
    const cancion ={
      title:name,
      artist: artist,
      album:  album,
      year:   año,
      img:    img,
      url:    url
    }
    this.songs.push(cancion)
  }

  eliminarCancion(nombreCancion:string, index:number){
    this.musica.eliminarCancion(this.rute,nombreCancion).subscribe(m=>{
      console.log(m)
      this.songs.splice(index)
    })
  }
}
