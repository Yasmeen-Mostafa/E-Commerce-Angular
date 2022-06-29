import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/json';
import { ProductListService } from 'src/app/product-list.service';
import { addToWishList } from 'src/app/store/wishListStore/wishListStore.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  idTemp: number = 0;
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductListService,
    private _wishListStore: Store<{ wishList: Array<Product> }>
  ) {
    this.idTemp = Number(this.route.snapshot.params['id']);
    this.productService.getProductDetails(this.idTemp).subscribe((result) => {
      this.product = result;
    });
  }
  receiveCardId(_id: any) {
    if (this.productService.cartArray.length == 0) {
      this.productService.cartArray.push({ id: 0, value: _id, quantity: 1 });
      this.productService.counter.next(this.productService.cartArray.length);
    } else {
      let temp = this.productService.cartArray.find(
        (element) => element.value === _id
      );
      if (temp) {
        this.productService.cartArray[temp.id].quantity++;
      } else {
        this.productService.cartArray.push({
          id: this.productService.cartArray.length,
          value: _id,
          quantity: 1,
        });
        this.productService.counter.next(this.productService.cartArray.length);
      }
    }

    console.log(this.productService.cartArray);
  }
  addedToWishList(productItem: Product) {
    this._wishListStore.dispatch(addToWishList({ cardItem: productItem }));
  }
  ngOnInit(): void {}
}
