import { pipe } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { CallingCodeComponent } from '../calling-code/calling-code.component'
import { Users } from '../models/users'
import { PassdataService } from '../services/passdata.service'
import { PhoneService } from '../services/phone.service'
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-sineup',
  templateUrl: './sineup.component.html',
  styleUrls: ['./sineup.component.css']
})
export class SineupComponent implements OnInit {
  callingCode = 972
  named: string
  email: string
  password: string
  phone 
  callingCodeValid:boolean = false
  image: string | ArrayBuffer = "../../assets/images/person.png" //"https://forent.co.il/data/pics/58288208-Avatar_n.png"
  constructor(private serUser: UsersService, public dialog: MatDialog, private PhoneService: PhoneService,  private UserSer: UsersService, private router : Router, private PassdataService : PassdataService) {


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CallingCodeComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result =>  {
      this.callingCode = result
    });
  }

  ngOnInit(): void {
    
  }
  event(evt) {
    if (["e", "E", "+", "-", "."].includes(evt.key)) evt.preventDefault()
  }

  displayPhoto(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.image = e.target['result'];
      })
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  sineUp() {
    if(this.callingCode === undefined){
      this.callingCodeValid = true
      return
    }
    this.serUser.createUser({ name: this.named, email: this.email, password: this.password, phone: this.phone.toString(), image: this.image , callingcode: this.callingCode.toString()}).subscribe(user=>{
      localStorage.setItem('user',JSON.stringify(user))
      this.PassdataService.changeMode(true)   
      this.router.navigate(['home'])     
    })
  }
}
