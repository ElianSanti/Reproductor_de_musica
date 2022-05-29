import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { GeneralMusic } from '../interfaces/cancion.interface';
import { environment } from '../../../environments/environment';
import { Lista, ListaContent, Song } from '../interfaces/lista.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private _urlCanciones:string = 'https://api.jamendo.com/v3.0/tracks/?client_id=09ab6343&format=jsonpretty&limit=10&fuzzytags=groove+rock&speed=high+veryhigh&include=musicinfo&groupby=artist_id'
  private _baseurl = environment.baseUrl
  
  constructor(private http:HttpClient) { }

  getCanciones(){
    return this.http.get<GeneralMusic>(this._urlCanciones)
      .pipe(
        map(datos=>{
          const canciones = Object.values(datos.results)
          return canciones;
        })
      )
  }

  getCancionesNombre(termino:string){
    const url = 'https://api.jamendo.com/v3.0/tracks/?client_id=09ab6343&format=jsonpretty&limit=4&fuzzytags=groove+rock&speed=high+veryhigh&include=musicinfo&groupby=artist_id'
    return this.http.get<GeneralMusic>(`${url}&name=${termino}`).pipe(
      map(datos=>{
        const canciones = Object.values(datos.results)
        return canciones;
      })
    )
  }

  getCancionesBuscador(termino:string){
    const url = 'https://api.jamendo.com/v3.0/tracks/?client_id=09ab6343&format=jsonpretty&fuzzytags=groove+rock&speed=high+veryhigh&include=musicinfo&groupby=artist_id'
    return this.http.get<GeneralMusic>(`${url}&name=${termino}`).pipe(
      map(datos=>{
        const canciones = Object.values(datos.results)
        return canciones;
      })
    )
  }

  //Seccion de listas
  crearLista(lista:Lista){
    return this.http.post(this._baseurl,lista)
  }

  obtenerListas(){
    return this.http.get<ListaContent>(this._baseurl).pipe(map(m=>{
      const listas = Object.values(m.Listas)
      return listas
    }))
  }

  buscarPorNombre(termino:string){
    return this.http.get<ListaContent>(`${this._baseurl}/${termino}`).pipe(map(m=>{
      const listas = Object.values(m.Lista)
      return listas
    }))
  }
  //lista
  eliminarPorNombre(nombre:string){
    return this.http.delete(`${this._baseurl}/${nombre}`)
  }

  modificarLista(lista:string,datos:Lista){
    return this.http.put(`${this._baseurl}/${lista}`,datos)
  }

  //Canciones
  eliminarCancion(nombreLista:string,nombreCancion:string){
    return this.http.delete(`${this._baseurl}/${nombreLista}/songs/${nombreCancion}`)
  }

  buscarCancionPorNombre(lista:string,cancion:string){
    return this.http.get<ListaContent>(`${this._baseurl}/${lista}/songs/${cancion}`)
      .pipe(
        map(m=>{
          const cancion = m.Cancion
          return cancion
        })
      )
  }

  modificarCancion(lista:string,cancion:string,datos:Song){
    return this.http.put(`${this._baseurl}/${lista}/songs/${cancion}`,datos)
  }
}
