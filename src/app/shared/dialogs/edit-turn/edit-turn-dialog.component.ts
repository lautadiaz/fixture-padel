import { Component, Inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { Reservation } from 'shared/interfaces/reservs.interface';

@Component({
  selector: 'edit-turn-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './edit-turn-dialog.component.html',
  styleUrls: ['./edit-turn-dialog.component.scss']
})
export class EditTurnDialogComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public item: Reservation ) {}

  deleteReserv = signal(false);

}
