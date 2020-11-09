import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from 'src/environments/environment'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CallingCodeComponent } from './calling-code/calling-code.component'
import { CartComponent } from './cart/cart.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { DemoMaterialModule } from './material'
import { SearchItemPipe } from './pipe/search-item.pipe'
import { SearchcallingCodePipe } from './pipe/searchcalling-code.pipe'
import { ProductsComponent } from './products/products.component'
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component'
import { SineupComponent } from './sineup/sineup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SineupComponent,
    AboutComponent,
    CartComponent,
    SearchItemPipe,
    SearchcallingCodePipe,
    CallingCodeComponent,
    ProductsComponent,
    ShoppingHistoryComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    // AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    
  ],
  exports:[SearchItemPipe],
  providers: [SearchItemPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
