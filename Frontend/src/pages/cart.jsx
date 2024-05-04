import React, { useState } from 'react';
import CartItem from '../components/cartItem';
import Checkout from '../components/checkout';
import "../styles/cart.css"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  return (
    <div id='cart-page'>
      <div id='cart'>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                // <p>Your cart is empty.</p>
                <CartItem
                item={{
                  id: 1,
                  name: "Product Name",
                  price: 10.99,
                  image: "https://media.istockphoto.com/id/157393757/photo/a-pair-of-plastic-eyeballs-sitting-on-a-white-background.jpg?s=612x612&w=0&k=20&c=MnuwCUq24jCqFh74l3SM3tivZN_A_AN-U10tfi8pe38="
                }}
  removeFromCart={removeFromCart}
/>

            ) : (
                <ul>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} removeFromCart={removeFromCart} />
                ))}
                </ul>
            )}
        </div>
        <div id='checkout-container'>
            <Checkout/>
        </div>
    </div>
  );
};

export default CartPage;



