import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PassdataService } from '../services/passdata.service'
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  userExsist = []
  notFound: boolean
  constructor(private userSer: UsersService, private router: Router, private PassdataService: PassdataService) { }

  ngOnInit(): void { }

  login() {
    this.userSer.loginUser(this.email, this.password).subscribe(
      user => {
        if (user.length === 0) {
          this.notFound = true
        } else {
          this.notFound = false
          localStorage.setItem('user', JSON.stringify(user[0]))
          this.PassdataService.changeMode(true)
          this.router.navigate(['home'])

        }
      }
    )
  }

}
