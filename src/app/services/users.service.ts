import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Users } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "https://storeadminchovav.azurewebsites.net/Customers"
  constructor(private httpClient: HttpClient) { }

  createUser(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(this.url, user);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.httpClient.post<Users>(this.url + "/Login", { email: email, password: password });
  }
}
