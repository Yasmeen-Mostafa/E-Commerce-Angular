import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/json';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { removeFromWishList } from 'src/app/store/wishListStore/wishListStore.action';

interface wishListArray {
  wishList: Array<Product>;
}
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishListItems: Observable<Product[]>;
  constructor(private _wishListStore: Store<{ wishList: Array<Product> }>) {
    this.wishListItems = this._wishListStore.pipe(
      select((state: any) => state.wishList)
    );
  }
  wishArray: Array<Product> = [];
  ngOnInit(): void {
    this.wishListItems.subscribe((res) => {
      this.wishArray = res;
      console.log(res);
    });
  }
  deleteItem(wishArrayItem: Product) {
    this._wishListStore.dispatch(
      removeFromWishList({ cardItem: wishArrayItem })
    );
  }
}
