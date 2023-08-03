import React from 'react';

const ProductItem = ({ imageSrc, alt, title, description, price }) => {
  const styles = {
    productItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px',
      padding: '20px',
      background: 'linear-gradient(45deg, #f5f5f5, #fff)', // Add gradient background
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '250px',
    },
    productImage: {
      width: '200px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px', // Increase border radius for a smoother appearance
      marginBottom: '10px',
    },
    productTitle: {
      fontSize: '24px',
      fontWeight: 'bold', // Make the title bold for emphasis
      margin: '10px 0', // Adjust the margin for better spacing
      color: '#333',
    },
    productDescription: {
      fontSize: '16px',
      marginBottom: '10px',
      color: '#666',
    },
    productPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0', // Adjust the margin for better spacing
      color: '#4CAF50',
    },
    productButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.productItem}>
      <img style={styles.productImage} src={imageSrc} alt={alt} />
      <h2 style={styles.productTitle}>{title}</h2>
      <p style={styles.productDescription}>{description}</p>
      <span style={styles.productPrice}>{price}</span>
      <button style={styles.productButton}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
