import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, image } = item;

  return (
    <li className='cart-item'>
      <div className='item-container'>
        <img src={image} alt={name} />
        <div className='item-details'>
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <div className='item-actions-container'>
        <input type='checkbox'></input>
        <button onClick={() => removeFromCart(item)}><DeleteIcon/></button>
        
        </div>
        
      </div>
    </li>
  );
};

export default CartItem;
