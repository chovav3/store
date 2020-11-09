import { Observable, pipe, Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AutoGuard implements CanActivate {
  constructor(private router: Router) { }
  result
  canActivate() {
    this.result = localStorage.getItem('user')
    if (this.result !== null) {
      if (typeof JSON.parse(this.result) === 'object')
        return true
    } else {
      return this.router.navigate(["login"])
    }

  }

}
