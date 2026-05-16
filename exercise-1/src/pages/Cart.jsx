import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Your cart is empty</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>Looks like you haven't added any medicines yet.</p>
        <Link to="/catalogue" className="btn" style={{ width: 'auto' }}>Browse Medicines</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">Shopping Cart</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' }}>
        <div className="card" style={{ padding: '0' }}>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div>
                  <h3 className="product-title" style={{ marginBottom: '0.25rem' }}>{item.name}</h3>
                  <div className="product-price" style={{ fontSize: '1.125rem', marginBottom: '0' }}>${item.price.toFixed(2)}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f8fafc', padding: '0.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <button onClick={() => updateQuantity(item.id, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex' }}><Minus size={16} /></button>
                  <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex' }}><Plus size={16} /></button>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.5rem' }}>
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Order Summary</h3>
          <div className="summary-row">
            <span style={{ color: '#64748b' }}>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span style={{ color: '#64748b' }}>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="summary-total summary-row">
            <span>Total</span>
            <span style={{ color: 'var(--primary)' }}>${(total + 5).toFixed(2)}</span>
          </div>
          <button className="btn" style={{ marginTop: '1rem' }} onClick={() => alert('Proceeding to checkout...')}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
