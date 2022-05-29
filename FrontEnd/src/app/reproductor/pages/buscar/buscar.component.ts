import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/cancion.interface';
import { MusicaService } from '../../services/musica.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  canciones:Result[]=[]
  
  constructor(private musica:MusicaService) { }

  ngOnInit(): void {
  }

  buscarCanciones(termino:string){
    this.musica.getCancionesBuscador(termino)
      .subscribe(m=>{
        this.canciones = m;
      })
  }

}
