import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PassdataService {
constructor(){
  if (localStorage.getItem('user') !== null){
    this.a.next(JSON.parse(localStorage.getItem('user')))
    this.headerSource.next(true)
  }
}
private headerSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
 header = this.headerSource.asObservable();

 private a: BehaviorSubject<[]> = new BehaviorSubject([]);
 aa = this.a.asObservable();

 changeMode(mode : boolean) { 
   this.headerSource.next(mode);  
   if (localStorage.getItem('user') !== null){
    this.a.next(JSON.parse(localStorage.getItem('user')))}
 }


}
