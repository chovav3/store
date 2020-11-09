import { Subscription } from 'rxjs'
import { Injectable } from '@angular/core'
import { HelpService } from '../helper/help.service'
import { PassdataService } from './passdata.service'

declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class BuyService {
  url: string = "https://storeadminchovav.azurewebsites.net/"
  user
  subscriptionUser: Subscription = this.PassdataService.aa.subscribe(u => this.user = u)
  constructor(private PassdataService: PassdataService, private help: HelpService) { }
  buy() {
    const data = JSON.parse(localStorage.getItem("data"))
    var orderId = 0
    $.ajax({
      type: "POST",
      url: this.url + "Orders",
      data: JSON.stringify({ "customerId": this.user.id, "date": new Date().toString() }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data) {
        orderId = data.id
      },
      error: function (errMsg) {
        alert("error");
      }
    })

    setTimeout(() => {
      for (let index = 0; index < data.length; index++) {
        $.ajax({
          type: "POST",
          url: this.url + "OrderDetails",
          data: JSON.stringify({ "orderId": orderId, "productId": data[index].data.id, "quantity": data[index].amount }),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (data) {
            setTimeout(() => {
              localStorage.removeItem('data')
              this.help.openSnackBar("Buy all cart ", "close", 500)
            }, 3000);
          },
          error: function (errMsg) {
            alert("error");
          }
        });

        $.ajax({
          type: "PUT",
          url: this.url + "ProApi/" + data[index].data.id,
          data: JSON.stringify({ "id": data[index].data.id, "name": data[index].data.name, "price": data[index].data.price, "catId": data[index].data.catId, "title": data[index].data.title, "date": new Date().toString(), "productContent": data[index].data.productContent, "image": data[index].data.image, "amunt": data[index].data.amunt - data[index].amount }),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (b) {
          },
          error: function (errMsg) {
            alert("error");
          }
        });
      }
    }, 3000);
  }
}



// Cunsomers
  // Categoties
  // OrderDetails
  // ProApi
  // Orders
  // /Customers/Login
  // https://storeadminchovav.azurewebsites.net/