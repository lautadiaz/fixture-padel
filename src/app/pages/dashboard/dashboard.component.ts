import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Interfaces
import { Reservation } from 'shared/interfaces/reservs.interface';
import { DialogComponent } from 'shared/dialog/dialog.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatDividerModule, MatInputModule, MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  dialog = inject( MatDialog );

  testTurn1: Reservation = {
    hour: 14,
    date: new Date,
    deposit: 500,
    note: 'Yo tomo licor, yo tomo cerveza Y me gustan las chicas Y la cumbia me divierte y me excita',
    reservedBy: 'Nico Papurri Diez',
    usageTime: 1
  };
  testTurn2: Reservation = {
    hour: 13,
    date: new Date,
    deposit: 1000,
    note: '',
    reservedBy: 'Kuki El Tirri',
    usageTime: 1
  };
  testTurn3: Reservation = {
    hour: 16,
    date: new Date,
    deposit: 2500,
    note: '',
    reservedBy: 'Lauti :D',
    usageTime: 1
  };

  hours: any[] = [
    {hour: '10:00 - 10:30', canchita1: '', canchita2: '', canchita3: '', canchita4:'', canchita5: ''},
    {hour: '10:30 - 11:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '11:00 - 11:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '11:30 - 12:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '12:00 - 12:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '12:30 - 13:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '13:00 - 13:30', canchita1: '', canchita2: this.testTurn2, canchita3: ''},
    {hour: '13:30 - 14:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '14:00 - 14:30', canchita1: this.testTurn1, canchita2: '', canchita3: ''},
    {hour: '14:30 - 15:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '15:00 - 15:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '15:30 - 16:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '16:00 - 16:30', canchita1: this.testTurn3, canchita2: '', canchita3: ''},
    {hour: '16:30 - 17:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '17:00 - 17:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '17:30 - 18:00', canchita1: '', canchita2: '', canchita3: ''},
  ];

  displayedColumns: string[] = ['hour', 'canchita1', 'canchita2', 'canchita3'];
  dataSource = this.hours;

  date: Date = new Date;

  // Agendar un turno
  addCourt = signal(false);
  deleteReserv = signal(false)

  getRecord(item: Reservation) {
    if( !item ) {
      return;
    };
    console.log(item);
    const dialogRef = this.dialog.open( DialogComponent, { data: item });
    dialogRef.afterClosed().subscribe( result => {
      if( result === 'Delete' ) {
        this.deleteReserv.set(true);
        console.log('borrado')
      } else if ( result === 'Edit') {
        console.log('Editando...')
      }
    });
  }

  deleteReservation() {
    console.log('item')
  }
}
