import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

// Personalizadas
import { Reservation } from 'shared/interfaces/reservs.interface';
import { EditTurnDialogComponent } from 'shared/dialogs/edit-turn/edit-turn-dialog.component';
import { ConfirmTurnDialogComponent } from 'shared/dialogs/confirm-turn/confirm-turn-dialog.component';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatDividerModule, MatInputModule, MatDialogModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  dialog = inject( MatDialog );
  reservationService = inject( ReservationService );

  ngOnInit(): void {
    this.courts = this.reservationService.getCourt();
    this.price$.subscribe( price => this.price = price );
  };

  // Valores inventados
  testTurn1: Reservation = {
    hour: 14,
    date: new Date,
    deposit: 500,
    note: 'Yo tomo licor, yo tomo cerveza Y me gustan las chicas Y la cumbia me divierte y me excita',
    reservedBy: 'Nico Papurri Diez',
    usageTime: 1,
    court: 'canchita1'
  };
  testTurn2: Reservation = {
    hour: 13,
    date: new Date,
    deposit: 1000,
    note: '',
    reservedBy: 'Kuki El Tirri',
    usageTime: 1,
    court: 'canchita2'
  };
  testTurn3: Reservation = {
    hour: 16,
    date: new Date,
    deposit: 2500,
    note: '',
    reservedBy: 'Lauti :D',
    usageTime: 1,
    court: 'canchita1'
  };
  hours: any[] = [
    {value: 8 , hour: '08:00 - 09:00', canchita1: '', canchita2: '', canchita3: '', canchita4:'', canchita5: ''},
    {value: 9 , hour: '09:00 - 10:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 10, hour: '10:00 - 11:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 11, hour: '11:00 - 12:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 12, hour: '12:00 - 13:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 13, hour: '13:00 - 14:00', canchita1: '', canchita2: this.testTurn2, canchita3: ''},
    {value: 14, hour: '14:00 - 15:00', canchita1: this.testTurn1, canchita2: '', canchita3: ''},
    {value: 15, hour: '15:00 - 16:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 16, hour: '16:00 - 17:00', canchita1: this.testTurn3, canchita2: '', canchita3: ''},
    {value: 17, hour: '17:00 - 18:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 18, hour: '18:00 - 19:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 19, hour: '19:00 - 20:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 20, hour: '20:00 - 21:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 21, hour: '21:00 - 22:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 22, hour: '22:00 - 23:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 23, hour: '23:00 - 24:00', canchita1: '', canchita2: '', canchita3: ''},
  ];

  displayedColumns: string[] = ['hour', 'canchita1', 'canchita2', 'canchita3'];
  dataSource = this.hours;
  date: Date = new Date;

  // Filtro calendario
  myFilter = (d: Date | null): boolean => {
    const today = new Date();
    const day = d || new Date();
    return day.getFullYear() >= today.getFullYear() && day.getMonth() >= today.getMonth() && day.getDate() >= today.getDate();
  };

  // Canchas
  courtTypes: string[] = ['Padel', 'Futbol 11', 'Tenis', 'Basket', 'Futbol 5'];
  courts: any[] = [];
  price: number = 3500;
  courtToEdit!: Reservation;

  // Formulario de cancha nueva
  newCourt: FormGroup = new FormGroup({
    date      : new FormControl( new Date() , []),
    hour      : new FormControl( 14, [ Validators.required, Validators.min(0), Validators.max(23), Validators.maxLength(2) ]),
    usageTime : new FormControl( 2 , [ Validators.required ]),
    court     : new FormControl('' , [ Validators.required] ),
    reservedBy: new FormControl('', [ Validators.required ] ),
    deposit   : new FormControl('' , [ Validators.required ] ),
    note      : new FormControl('', [] ),
  });


  price$: Observable<number> = this.newCourt.get('court')!.valueChanges.pipe(
    map( courtName => {
      const selectedCourt = this.courts.find(court => court.courtName === courtName);
        if (selectedCourt) {
          return selectedCourt.price;
        } else {
          return 3500;
        }
    })
  );
  totalToPay$: Observable<number> = combineLatest([
    this.newCourt.get('deposit')!.valueChanges.pipe(startWith('')),
    this.newCourt.get('court')!.valueChanges.pipe(startWith(3500)),
    ]).pipe(
      map(([depositValue]) => {
        return this.price - depositValue;
    })
  );

  submit() {
    if( this.newCourt.status === 'INVALID' ) {
      return;
    }
    const data: Reservation = this.newCourt.value;

    const dialogRef = this.dialog.open( ConfirmTurnDialogComponent, { data });
    dialogRef.afterClosed().subscribe( result => {
      if ( result === 'confirm') {
        this.addReservation(data, this.editReserv());
        this.addCourt.set(false);
        this.newCourt.reset({ date: new Date, hour: 14, usageTime: 2, deposit: 800 });
      }
    });
  }

  // Agendar un turno
  addCourt = signal(false);
  deleteReserv = signal(false);
  editReserv = signal(false);

  addReservation(reservation: Reservation, editTurn: boolean) {

    for( const hour of this.hours ) {
      if( editTurn && hour.value === this.courtToEdit.hour ) {
        // Borro el turno por editar
        hour[this.courtToEdit.court] = '';
        console.log('borrando');
      }
      if ( hour.value === reservation.hour) {
        if ( hour[reservation.court] !== '' ) {
          if( !editTurn ) {
            // Si es un turno nuevo en uno ya ocupado no hago nada
            console.log('Turno ocupado');
            break;
          } else {
            // Si es un turno editado en uno ya ocupado vuelvo a crear el turno en donde fue borrado
            this.hours.find( hour => hour.value === this.courtToEdit.hour)[this.courtToEdit.court] = this.courtToEdit;
            console.log('Turno ocupado');
            this.editReserv.set(false);
            break;
          }
        }
        // Creo el nuevo turno o el editado en el nuevo lugar
        hour[reservation.court] = reservation;
        console.log('creando');
        this.editReserv.set(false);
      }
    }
  }


  // Editar - borrar un turno
  getRecord(item: Reservation) {
    if( !item ) {
      return;
    };
    console.log(item);
    const dialogRef = this.dialog.open( EditTurnDialogComponent, { data: item });
    dialogRef.afterClosed().subscribe( result => {
      if( result === 'delete' ) {
        this.deleteReservation(item);
      } else if ( result === 'edit') {
        console.log('Editando...');
        this.editReservation(item);
      }
    });
  }

  editReservation(reservation: Reservation) {
    this.newCourt.setValue( reservation );
    this.addCourt.set(true);
    this.editReserv.set(true);
    this.courtToEdit = reservation;
  }

  deleteReservation(reservation: Reservation) {
    for( const hour of this.hours ) {
      if ( hour.value === reservation.hour ) {
        hour[reservation.court] = '';
        break;
      }
    }
  }
}
