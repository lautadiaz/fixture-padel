import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatIconModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  recoverPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  recoverPassword = signal(false);
  typePassword = signal('password');
  error = signal(false);
  loading = signal(false);

  submit() {
    if (this.form.valid) {
    }
  }

}
