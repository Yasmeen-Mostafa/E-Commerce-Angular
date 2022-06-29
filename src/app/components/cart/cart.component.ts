import { Component, OnInit } from '@angular/core';
import { cartItem, ProductListService } from 'src/app/product-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
total:number=0;
products:Array<cartItem>=[];
  constructor(private _cartService: ProductListService) { }
get cartArray(){
  return this._cartService.cartArray
}
  ngOnInit(): void {
    this.fillProducts();
  }
  fillProducts(){
     for(let id of this._cartService.cartArray){
      this._cartService.getProductDetails(id.value).subscribe(
        (result)=>{
          id.value=result;
          this.total+=id.value.price*id.quantity;
         this.products.push(id);
        }
      )
     }
  }

  addSign(index:number){
    this.products[index].quantity++
    this.total+=this.products[index].value.price;
  }
  decreaseSign(index:number){
    if(this.products[index].quantity>1){
    this.products[index].quantity--
    this.total-=this.products[index].value.price;
    }
  }
  removeCardItem(id:number){
    this.products = this.products.filter((element)=>element.id!==id);
    this._cartService.cartArray=this._cartService.cartArray.filter((e)=>e.id!=id)
    this.total=0
    this._cartService.cartArray.forEach(e=>this.total+=e.value.price*e.quantity)
    this._cartService.counter.next(this.products.length)
    
  }

}
