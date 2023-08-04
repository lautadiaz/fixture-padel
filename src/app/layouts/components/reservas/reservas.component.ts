import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { Turno } from '../../interfaces/reservas.interface';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatCardModule, MatNativeDateModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {

  // Para los filtros
  deportes: string[] = ["padel", "futbol5", "tenis"]

  // Calendario
  fechaSeleccionada: Date | null = null;

  // Turnos falsos
  turnos: Turno[] = [{ disponible: false, horario: 16 }, { disponible: true, horario: 17 },{ disponible: true, horario: 18 },{ disponible: false, horario: 19 }, { disponible: true, horario: 20 }]
  turnoSeleccionado: Turno | null = null;

  diaSeleccionado(value: Date | null ) {
    // Aqui va la llamada a la base de datos para ver los turnos disponibles
    console.log( value?.getDate())
  }

  turnoElegido(turno: Turno) {
    // Aqui va la llamada a la base de datos para reservar el turno
    this.turnoSeleccionado = turno;
  }
}
