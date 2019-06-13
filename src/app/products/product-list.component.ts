import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  pageTitle: string = 'Product List Component';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService : ProductService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List Component: ' +message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    console.log('In OnInit()');
    this.productService.getProducts().subscribe(
      productsReturn => {
        this.products = productsReturn;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
      
    );
  }
}
