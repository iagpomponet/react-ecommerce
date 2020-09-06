import cartTypes from './cart-types';

export const toggleCartHidden = () => {
  return {
    type: cartTypes.TOGGLE_CART_HIDDEN  
  }
}