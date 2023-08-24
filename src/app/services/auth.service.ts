import { Injectable, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject( Router );
  ngZone = inject( NgZone );

  login() {
    localStorage.setItem('token', 'logeado');
  };

  logout() {
    localStorage.removeItem('token');

    this.ngZone.run(() => {
      this.router.navigateByUrl('/login');
    })
  };

  isAuthenticated() {
    if ( localStorage.getItem('token') === 'logeado' ) {
      return true;
    }
    return false;
  }
}
