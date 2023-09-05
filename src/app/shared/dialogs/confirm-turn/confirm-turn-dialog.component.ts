import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { Reservation } from 'shared/interfaces/reservs.interface';

@Component({
  selector: 'confirm-turn-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './confirm-turn-dialog.component.html',
  styleUrls: ['./confirm-turn-dialog.component.scss']
})
export class ConfirmTurnDialogComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public item: Reservation ) {}


}
