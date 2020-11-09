import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  url = "https://api20201018121116.azurewebsites.net/products"
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  login(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("https://api20201018121116.azurewebsites.net/Cunsomers/Login");
  }

}
  // Cunsomers
  // Categoties
  // OrderDetails
  // ProApi
  // Orders
  // /Customers/Login
  // https://storeadminchovav.azurewebsites.net/
  // AllBuysApi/id