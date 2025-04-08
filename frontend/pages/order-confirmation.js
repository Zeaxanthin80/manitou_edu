import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../components/CartContext';

export default function OrderConfirmation() {
  const router = useRouter();
  const { orderDetails } = router.query;
  const { cart, cartTotal } = useCart();

  useEffect(() => {
    if (!orderDetails) {
      router.push('/');
    }
  }, [orderDetails, router]);

  if (!orderDetails) {
    return null;
  }

  const details = JSON.parse(decodeURIComponent(orderDetails));

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1>Order Confirmed!</h1>
            <p>Thank you for your purchase</p>
            <p style={{ 
              backgroundColor: '#e9ecef', 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              margin: '1rem 0',
              fontFamily: 'monospace'
            }}>
              Order ID: {details.orderId}
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2>Order Details</h2>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '0.5rem 1rem',
              marginTop: '1rem'
            }}>
              <strong>Name:</strong>
              <span>{details.name}</span>
              
              <strong>Email:</strong>
              <span>{details.email}</span>
              
              <strong>Shipping Address:</strong>
              <span style={{ whiteSpace: 'pre-wrap' }}>{details.address}</span>
              
              <strong>USDT Address:</strong>
              <span style={{ wordBreak: 'break-all', fontFamily: 'monospace' }}>
                {details.usdtAddress}
              </span>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2>Items</h2>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              {cart.map((item) => (
                <li key={item.id} style={{
                  padding: '1rem',
                  borderBottom: '1px solid #dee2e6',
                  backgroundColor: 'white'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              borderTop: '2px solid #dee2e6',
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold'
            }}>
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <div style={{
            backgroundColor: '#e9ecef',
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '2rem'
          }}>
            <h2>Payment Instructions</h2>
            <p>Please send {cartTotal.toFixed(2)} USDT to the following address:</p>
            <code style={{
              display: 'block',
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '4px',
              marginTop: '0.5rem',
              wordBreak: 'break-all'
            }}>
              0x1234...5678
            </code>
            <p style={{ marginTop: '1rem' }}>
              Your order will be processed once the payment is confirmed. Please save your Order ID for reference.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem', color: '#666' }}>
              A confirmation email has been sent to {details.email}
            </p>
            <button
              onClick={() => router.push('/')}
              style={{
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}