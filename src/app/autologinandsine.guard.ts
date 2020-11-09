import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AutologinandsineGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('user') === null) {
      return true
    } else {
      const temp = location.href
      return this.router.navigate([temp])
    }
  }

}
