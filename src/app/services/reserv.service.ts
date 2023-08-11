import { Injectable } from '@angular/core';
import { Turn } from '../interfaces/reservs.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservService {

  selectedDate!: Turn;

  constructor() { }

  setSelectedDate( turn: Turn ) {
    this.selectedDate = turn;
    console.log(this.selectedDate)
  }
}
