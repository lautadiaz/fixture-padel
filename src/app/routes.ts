import { Routes } from '@angular/router';
import { CompeticionesComponent } from 'components/competiciones/competiciones.component';
import { HomeComponent } from 'components/home/home.component';
import { ReservasComponent } from 'components/reservas/reservas.component';

export const routes: Routes = [
  { path: 'home'         , component: HomeComponent },
  { path: 'reservas'     , component: ReservasComponent },
  { path: 'competiciones', component: CompeticionesComponent },
  { path: '**', redirectTo: 'home' }
];
