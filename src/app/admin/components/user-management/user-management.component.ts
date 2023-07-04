import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from 'src/app/features/Interfaces/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  editedUser = {} as User;
  displayEditModal: boolean = false;
  newUser!: { firstName: string; lastName: string; email: string };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      },
      (error: any) => {
        console.error('Error loading users:', error);
      }
    );
  }

  startEditing(user: any) {
    this.editedUser = { ...user };
    this.displayEditModal = true;
  }

  closeEditModal() {
    this.displayEditModal = false;
  }

  openEditModal(user: User): void {
    this.editedUser = { ...user }; // Create a copy of the user to avoid modifying the original
  }

  cancelEditing() {
    this.editedUser = {} as User;
    this.closeEditModal();
  }

  saveUserChanges(): void {
    if (this.editedUser) {
      this.userService.updateUser(this.editedUser).subscribe(
        (response: any) => {
          console.log('User updated:', response);
          this.editedUser = {} as User;
          this.loadUsers();
          this.closeEditModal();
        },
        (error: any) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user._id).subscribe(
      (response: any) => {
        console.log('User deleted:', response);
        this.loadUsers();
      },
      (error: any) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
