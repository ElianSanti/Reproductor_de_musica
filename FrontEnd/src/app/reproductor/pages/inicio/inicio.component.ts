import { Component, OnInit } from '@angular/core';
import { GeneralMusic, Result } from '../../interfaces/cancion.interface';
import { MusicaService } from '../../services/musica.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  canciones:Result[] = []

  constructor(private music:MusicaService) { }

  ngOnInit(): void {
    this.music.getCanciones()
    .subscribe(canciones=>{
      this.canciones = canciones;
      console.log(this.canciones)
    })
  }

  
}
