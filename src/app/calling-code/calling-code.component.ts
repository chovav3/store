import { Component, OnInit } from '@angular/core'
import { PhoneService } from '../services/phone.service'

@Component({
  selector: 'app-calling-code',
  templateUrl: './calling-code.component.html',
  styleUrls: ['./calling-code.component.css']
})
export class CallingCodeComponent implements OnInit {

  allDataFromApi
  searchcall
  userselectcall = [972]
  constructor(private PhoneService: PhoneService) { }

  ngOnInit(): void {
      this.allDataFromApi = this.PhoneService.datacallingCode
  }

}
