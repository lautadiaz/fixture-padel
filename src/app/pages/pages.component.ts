import { Component, OnChanges, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { fromEvent } from 'rxjs';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// Componentes
import { FooterComponent } from 'shared/footer/footer.component';
import { NavbarComponent } from 'shared/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [ CommonModule, RouterModule , NavbarComponent, FooterComponent, MatSidenavModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

  authService = inject(AuthService);
  router = inject(Router);

  authenticated: boolean = this.authService.isAuthenticated();

  opened: boolean = false;
  // Creo un observable para saber el ancho de la pantalla
  width = signal(window.innerWidth);
  widthChange$ = fromEvent(window, 'resize');

  ngOnInit(): void {
    this.widthChange$.subscribe( () => {
      this.width.set(window.innerWidth);
      if ( this.width() < 425 ) {
        this.opened = false;
      } else {
        this.opened = true;
      }
    });

    this.router.events.subscribe((event) => {
      if ( event instanceof NavigationEnd ) {
        this.opened = false;
      }
    })
  };


}
