import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from '../user-form-dialog/user-form-dialog.component'; // Atualize o caminho conforme necessário
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../models/user.models';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatButton,
    RouterLink,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatIconButton,
    MatIcon,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatInput,
    FormsModule
  ],
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: UserResponse[] = [];
  displayedColumns: string[] = ['id','name', 'email', 'role', 'actions'];
  searchId: string = '';
  filteredUsers: UserResponse[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadUsers();
  }

  findUser(searchId: string) {
    if(searchId) {
      const userId = parseInt(searchId, 10);
      if (!isNaN(userId)) {
        this.userService.getUser(userId).subscribe((user: UserResponse) => {
          this.filteredUsers = user ? [user] : [];
        });
      } else {
        this.filteredUsers = [];
      }
    } else {
      this.filteredUsers = this.users;
    }
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data: UserResponse[]) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  openUserForm(user?: UserResponse) {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '400px',
      data: user ? { user } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers(); // Recarrega a lista de usuários após salvar
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
