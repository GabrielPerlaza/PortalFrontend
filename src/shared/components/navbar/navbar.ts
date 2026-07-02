import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  cerrarSesion(): void {

    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
