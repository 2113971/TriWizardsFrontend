import React, { useState } from 'react';

const Checkout = ({ cartItems, onCheckout }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here before submitting the order
    onCheckout({ cartItems, shippingInfo });
  };

  return (
    <div id='checkout'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={shippingInfo.name} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={shippingInfo.address} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={shippingInfo.email} onChange={handleChange} />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
