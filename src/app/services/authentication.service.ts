import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  users: AppUser[] = [];
  authenticatedUser: AppUser | undefined;

  constructor() {
    this.users.push({
      userId: UUID.UUID(),
      email: 'masha masha',
      username: 'user1',
      password: 'user1',
      roles: ['user'],
    });
    this.users.push({
      userId: UUID.UUID(),
      email: 'masha masha2',
      username: 'user2',
      password: 'user2',
      roles: ['user'],
    });
    this.users.push({
      userId: UUID.UUID(),
      email: 'masha masha3',
      username: 'admin',
      password: 'admin',
      roles: ['user', 'admin'],
    });
  }
  public login(username: string, password: string): Observable<AppUser> {
    let appUser = this.users.find((user) => user.username === username);
    if (!appUser) {
      return throwError(() => new Error('User not found'));
    }
    if (appUser.password != password) {
      return throwError(() => new Error('Bad credentials'));
    }
    return of(appUser);
  }
  public authenticate(appUser: AppUser): Observable<boolean> {
    this.authenticatedUser = appUser;
    /*creer un stockage local pour ne pas oubliger l'utiliasteur à saisir ses données à chaque fois */
    localStorage.setItem(
      'authenticatedUser',
      JSON.stringify({
        username: appUser.username,
        roles: appUser.roles,
        jwt: 'JWT_TOKEN',
      })
    );
    return of(true);
  }
  public hasRole(role: string): boolean {
    return this.authenticatedUser!.roles.includes(role);
    /*includes retourne soit boolean soit undefined, pour l'eviter on ajoute le pt d'exclamation*/
  }
  public isAuthenticated(): boolean {
    return this.authenticatedUser != undefined;
  }
  public Logout(): Observable<boolean> {
    this.authenticatedUser = undefined;
    localStorage.removeItem('authenticatedUser');
    return of(true);
  }
  public addUser(user: AppUser) {
    this.users.push(user);
  }
}
