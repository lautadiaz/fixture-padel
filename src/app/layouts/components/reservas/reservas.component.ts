import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Importaciones personalizadas
import { Turno } from 'src/app/interfaces/reservas.interface';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDatepickerModule, MatCardModule, MatNativeDateModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {

  reservaService = inject(ReservaService);

  // Para los filtros
  sports: string[] = ["padel", "futbol5", "tenis"]

  // Calendario
  selectedDay!: Date;

  // Turnos falsos
  turnos: Turno[] = [{ disponible: false, horario: 16, fecha: new Date }, { disponible: true, horario: 17, fecha: new Date },{ disponible: true, horario: 18, fecha: new Date },{ disponible: false, horario: 19, fecha: new Date }, { disponible: true, horario: 20, fecha: new Date }]
  turnoSeleccionado: Turno | null = null;

  // Mostrar spinner
  loading1 = signal(false);
  loading2 = signal(false);

  diaSeleccionado(value: Date | null ) {
    // Aqui va la llamada a la base de datos para ver los turnos disponibles
    console.log( value );
    this.turnoSeleccionado = null;
    this.loading1.set(true);
    setTimeout(() => {
      this.loading1.set(false);
    }, 1000)
  }

  turnoElegido(turno: Turno) {
    // Aqui va la llamada a la base de datos para reservar el turno
    const { disponible, horario } = turno;
    this.selectedDay.setHours(turno.horario);
    this.turnoSeleccionado = {fecha: this.selectedDay, disponible, horario };
    console.log(this.turnoSeleccionado);
    this.loading2.set(true);
    setTimeout(() => {
      this.loading2.set(false);
    }, 1000)
  }
  reserveTurn() {
    if( this.turnoSeleccionado )
    this.reservaService.establecerFecha(this.turnoSeleccionado)
  }
}
