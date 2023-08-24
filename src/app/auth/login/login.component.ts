import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatIconModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);

  // Formulario del login
  form: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    remember: new FormControl('', [] ),
  });

  // Formulario de recuperacion de la contraseña
  recoverPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  recoverPassword = signal(false);
  typePassword = signal('password');
  error = signal(false);
  loading = signal(false);

  submit() {
    if (this.form.valid) {
      this.login();
    } else {
      this.error.set(true);
    }
  }

  login() {
    this.loading.set(false);
    this.authService.login(this.form);
    this.router.navigateByUrl('pages/home');
  }
}
