import { pipe } from 'rxjs'
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HelpService } from '../helper/help.service'
import { Product } from '../models/Product'
import { ShoesService } from '../services/shoes.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() prodocts: Product[] = []
  amount: number
  data = []
  temp: any
  portrait = true
  search: string
  dataSet: any
  testt = []
  constructor(private help: HelpService, private router: Router, private activatedRoute: ActivatedRoute, private productservice: ShoesService) { }

  ngOnInit(): void {
  }

  test(id) {
    if (localStorage.getItem('data') !== null) {
      this.testt = JSON.parse(localStorage.getItem('data'))
      for (let index = 0; index < this.testt.length; index++) {
        if (this.testt[index].data.id === id) {
          return this.testt[index].amount
        }
      }
    }
  }

  onImageLoad(evt) {
    if (evt && evt.target) {
      const width = evt.target.naturalWidth;
      const height = evt.target.naturalHeight;
      if (height > 0 && width > 0) {
        this.portrait = false;
      }
    }
  }

  addtocart(i) {
    this.amount = 1
    if (localStorage.getItem('data') !== null) {
      this.data = JSON.parse(localStorage.getItem('data'))
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index].data.id === i.id) {
          this.amount += this.data[index].amount
          this.data.splice(index, 1)
        }
      }
    }
    this.temp = { data: i, amount: this.amount }
    this.data.push(this.temp)
    localStorage.setItem('data', JSON.stringify(this.data))
    this.help.openSnackBar("add " + this.temp.data.name + " to the cart", "close", 1000)
  }

  datalocal() {
    if (localStorage.getItem('data') !== null) {
      return pipe(
        JSON.parse(localStorage.getItem('data'))
      )
    }
  }

  removeUnit(id: number) {
    this.dataSet = JSON.parse(localStorage.getItem('data'))
    for (let index = 0; index < this.datalocal().length; index++) {
      if (this.datalocal()[index].data.id === id) {
        if (this.dataSet[index].amount === 1) {
          this.help.openSnackBar("Removes item " + this.datalocal()[index].data.name, "close", 500)
          this.removeItemFromCart(id)
        } else {
          this.dataSet[index].amount--
          this.help.openSnackBar("Removes 1 item from " + this.datalocal()[index].data.name, "close", 500)
        }
      }
    }
    localStorage.setItem('data', JSON.stringify(this.dataSet))
  }

  removeItemFromCart(id: number) {
    this.dataSet = JSON.parse(localStorage.getItem('data'))
    for (let index = 0; index < this.datalocal().length; index++) {
      if (this.datalocal()[index].data.id === id) {
        this.help.openSnackBar("Removes all item " + this.datalocal()[index].data.named, "close", 500)
        this.dataSet.splice(index, 1)
      }
    }
    localStorage.setItem('data', JSON.stringify(this.dataSet))
  }
}

