import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Importaciones personalizadas
import { ReservService } from 'src/app/services/reserv.service';
import { Turn } from 'src/app/interfaces/reservs.interface';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  reservService = inject(ReservService);
  router = inject(Router);

  paymentMethods: string[] = ['cash', 'transfer', 'mercadoPago'];
  paymentMethod = signal('');

  turn!: Turn;
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
    this.turn = this.reservService.selectedDate;
  };

  // Cuenta atras
  confirmedReservation() {
    this.completedReservation.set(true)
    const interval = setInterval(() => {
      this.timer -= 1 ;
      if( this.timer === 0 ) {
        clearInterval(interval);
        this.router.navigateByUrl('home');
      };
    }, 1000);
  };
}
