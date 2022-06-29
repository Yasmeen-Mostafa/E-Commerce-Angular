import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/json';

export const addToWishList = createAction(
  'addToWishList',
  props<{ cardItem: Product }>()
);
export const removeFromWishList = createAction(
  'removeFromWishList',
  props<{ cardItem: Product }>()
);
