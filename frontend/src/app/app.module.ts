import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserManagementComponent
  ],
  providers: [UserService]
})
export class AppModule { }
