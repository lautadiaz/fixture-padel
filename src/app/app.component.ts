import { Component, OnChanges, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fromEvent } from 'rxjs';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

// Componentes
import { FooterComponent } from 'shared/components/footer/footer.component';
import { HeaderComponent } from 'shared/components/header/header.component';
import { NavbarComponent } from 'shared/components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterModule , NavbarComponent, HeaderComponent, FooterComponent, MatSidenavModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent implements OnInit {


  title = 'fixture-padel';

  opened: boolean = true;
  // Creo un observable para saber el ancho de la pantalla
  width = signal(window.innerWidth);
  widthChange$ = fromEvent(window, 'resize');

  ngOnInit(): void {
    this.widthChange$.subscribe( () => {
      this.width.set(window.innerWidth);
      if ( this.width() < 425 ) {
        this.opened = false
      } else {
        this.opened = true
      }
    });

  };


}
