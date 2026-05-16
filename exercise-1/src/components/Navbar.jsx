import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, HeartPulse, User, Package, Phone } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <HeartPulse size={32} />
        <span>MediCare</span>
      </Link>
      <div className="nav-links">
        <Link to="/catalogue" className="nav-link">Shop</Link>
        <Link to="/tracking" className="nav-link"><Package size={20} /> Track</Link>
        <Link to="/contact" className="nav-link"><Phone size={20} /> Contact</Link>
        <Link to="/login" className="nav-link"><User size={20} /> Login</Link>
        <Link to="/cart" className="nav-link">
          <ShoppingCart size={20} />
          <span>Cart</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
