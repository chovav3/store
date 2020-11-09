import { pipe, Subscription } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PassdataService } from '../services/passdata.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  userMode: boolean
  user :[] 
  mobile: boolean = false
  subscriptionUser: Subscription = this.PassdataService.aa.subscribe(u => this.user = u)
  subscriptionBoll: Subscription = this.PassdataService.header.subscribe(mode => this.userMode = mode);

  constructor(private router : Router,private PassdataService: PassdataService) {
    if (window.screen.width < 998) { // 768px portrait
      this.mobile = true;
    }
   }
  
  cartSize() {
    if(localStorage.getItem('user') !== null){
    if (localStorage.getItem('data') !== null) {
      return pipe(       
        JSON.parse(localStorage.getItem('data')).length
      )
    } else{
      return 0
    }
  }}

  logOut(){
    // localStorage.clear()
    localStorage.removeItem('user')
    this.PassdataService.changeMode(false)
    this.router.navigate(['login'])
  }
}
