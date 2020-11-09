import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() { }
images : string[]= ["../../assets/images/about/1.jpg","../../assets/images/about/2.jpg","../../assets/images/about/3.jpg","../../assets/images/about/4.jpg"]
  ngOnInit(): void {
  }

}
