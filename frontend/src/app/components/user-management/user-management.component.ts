import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserRequest, UserResponse } from '../../models/user.models';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
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
