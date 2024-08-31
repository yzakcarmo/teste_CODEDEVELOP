import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { UserManagementComponent } from './app/components/user-management/user-management.component';
import { provideHttpClient } from '@angular/common/http';
import {importProvidersFrom} from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserManagementComponent }
    ]),
    importProvidersFrom(RouterModule), provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
