import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/json';
import { Store } from '@ngrx/store';
import { ProductListService } from 'src/app/product-list.service';
import { addToWishList } from 'src/app/store/wishListStore/wishListStore.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Output() cardId = new EventEmitter();
  constructor(
    private _router: Router,
    private _wishListStore: Store<{ wishList: Array<Product> }>
  ) {}

  ngOnInit(): void {}

  addToCart(id: number) {
    this.cardId.emit(id);
  }
  navigateTo() {
    this._router.navigate([`/details/${this.product.id}`]);
  }
  addedToWishList(productItem: Product) {
    this._wishListStore.dispatch(addToWishList({ cardItem: productItem }));
  }
}
