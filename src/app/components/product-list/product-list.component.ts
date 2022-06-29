import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/product-list.service';
import { Products, Product } from '../../json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private _productCardService: ProductListService) {}
  unsubscribe: any;
  ngOnInit(): void {
    this.unsubscribe = this._productCardService.getProducts().subscribe(
      (result: any) => {
        //console.log(result);
        this.productsCards = result;
      },
      (error: any) => {
        console.log('Error');
      }
    );
  }
  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
  receiveCardId(_id: any, productObject: Product) {
    if (this._productCardService.cartArray.length == 0) {
      this._productCardService.cartArray.push({
        id: 0,
        value: _id,
        quantity: 1,
      });
      this._productCardService.counter.next(
        this._productCardService.cartArray.length
      );
    } else {
      let temp = this._productCardService.cartArray.find(
        (element) => element.value === _id
      );
      if (temp) {
        this._productCardService.cartArray[temp.id].quantity++;
      } else {
        this._productCardService.cartArray.push({
          id: this._productCardService.cartArray.length,
          value: _id,
          quantity: 1,
        });
        this._productCardService.counter.next(
          this._productCardService.cartArray.length
        );
      }
    }
    // console.log(this._productCardService.cartArray);
  }
  productsCards: Product[] = [];
}
