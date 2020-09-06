import React from 'react';
import CustomButton from '../customButton/custom-button.component';

import './cart-dropdown.styles.scss';

const Cart = () => {
  return(
    <div className='cart-dropdown'>
      <div className="cart-items"></div>
      <CustomButton className="checkout-link">
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default Cart;