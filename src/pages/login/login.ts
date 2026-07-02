import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Login } from '../../core/models/login.model';
import { ResponseApi } from '../../core/models/response-api.model';
import { Sesion } from '../../core/models/sesion.model';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  modelo: Login = {
    correo: '',
    clave: ''
  };

  iniciarSesion(): void {

  this.authService.login(this.modelo).subscribe({

    next: (respuesta: ResponseApi<Sesion>) => {

      if (respuesta.status) {

        localStorage.setItem(
          'usuario',
          JSON.stringify(respuesta.value)
        );

        this.router.navigate(['/articulos']);
      }

    },

    error: (error) => {
      console.error(error);
      alert('Correo o contraseña incorrectos');
    }

  });
  }
}
