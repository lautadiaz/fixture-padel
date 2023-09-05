export interface Turn {
  available: boolean,
  time     : number,
  date     : Date
}

export interface Reservation {
  hour: number,
  usageTime: number,
  reservedBy: string,
  date: Date,
  deposit: number,
  note: string,
  court: string,
}
