import React, { useState } from 'react';
import { PackageCheck, Truck, CheckCircle, Package } from 'lucide-react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if(orderId) setTracked(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title">Track Your Order</h1>
      <div className="card">
        <form onSubmit={handleTrack} style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Enter Order ID (e.g. ORD-12345)" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn" style={{ width: 'auto' }}>Track Order</button>
        </form>
      </div>

      {tracked && (
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Order Status: <span style={{ color: 'var(--primary)' }}>#{(orderId || 'ORD-12345').toUpperCase()}</span></h2>
          <div className="tracking-timeline">
            <div className="tracking-step">
              <div className="step-icon"><PackageCheck size={18} /></div>
              <div className="step-content">
                <div className="step-title">Order Confirmed</div>
                <div className="step-desc">Your order has been received and confirmed.</div>
              </div>
            </div>
            <div className="tracking-step">
              <div className="step-icon"><Package size={18} /></div>
              <div className="step-content">
                <div className="step-title">Processing</div>
                <div className="step-desc">Our pharmacist is packing your medicines.</div>
              </div>
            </div>
            <div className="tracking-step">
              <div className="step-icon"><Truck size={18} /></div>
              <div className="step-content">
                <div className="step-title">Out for Delivery</div>
                <div className="step-desc">Your package is on its way to your address.</div>
              </div>
            </div>
            <div className="tracking-step">
              <div className="step-icon pending"><CheckCircle size={18} /></div>
              <div className="step-content">
                <div className="step-title" style={{ color: '#64748b' }}>Delivered</div>
                <div className="step-desc">Package delivered successfully.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
