import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User, UserTransform } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserTransform[]> {
    return this.http.get<User[]>(`${this.url}`).pipe(
      map((users: User[]) => {
        return users.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          website: user.website,
        }));
      })
    );
  }
}
