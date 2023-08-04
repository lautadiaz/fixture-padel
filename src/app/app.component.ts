import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from 'shared/components/footer/footer.component';
import { HeaderComponent } from 'shared/components/header/header.component';
import { NavbarComponent } from 'shared/components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [ RouterModule , NavbarComponent, HeaderComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'fixture-padel';
}
