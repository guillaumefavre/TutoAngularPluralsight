import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id}`;
    this.product = {
      'productId': id,
      'productName': 'nom du produit',
      'productCode': 'code du produit',
      'releaseDate': 'date du produit',
      'description': 'description du produit',
      'price': 18.50,
      'starRating': 3.8,
      'imageUrl': ''
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
