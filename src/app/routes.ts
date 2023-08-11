import { Routes } from '@angular/router';
import { CompeticionesComponent } from 'components/competiciones/competiciones.component';
import { ConfirmationComponent } from 'components/confirmation/confirmation.component';
import { HomeComponent } from 'components/home/home.component';
import { ReservasComponent } from 'components/reservas/reservas.component';

export const routes: Routes = [
  { path: 'home'         , component: HomeComponent },
  { path: 'reservas'     , component: ReservasComponent },
  { path: 'competiciones', component: CompeticionesComponent },
  { path: 'confirmation' , component: ConfirmationComponent },
  { path: '**'           , redirectTo: 'home' }
];
