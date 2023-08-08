import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const FarmingGroupAdminProducts = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('jwt');

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    // Fetch products from the API
    fetch('/farmer_products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setDescription(product.description);
    setShowPopup(true);
  };

  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div
        key={product.id}
        className="data-item"
        style={{
          boxShadow: 'md',
          borderRadius: 'md',
          padding: '1rem',
          cursor: 'pointer',
        }}
        onClick={() => handleProductClick(product)}
      >
        <div>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '0.5rem' }}>{product.name}</h2>
          <p style={{ fontSize: '14px', marginTop: '0.5rem' }}>Price: ${product.price}</p>
        </div>
      </div>
    ));
  };

  if (!user) {
    return <h2>Please log in to view the available products for sale.</h2>;
  }

  const handlePurchase = () => {
    if (!selectedProduct) {
      return; // No product selected, do nothing
    }

    const saleData = {
      user_id: user.id,
      farmer_product_id: selectedProduct.id,
      quantity: quantity,
    };

    setLoading(true);

    fetch('/farmer_product_sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ farmer_product_sale: saleData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully bought ${quantity} ${selectedProduct.name}s for ${user.name}!`);
        window.alert(`Successfully bought ${quantity} ${selectedProduct.name}s for ${user.name}!`);
        setShowPopup(false);
      })
      .catch((error) => {
        console.error('Error creating product sale:', error);
      })
      .finally(() => {
        setLoading(false);
        setShowPopup(false);
      });
  };

  return (
    <div className="product-container" style={{ padding: '2rem', backgroundImage: "url('../img/farm.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ fontSize: '32px', fontFamily: 'Lobster', whiteSpace: 'nowrap', marginBottom: '2rem' }}>Farm Utilities and Equipment</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', justifyContent: 'center' }}>
        {renderProducts()}
      </div>
      {showPopup && selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>{selectedProduct.name}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '1rem' }} />
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem' }}>Price: ${selectedProduct.price}</p>
          <p style={{ fontSize: '16px', marginBottom: '0.5rem' }}>{description}</p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <button onClick={handleDecrementQuantity} style={{ fontSize: '20px', marginRight: '0.5rem', cursor: 'pointer' }}>-</button>
            <input
              type="text"
              value={quantity}
              readOnly
              style={{ width: '3rem', textAlign: 'center', borderRight: 'none', borderLeft: 'none', fontSize: '18px' }}
            />
            <button onClick={handleIncrementQuantity} style={{ fontSize: '20px', marginLeft: '0.5rem', cursor: 'pointer' }}>+</button>
          </div>
          <button
            style={{
              backgroundColor: '#319795',
              color: '#fff',
              padding: '0.5rem 1rem',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={handlePurchase}
          >
            Purchase Product
          </button>
          <button
            style={{
              backgroundColor: '#e53e3e',
              color: '#fff',
              padding: '0.5rem 1rem',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '1rem',
            }}
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}
      {loading && (
        <div style={{ marginTop: '1rem' }}>
          <div className="spinner" style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#319795', borderRadius: '50%', borderTop: '3px solid transparent', width: '30px', height: '30px', animation: 'spin 1s linear infinite' }}></div>
        </div>
      )}
    </div>
  );
};

export default FarmingGroupAdminProducts;
