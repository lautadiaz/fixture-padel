import { Routes } from '@angular/router';
import { CompeticionesComponent } from 'src/app/pages/competiciones/competiciones.component';
import { ConfirmationComponent } from 'src/app/pages/confirmation/confirmation.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ReservasComponent } from 'src/app/pages/reservas/reservas.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { PagesComponent } from './pages/pages.component';
import { DashboardGridComponent } from 'components/dashboard-grid/dashboard-grid.component';


const childenRoutes = [

  // Ver porque el / vacio no lleva al home sin el primer path
  { path: ''             , component: HomeComponent },
  { path: 'home'         , component: HomeComponent },
  { path: 'reservas'     , component: ReservasComponent     },
  { path: 'competiciones', component: CompeticionesComponent},
  { path: 'confirmation' , component: ConfirmationComponent },
  { path: 'dashboard'    , component: DashboardGridComponent, canActivate: [ authGuard ] },
  // { path: 'dashboardGrid'    , component: DashboardGridComponent},
]

export const routes: Routes = [
  { path: '', component: PagesComponent, children: childenRoutes },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];
