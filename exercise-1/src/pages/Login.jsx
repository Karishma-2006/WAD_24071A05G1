import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful!');
    navigate('/');
  };

  return (
    <div className="card card-centered">
      <h2 className="page-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" name="email" className="form-input" required onChange={handleChange} placeholder="john@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-input" required onChange={handleChange} placeholder="••••••••" />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <div className="auth-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
