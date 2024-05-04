import React from 'react';
import ProductDetails from './productCard';
import "../styles/productGrid.css"

const ProductGrid = ({ products }) => {
  return (
    <div className="product-card">
      {products.map(product => (
        <ProductDetails
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
