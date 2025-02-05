import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFooterComponent } from '../../components/user-footer/user-footer.component';
import { UserNavComponent } from '../../components/user-nav/user-nav.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [UserNavComponent, UserFooterComponent, RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent {}
