import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  /*les guards sont utilisés pour proteger le systeme de routage, pour ne pas accederà un service si je ne suis 
  pas authentifié */
  /*il faut mettre private pour qu'on puisse les injecter*/
  constructor(
    private authnenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot /*route verifie l'url qu'on a tapé sur le navigateur */,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let authenticated = this.authnenticationService.isAuthenticated();
    if (!authenticated) {
      this.router.navigateByUrl('');
      return false;
    } else return true;
  }
}
