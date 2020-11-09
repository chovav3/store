import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Route, Router } from '@angular/router'
import { Category } from '../models/category'
import { Product } from '../models/Product'
import { CategoriesService } from '../services/categories.service'
import { ShoesService } from '../services/shoes.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  admin: boolean = false
  allCat: Category[] = []
  allproducts: Product[] = []
  productFilter: Product[] = []
  keys = []
  portrait = true
  search: string
  spinner : boolean = true
  constructor(private productservice: ShoesService, private CategoriesService: CategoriesService, private _shoesService: ShoesService, private router: Router, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe(pro => {
      this.allproducts = pro
    })

    this.CategoriesService.getCategories().subscribe(cat => {
      this.allCat = cat
      this.spinner = false
    }
    )
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

  display(id: number) {
    this.productFilter = []
    this.allproducts.filter(pro => {
      if (pro.catId === id) {
        this.productFilter.push(pro)
      }
    })
  }
}

