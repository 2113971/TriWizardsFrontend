import React from 'react';

function ProductDetails({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Rating: {product.rating}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
