import React from 'react';

const ProductItem = ({ imageSrc, alt, title, description, price }) => {
  return (
    <div className="product-item">
      <img className="product-image" src={imageSrc} alt={alt} />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <span className="product-price">{price}</span>
      <button className="product-button">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
