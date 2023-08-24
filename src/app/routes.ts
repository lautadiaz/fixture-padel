import { Routes } from '@angular/router';
import { CompeticionesComponent } from 'src/app/layouts/competiciones/competiciones.component';
import { ConfirmationComponent } from 'components/confirmation/confirmation.component';
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { ReservasComponent } from 'components/reservas/reservas.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from 'components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'home'         , component: HomeComponent         , canActivate: [ authGuard ] },
  { path: 'reservas'     , component: ReservasComponent     , canActivate: [ authGuard ] },
  { path: 'competiciones', component: CompeticionesComponent, canActivate: [ authGuard ] },
  { path: 'confirmation' , component: ConfirmationComponent , canActivate: [ authGuard ] },
  { path: 'dashboard'    , component: DashboardComponent    , canActivate: [ authGuard ] },
  { path: 'login'        , component: LoginComponent },
  { path: '**'           , redirectTo: 'home' }
];
