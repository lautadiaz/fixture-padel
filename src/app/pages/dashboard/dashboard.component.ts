import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatDividerModule, MatInputModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  hours: any[] = [
    {hour: '10:00 - 10:30', canchita1: '', canchita2: '', canchita3: '', canchita4:'', canchita5: ''},
    {hour: '10:30 - 11:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '11:00 - 11:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '11:30 - 12:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '12:00 - 12:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '12:30 - 13:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '13:00 - 13:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '13:30 - 14:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '14:00 - 14:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '14:30 - 15:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '15:00 - 15:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '15:30 - 16:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '16:00 - 16:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '16:30 - 17:00', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '17:00 - 17:30', canchita1: '', canchita2: '', canchita3: ''},
    {hour: '17:30 - 18:00', canchita1: '', canchita2: '', canchita3: ''},
  ];

  displayedColumns: string[] = ['hour', 'canchita1', 'canchita2', 'canchita3'];
  dataSource = this.hours;

  date: Date = new Date;

  // Agendar un turno
  addCourt = signal(false);

}
