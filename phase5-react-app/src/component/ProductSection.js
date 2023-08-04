// ProductSection.js
import React from 'react';

const ProductSection = () => {
  const styles = {
    productSection: {
      marginBottom: '20px',
    },
    productSectionTitle: {
      color: '#000',
      fontFamily: 'Inria Serif, serif',
      fontSize: '50px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      textAlign: 'center',
    },
    productSectionSubtitle: {
      overflow: 'hidden',
      color: 'var(--black, #000)',
      textAlign: 'center',
      textOverflow: 'ellipsis',
      fontFamily: 'Inria Sans, sans-serif',
      fontSize: '35px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
  };

  return (
    <div className="product-section" style={styles.productSection}>
      {/* Title and Subtitle */}
      <h1 className="product-section-title" style={styles.productSectionTitle}>
        Best Selling Products and Services
      </h1>
      <h2 className="product-section-subtitle" style={styles.productSectionSubtitle}>
        Empowering Farmers, Nourishing the World.
      </h2>
    </div>
  );
};

export default ProductSection;
