import { Injectable } from '@angular/core';
import { Turn } from 'src/app/shared/interfaces/reservs.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  selectedDate!: Turn;
  courts = [{
    courtName: "canchita1",
    price: 3500.00,
    priceOverride: 4500.00
  },
  {
    courtName: "canchita2",
    price: 6500.00,
    priceOverride: null
  },
  {
    courtName: "canchita3",
    price: 4500.00,
    priceOverride: null
  }];

  constructor() { }

  setSelectedDate( turn: Turn ) {
    this.selectedDate = turn;
    console.log(this.selectedDate)
  }

  getCourt() {
    return this.courts;
  }
}
