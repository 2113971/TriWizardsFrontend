import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../styles/productCard.css'
import Rating from '@mui/material/Rating';
import ProductDetails from '../pages/productDetails';


const ProductCard = ({ id, name, price, description, image}) => {
  return (
    < Link className='product-link product' to={"../pages/productDetails"}>

    <div className='product-image'>
        <img src={image} alt={name}/>
      </div>
       
       <div className='product-card-details'>
        <div className='product-name'>
          <h3>{name}</h3>
          
        </div>
        
        <div className='product-price'>
        <Rating name="Rating" value={description} readOnly />
        <p>${price}</p>
          
        </div>
        
          
       </div>
    </Link>
  );
};

export default ProductCard;


