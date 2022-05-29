import { Component, OnInit } from '@angular/core';
import { MusicaService } from '../../services/musica.service';
import { Lista, Song } from '../../interfaces/lista.interface';
import { Result } from '../../interfaces/cancion.interface';

@Component({
  selector: 'app-crear-lista',
  templateUrl: './crear-lista.component.html',
  styleUrls: ['./crear-lista.component.css']
})
export class CrearListaComponent implements OnInit {
  
  cancionesSug:Result[]=[]
  termino:string =''
  songs:Song[] =[]

  lista:Lista={
    name:'',
    description:'',
    songs:this.songs
  }
  

  constructor(private musica:MusicaService) { }

  ngOnInit(): void {

    this.musica.getCanciones().subscribe(m=>console.log(m))
  }

  mandarLista(){
    this.musica.crearLista(this.lista).subscribe(m=>console.log(m))
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
}
