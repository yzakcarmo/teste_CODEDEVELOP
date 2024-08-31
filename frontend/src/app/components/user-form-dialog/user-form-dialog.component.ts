import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions
} from '@angular/material/dialog';
import { UserRequest, UserResponse } from '../../models/user.models'; // Atualize o caminho conforme necessário
import { UserService } from '../../services/user.service';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button"; // Atualize o caminho conforme necessário

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatLabel
  ],
  styleUrls: ['./user-form-dialog.component.css']
})
export class UserFormDialogComponent {
  editUser: UserResponse = { id: 0, name: '', email: '', phone: 0, role: '' };
  newUser: UserRequest = { name: '', email: '', phone: 0, password: '', role: 0 };
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {
    if (data && data.user) {
      this.editUser = {...data.user}
      this.newUser = { ...data.user, password: '' };
      this.isEditMode = true;
    }
  }

  saveUser() {
    if (this.isEditMode) {
      this.userService.updateUser(this.editUser.id,this.newUser).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.userService.createUser(this.newUser).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
