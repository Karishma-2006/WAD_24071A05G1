import React from 'react';

const products = [
  { id: 1, name: 'Paracetamol 500mg', desc: 'Fever and pain relief', price: 5.99, image: '/images/paracetamol.png' },
  { id: 2, name: 'Vitamin C 1000mg', desc: 'Immunity booster supplements', price: 12.50, image: '/images/vitamin_c.png' },
  { id: 3, name: 'First Aid Kit', desc: 'Essential emergency supplies', price: 24.99, image: '/images/first_aid_kit.png' },
  { id: 4, name: 'Cough Syrup', desc: 'Relief from dry and tickly cough', price: 8.75, image: '/images/cough_syrup.png' },
  { id: 5, name: 'Digital Thermometer', desc: 'Accurate temperature readings', price: 15.00, image: '/images/thermometer.png' },
  { id: 6, name: 'Antiseptic Cream', desc: 'For minor cuts and burns', price: 6.25, image: '/images/antiseptic_cream.png' },
];

const Catalogue = ({ addToCart }) => {
  return (
    <div>
      <h1 className="page-title">Medicine Catalogue</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-content">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-price">${product.price.toFixed(2)}</div>
              <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
