import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { AutoGuard } from './auto.guard'
import { AutologinandsineGuard } from './autologinandsine.guard'
import { CartComponent } from './cart/cart.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ProductsComponent } from './products/products.component'
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component'
import { SineupComponent } from './sineup/sineup.component'

const routes: Routes = [
  {path: "", component:HomeComponent, canActivate:[AutoGuard]},
  {path: "product/:id", component:ProductsComponent, canActivate:[AutoGuard]},
  {path: "home", component:HomeComponent, canActivate:[AutoGuard]},
  {path: "login", component:LoginComponent, canActivate:[AutologinandsineGuard]},
  {path: "sineup", component:SineupComponent, canActivate:[AutologinandsineGuard]},
  {path: "about", component:AboutComponent},
  {path:"cart" , component:CartComponent, canActivate:[AutoGuard]},
  {path:"shopHistory" , component:ShoppingHistoryComponent, canActivate:[AutoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
