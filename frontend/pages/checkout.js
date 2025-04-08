import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../components/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { createOrder } from '../services/api';

// Validation functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidUSDTAddress = (address) => {
  // Basic USDT address validation (Ethereum/TRC20 format)
  const ethRegex = /^0x[a-fA-F0-9]{40}$/;
  const trcRegex = /^T[A-Za-z1-9]{33}$/;
  return ethRegex.test(address) || trcRegex.test(address);
};

export default function Checkout() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    usdtAddress: ''
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.address.trim()) {
      errors.address = 'Shipping address is required';
    }
    
    if (!formData.usdtAddress.trim()) {
      errors.usdtAddress = 'USDT address is required';
    } else if (!isValidUSDTAddress(formData.usdtAddress)) {
      errors.usdtAddress = 'Please enter a valid USDT address (Ethereum or TRC20 format)';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const orderData = {
        customerName: formData.name,
        email: formData.email,
        address: formData.address,
        usdtAddress: formData.usdtAddress,
        items: cart.map(item => ({
          id: item.id,
          quantity: item.quantity,
          price: parseFloat(item.price.replace('$', ''))
        })),
        total: cartTotal
      };

      const result = await createOrder(orderData);
      
      // Clear cart after successful order
      clearCart();
      
      router.push(`/order-confirmation?orderDetails=${encodeURIComponent(JSON.stringify({
        ...formData,
        orderId: result.orderId
      }))}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          <h1>Checkout</h1>
          <p>Your cart is empty. Please add items before checking out.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Checkout</h1>
        {error && (
          <div style={{ 
            padding: '1rem', 
            marginBottom: '1rem', 
            backgroundColor: '#ffebee',
            color: '#c62828',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}
        
        <div style={{ 
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px'
        }}>
          <h2>Order Summary</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                {item.name} x {item.quantity} - ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.25rem',
                borderRadius: '4px',
                border: validationErrors.name ? '1px solid #dc3545' : '1px solid #ccc'
              }}
            />
            {validationErrors.name && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {validationErrors.name}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.25rem',
                borderRadius: '4px',
                border: validationErrors.email ? '1px solid #dc3545' : '1px solid #ccc'
              }}
            />
            {validationErrors.email && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {validationErrors.email}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="address">Shipping Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.25rem',
                borderRadius: '4px',
                border: validationErrors.address ? '1px solid #dc3545' : '1px solid #ccc',
                minHeight: '100px'
              }}
            />
            {validationErrors.address && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {validationErrors.address}
              </div>
            )}
          </div>

          <div style={{ 
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
            border: '1px solid #dee2e6'
          }}>
            <h3>USDT Payment Details</h3>
            <p>Send {cartTotal.toFixed(2)} USDT to the following address:</p>
            <code style={{ 
              display: 'block',
              padding: '1rem',
              backgroundColor: '#e9ecef',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              0x1234...5678 {/* Replace with your actual USDT wallet address */}
            </code>
            
            <label htmlFor="usdtAddress">Your USDT Wallet Address:</label>
            <input
              type="text"
              id="usdtAddress"
              name="usdtAddress"
              value={formData.usdtAddress}
              onChange={handleChange}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.25rem',
                borderRadius: '4px',
                border: validationErrors.usdtAddress ? '1px solid #dc3545' : '1px solid #ccc'
              }}
            />
            {validationErrors.usdtAddress && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {validationErrors.usdtAddress}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? '#ccc' : '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '1.1rem',
              marginTop: '1rem'
            }}
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}