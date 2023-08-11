import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Importaciones personalizadas
import { ReservaService } from 'src/app/services/reserva.service';
import { Turno } from 'src/app/interfaces/reservas.interface';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  reservaService = inject(ReservaService);
  router = inject(Router);

  paymentMethods: string[] = ['efectivo', 'transferencia', 'mercadoPago'];
  paymentMethod = signal('');

  turn!: Turno;
  // turno falso { disponible: true, horario: 17, fecha: new Date }
  transferDate: Date = new Date( new Date().getTime() + 86400000);
  completedReservation = signal(false);
  timer: number = 5;

  ngOnInit(): void {
    this.turnToReserve();
    if( !this.turn ) {
      this.router.navigateByUrl('home');
    }
  };

  // Recibo el turno de la reserva a traves del servicio
  turnToReserve() {
    this.turn = this.reservaService.fechaSeleccionada;
  };

  // Cuenta atras
  confirmedReservation() {
    this.completedReservation.set(true)
    const interval = setInterval(() => {
      this.timer = this.timer - 1 ;
      if( this.timer === 0 ) {
        clearInterval(interval);
        this.router.navigateByUrl('home');
      };
    }, 1000);
  };
}
