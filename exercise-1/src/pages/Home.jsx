import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <h1 className="hero-title">Your Health, Delivered</h1>
        <p className="hero-subtitle">Get your medicines quickly, safely, and securely delivered to your doorstep. Trust MediCare for all your healthcare needs.</p>
        <Link to="/catalogue" className="btn" style={{ width: 'auto', padding: '1rem 2rem', fontSize: '1.125rem' }}>
          Browse Medicines <ArrowRight size={20} />
        </Link>
      </div>

      <div className="product-grid" style={{ marginTop: '4rem' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <ShieldCheck size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
          <h3>Verified Products</h3>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>100% genuine medicines from top brands.</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Truck size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
          <h3>Fast Delivery</h3>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Get your orders delivered within 24 hours.</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Clock size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
          <h3>24/7 Support</h3>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Our pharmacists are always here to help you.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
