import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/product-list.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  subscriber: any;
  local = localStorage;
  constructor(private _cartService: ProductListService) {}
  ngOnInit(): void {
    this.subscriber = this._cartService.counter.subscribe((results) => {
      this.count = results;
    });
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  count: number = 0;
}
