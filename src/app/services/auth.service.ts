import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'env';
import { tap } from 'rxjs';
import { LoginForm } from 'shared/interfaces/login-form.interface';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  http   = inject( HttpClient );
  router = inject( Router );
  ngZone = inject( NgZone );

  login( data: LoginForm ) {

    console.log(data);
    // return this.http.post( `${base_url}/users/login`, data )
    //             .pipe(
    //               tap( (resp: any)  => {
    //                 console.log(resp);
    //               })
    //             );
    const { password, remember, email } = data;
    console.log(password, remember, email );

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
