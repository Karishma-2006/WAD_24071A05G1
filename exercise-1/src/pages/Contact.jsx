import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div>
      <h1 className="page-title">Contact Us</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="card">
          <h2 style={{ marginBottom: '1.5rem' }}>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" required rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
        <div>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Get in touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '600' }}>Phone Support</div>
                  <div style={{ color: '#64748b' }}>1-800-MEDICARE</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '600' }}>Email Address</div>
                  <div style={{ color: '#64748b' }}>support@medicare.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '600' }}>Store Location</div>
                  <div style={{ color: '#64748b' }}>123 Health Ave, Medical District</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
