import { Product } from 'src/app/json';
import { addToWishList, removeFromWishList } from './wishListStore.action';
import { createReducer, on } from '@ngrx/store';
//initial => initial value
//addtocart => last update

export let initial: Array<Product> = [];
export const reducer = createReducer(
  initial,
  on(addToWishList, (state /*last update for array*/, { cardItem }) => {
    let check = state.filter((e) => e.id == cardItem.id);
    if (check.length != 0) {
      return [...state];
    } else {
      console.log();
      return [...state, cardItem];
    }
  }),
  on(removeFromWishList, (state, { cardItem }) => {
    state = state.filter((e) => e.id != cardItem.id);
    return state;
  })
);
