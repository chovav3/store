import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Category } from '../models/category'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = "https://api20201018121116.azurewebsites.net/Categoties"
  constructor(private httpClient: HttpClient) { }
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url);
  }

}
