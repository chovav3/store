import { Component, OnInit } from '@angular/core'
import { ShoppingHistoryService } from '../services/shopping-history.service'

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {
  allBuy = []
  constructor(private serhistory: ShoppingHistoryService) { }

  ngOnInit(): void {
    this.serhistory.getAllBuy().subscribe(result => {
      this.allBuy = result
    }
    )
  }

}
