import { Routes } from '@angular/router';
import { CompeticionesComponent } from 'src/app/layouts/competiciones/competiciones.component';
import { ConfirmationComponent } from 'components/confirmation/confirmation.component';
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { ReservasComponent } from 'components/reservas/reservas.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from 'components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'home'         , component: HomeComponent },
  { path: 'reservas'     , component: ReservasComponent },
  { path: 'competiciones', component: CompeticionesComponent },
  { path: 'confirmation' , component: ConfirmationComponent },
  { path: 'login'        , component: LoginComponent },
  { path: 'dashboard'    , component: DashboardComponent },
  { path: '**'           , redirectTo: 'home' }
];
