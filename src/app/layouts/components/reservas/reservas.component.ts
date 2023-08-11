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
import { Turn } from 'src/app/interfaces/reservs.interface';
import { ReservService } from 'src/app/services/reserv.service';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDatepickerModule, MatCardModule, MatNativeDateModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {

  reservService = inject(ReservService);

  // Para los filtros
  sports: string[] = ["padel", "futbol5", "tenis"]

  // Calendario
  Date!: Date;

  // Turnos falsos
  turns: Turn[] = [{ available: false, time: 16, date: new Date }, { available: true, time: 17, date: new Date }, { available: true, time: 18, date: new Date }, { available: false, time: 19, date: new Date }, { available: true, time: 20, date: new Date }];
  selecctedTurn: Turn | null = null;

  // Mostrar spinner
  loading1 = signal(false);
  loading2 = signal(false);

  selectedDate(value: Date | null ) {
    // Aqui va la llamada a la base de datos para ver los turnos disponibles luego de seeccionar una fecha
    this.selecctedTurn = null;
    // Se muestra el spinner
    this.loading1.set(true);
    setTimeout(() => {
      this.loading1.set(false);
    }, 1000)
  }

  chosenTurn(turno: Turn) {
    // Aqui va la llamada a la base de datos para reservar luego de elegir el turno
    const { available, time } = turno;
    this.Date.setHours(turno.time);
    this.selecctedTurn = {date: this.Date, available, time };
    // Se muestra el spinner
    this.loading2.set(true);
    setTimeout(() => {
      this.loading2.set(false);
    }, 1000)
  }
  reserveTurn() {
    if( this.selecctedTurn )
    this.reservService.setSelectedDate(this.selecctedTurn)
  }
}
