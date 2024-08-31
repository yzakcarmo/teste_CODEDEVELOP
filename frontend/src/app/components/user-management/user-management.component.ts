import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserRequest, UserResponse } from '../../models/user.models';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatLine} from "@angular/material/core";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    MatCard,
    MatList,
    MatListItem,
    MatFormField,
    MatLine,
    MatButton,
    MatInput,
    MatLabel,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatIcon,
    MatIconButton,
    MatToolbar,
    RouterLink
  ],
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: UserResponse[] = [];
  selectedUser: UserResponse | null = null;

  newUser: UserRequest = {
    name: '',
    email: '',
    phone: 0,
    password: '',
    role: 0
  };

  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data: UserResponse[]) => {
      this.users = data;
    }, error => {
      console.error('Erro ao carregar usuários', error);
    });
  }

  selectUser(user: UserResponse): void {
    this.selectedUser = user;
  }

  saveUser(): void {
    if (this.selectedUser) {
      // Atualizar usuário existente
      this.userService.updateUser(this.selectedUser.id, this.newUser)
        .subscribe(() => this.loadUsers());
    } else {
      // Criar novo usuário
      this.userService.createUser(this.newUser)
        .subscribe(() => this.loadUsers());
    }

    this.resetForm();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  resetForm(): void {
    this.selectedUser = null;
    this.newUser = {
      name: '',
      email: '',
      phone: 0,
      password: '',
      role: 0
    };
  }
}
