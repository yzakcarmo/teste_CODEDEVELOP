import { Component } from '@angular/core';
import { UserManagementComponent } from './components/user-management/user-management.component';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserManagementComponent, RouterOutlet, RouterLink]  // Adicione quaisquer outros componentes necessários aqui
})
export class AppComponent {
  title = 'user-management';
}
