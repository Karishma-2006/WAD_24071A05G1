import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="card card-centered">
      <h2 className="page-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-input" required onChange={handleChange} placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" name="email" className="form-input" required onChange={handleChange} placeholder="john@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-input" required onChange={handleChange} placeholder="••••••••" />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input type="password" name="confirmPassword" className="form-input" required onChange={handleChange} placeholder="••••••••" />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <div className="auth-link">
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default Registration;
