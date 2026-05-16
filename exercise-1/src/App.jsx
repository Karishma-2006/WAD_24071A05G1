import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Catalogue from './pages/Catalogue';
import Cart from './pages/Cart';
import OrderTracking from './pages/OrderTracking';
import Contact from './pages/Contact';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalogue" element={<Catalogue addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
            <Route path="/tracking" element={<OrderTracking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '2rem' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-color)' }}>&copy; {new Date().getFullYear()} MediCare-24071AO5G1</p>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
