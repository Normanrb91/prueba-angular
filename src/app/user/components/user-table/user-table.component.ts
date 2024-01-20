import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  headers = ['#', 'Name', 'Username', 'Email', 'Website'];
  users: User[] = [];
  usersFiltered: User[] = [];
  userPerPage: number = 5;
  page: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
      this.filterUsers('');
    });
  }

  getUsersPerPage(): User[] {
    const indexInit = (this.page - 1) * this.userPerPage;
    const indexEnd = indexInit + this.userPerPage;
    return this.usersFiltered.slice(indexInit, indexEnd);
  }

  filterUsers(filter: string): void {
    if (!filter) {
      this.usersFiltered = [...this.users];
    } else {
      const filtroLowerCase = filter.toLowerCase();
      this.usersFiltered = this.users.filter(
        (user) =>
          user.name.toLowerCase().includes(filtroLowerCase) ||
          user.username.toLowerCase().includes(filtroLowerCase) ||
          user.email.toLowerCase().includes(filtroLowerCase)
      );
    }
    this.page = 1;
    this.onChangePage(1);
  }

  onChangePage(page: number): void {
    this.page = page;
  }

  hasNextPage(): boolean {
    return this.page * this.userPerPage < this.usersFiltered.length;
  }

  hasPreviousPage(): boolean {
    return this.page > 1;
  }
}
