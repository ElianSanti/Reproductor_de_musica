import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  termino:string = '';

  debouncer: Subject<string> = new Subject();
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

    this.debouncer.pipe(debounceTime(300))
      .subscribe(valor=>{
        this.onDebounce.emit(valor)
      })
  }

  teclapresionada(){
    this.debouncer.next(this.termino)
  }


}
