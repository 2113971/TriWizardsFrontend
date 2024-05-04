import React from 'react'
import "../styles/productDetails.css"
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QuantityIncrementer from '../components/quantityIncrementer';

const ProductDetails = () => {
  

  const image = "data:image/jpeg;base64,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"
  const id = 2;
  const price = 19.99;
  const description = "Touch Sensor Touch Switch Module TTP223B Digital Capacitive Touch module Increase the Filter Circuit More Stable for Arduino"
  const notrating = 3.5;
  const name = "Product"
  
  return (
    <div id='productDetailsPage'>
      <div className='product-details-image'>
        <div id='image'>
          <img src={image} alt={name}/>
        </div>
        
      </div>


      <div className='product-details'>
          <h2>{name}</h2>
          <Rating name="Rating" value={notrating} readOnly />
          
          

          <div className='price-details'>
            <h2>${price}</h2>
              <div className='quantity'>
                <p>Quantity:</p>
                <QuantityIncrementer/>
              </div>
              
            <p>{description}</p>
          </div>


          <div id='button-container'>
          <Button className='button' variant="contained">Add to Cart</Button>
          
          <Button className='button' variant="contained">Buy Now</Button>

          </div>
          
      </div>
      
    </div>
  );
}

export default ProductDetails
