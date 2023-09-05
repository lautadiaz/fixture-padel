import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard-grid',
  standalone: true,
  imports: [CommonModule , MatGridListModule ],
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent {



  hours: any[] = [
    {value: 8 , hour: '08:00 - 09:00', canchita1: '', canchita2: '', canchita3: '', canchita4:'', canchita5: ''},
    {value: 9 , hour: '09:00 - 10:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 10, hour: '10:00 - 11:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 11, hour: '11:00 - 12:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 12, hour: '12:00 - 13:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 13, hour: '13:00 - 14:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 14, hour: '14:00 - 15:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 15, hour: '15:00 - 16:00', canchita1: '', canchita2: '', canchita3: ''},
    {value: 16, hour: '16:00 - 17:00', canchita1: '', canchita2: '', canchita3: ''},
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
}
