import { Injectable } from '@angular/core';
import { Turno } from '../interfaces/reservas.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  fechaSeleccionada!: Turno;

  constructor() { }

  establecerFecha( turn: Turno ) {
    this.fechaSeleccionada = turn;
    console.log(this.fechaSeleccionada)
  }
}
