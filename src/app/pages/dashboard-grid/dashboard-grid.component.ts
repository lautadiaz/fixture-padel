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
  selector: 'app-dashboard-grid',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatDividerModule, MatInputModule, MatDialogModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  dialog = inject( MatDialog );
  reservationService = inject( ReservationService );

  ngOnInit(): void {
    this.setCourts();
    // Ancho de pagina dinamico segun cantidad de columnas
    this.pagewidth = 110 * this.gridArray.length;
    this.courts = this.reservationService.getCourt();
    this.price$.subscribe( price => this.price = price );
    console.log(this.gridArray);
  }

  // Valores Falsos
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
    hour: 20,
    date: new Date,
    deposit: 1000,
    note: '',
    reservedBy: 'Kuki El Tirri',
    usageTime: 2,
    court: 'canchita2'
  };
  testTurn3: Reservation = {
    hour: 22,
    date: new Date,
    deposit: 2500,
    note: '',
    reservedBy: 'Lauti :D',
    usageTime: 1,
    court: 'canchita1'
  };
  hours: any[] = [
    {value: 8 , hour: '08:00 - 09:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 9 , hour: '09:00 - 10:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 10, hour: '10:00 - 11:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 11, hour: '11:00 - 12:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 12, hour: '12:00 - 13:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 13, hour: '13:00 - 14:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 14, hour: '14:00 - 15:00', canchita1: this.testTurn1 , canchita2: '', canchita3: ''},
    {value: 15, hour: '15:00 - 16:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 16, hour: '16:00 - 17:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 17, hour: '17:00 - 18:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 18, hour: '18:00 - 19:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 19, hour: '19:00 - 20:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 20, hour: '20:00 - 21:00', canchita1: '', canchita2: this.testTurn2, canchita3: ''},
    {value: 21, hour: '21:00 - 22:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 22, hour: '22:00 - 23:00', canchita1: this.testTurn3, canchita2: '', canchita3: ''},
    {value: 23, hour: '23:00 - 24:00', canchita1: '', canchita2: '', canchita3: ''},
  ];

  // Establesco los valores iniciales
  gridArray!: any[];
  pagewidth!: number;
  date: Date = new Date;

  setCourts() {
    // const hour = this.hours.flatMap((hour) => {
    //   const elementos = [];
    //   elementos.push({ key: 'hour', value: hour.hour });
    //   return elementos;
    // });
    // const court1 = this.hours.flatMap((canchita1) => {
    //   const elementos = [];
    //   elementos.push({ key: 'canchita1', value: canchita1.canchita1 });
    //   return elementos;
    // });
    // const court2 = this.hours.flatMap((canchita2) => {
    //   const elementos = [];
    //     elementos.push({ key: 'canchita2', value: canchita2.canchita2 });
    //   return elementos;
    // });
    // const court3 = this.hours.flatMap((canchita3) => {
    //   const elementos = [];
    //   elementos.push({ key: 'canchita3', value: canchita3.canchita3 });
    //   return elementos;
    // });

    // for( let i = 0 ; i < court1.length; i++) {
    //   if ( court1[i].value.usageTime === 2 ) {
    //     court1.splice(i + 1, 1);
    //   }
    // }
    // for( let i = 0 ; i < court2.length; i++) {
    //   if ( court2[i].value.usageTime === 2 ) {
    //     court2.splice(i + 1, 1);
    //   }
    // }
    // for( let i = 0 ; i < court3.length; i++) {
    //   if ( court3[i].value.usageTime === 2 ) {
    //     court3.splice(i + 1, 1);
    //   }
    // }
    // this.gridArray = [hour, court1, court2, court3];
    const courtKeys = ['canchita1', 'canchita2', 'canchita3'];
    this.gridArray = [];

    for (const key of courtKeys) {
      const courtData = this.hours.flatMap((hour) => {
        const elementos = [{ key, value: hour[key] }];
        return elementos;
      }).filter((item, index, array) => {
        if (item.value.usageTime === 2 && index < array.length - 1) {
          // Si el elemento actual tiene usageTime igual a 2 y no es el último elemento, eliminar el siguiente
          array.splice(index + 1, 1);
        }
        return true;
      });

      this.gridArray.push(courtData);
    }

    // Agregar el arreglo de horas
    this.gridArray.unshift(this.hours.flatMap((hour) => [{ key: 'hour', value: hour.hour }]));

  };



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
        console.log(this.hours);
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
        this.setCourts();
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
            this.setCourts();
            break;
          }
        }
        // Creo el nuevo turno o el editado en el nuevo lugar
        hour[reservation.court] = reservation;
        console.log('creando');
        this.editReserv.set(false);
        this.setCourts();
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
        this.setCourts();
        break;
      }
    }
  }
}
