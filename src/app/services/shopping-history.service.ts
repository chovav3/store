import { User } from 'firebase'
import { Observable, Subscription } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { PassdataService } from './passdata.service'

@Injectable({
  providedIn: 'root'
})
export class ShoppingHistoryService {
  user : any
  subscriptionUser: Subscription = this.PassdataService.aa.subscribe(u => this.user = u)

  constructor(private http :HttpClient, private PassdataService:PassdataService) { }
  getAllBuy() : Observable<any[]>{
  return this.http.post<any[]>("https://storeadminchovav.azurewebsites.net/AllUserBuys/buy",{cunsumerId:this.user.id}); 
  }
}
