import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutFooterComponent } from '../../components/aut-footer/aut-footer.component';
import { AuthNavComponent } from '../../components/auth-nav/auth-nav.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthNavComponent, AutFooterComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}
