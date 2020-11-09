import { pipe } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { HelpService } from '../helper/help.service'
import { BuyService } from '../services/buy.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSet = []
  amount: number
  dataa: any
  temp: any
  allPrice: number = 0
  portrait: boolean = true
  constructor(private BuyService: BuyService, private help: HelpService) { }

  ngOnInit(): void {
    if (localStorage.getItem('data') !== null) {
      this.allpricemetode()
    }
  }

  data() {
    if (localStorage.getItem('data') !== null) {
      return pipe(
        JSON.parse(localStorage.getItem('data'))
      )
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

  removeAllCart() {
    localStorage.removeItem('data')
    this.help.openSnackBar("Removes all cart ", "close", 500)
  }

  displayCart() {
    if (localStorage.getItem('data') !== null) {
      return pipe(JSON.parse(localStorage.getItem('data')).length)
    } else return 0
  }


  removeItemFromCart(id: number) {
    this.dataSet = JSON.parse(localStorage.getItem('data'))
    for (let index = 0; index < this.data().length; index++) {
      if (this.data()[index].data.id === id) {
        this.help.openSnackBar("Removes all item " + this.data()[index].data.named, "close", 500)
        this.dataSet.splice(index, 1)
      }
    }
    localStorage.setItem('data', JSON.stringify(this.dataSet))
    this.allpricemetode()
  }

  allpricemetode() {
    this.allPrice = 0
    for (let index = 0; index < this.data().length; index++) {
      const temp = parseInt(this.data()[index].data.price) * this.data()[index].amount
      this.allPrice += temp
    }
  }

  // addtocart(i, amount) {
  //   this.amount = 1
  //   if (localStorage.getItem('data') !== null) {
  //     this.dataa = JSON.parse(localStorage.getItem('data'))
  //     for (let index = 0; index < this.dataa.length; index++) {
  //       if (this.dataa[index].data.id === i.id) {
  //         this.amount += amount
  //         this.dataa.splice(index, 1)
  //       }
  //     }
  //   }
  //   this.temp = { data: i, amount: this.amount }
  //   this.dataa.push(this.temp)
  //   localStorage.setItem('data', JSON.stringify(this.dataa))
  //   this.help.openSnackBar("add " + this.temp.data.name + " to the cart", "close", 500)
  //   this.allpricemetode()
  // }

  addtocart(i, amount) {
    if (localStorage.getItem('data') !== null) {
      this.dataa = JSON.parse(localStorage.getItem('data'))
      for (let index = 0; index < this.dataa.length; index++) {
        if (this.dataa[index].data.id === i.id) {
          this.dataa[index].amount += 1
          // this.dataa.splice(index, 1)
        }
      }
    }
    // this.temp = { data: i, amount: this.amount }
    // this.dataa.push(this.temp)
    localStorage.setItem('data', JSON.stringify(this.dataa))
    this.help.openSnackBar("add another one to the cart", "close", 500)
    this.allpricemetode()
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
    this.allpricemetode()
  }

  buyCart() {
    this.BuyService.buy()
  }

}

