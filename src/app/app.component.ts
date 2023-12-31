import { Component, OnChanges, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fromEvent } from 'rxjs';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// Componentes
import { FooterComponent } from 'shared/footer/footer.component';
import { NavbarComponent } from 'shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterModule , NavbarComponent, FooterComponent, MatSidenavModule, MatIconModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent implements OnInit {


  title = 'fixture-padel';

  opened: boolean = false;
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
