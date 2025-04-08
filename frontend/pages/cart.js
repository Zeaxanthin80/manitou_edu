import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../components/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((item) => (
                <li key={item.id} style={{ 
                  marginBottom: '1rem',
                  padding: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label>
                      Quantity:
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        style={{ margin: '0 0.5rem', width: '60px' }}
                      />
                    </label>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: '#ff4444',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px'
            }}>
              <h2>Total: ${cartTotal.toFixed(2)}</h2>
              <button 
                onClick={() => window.location.href = '/checkout'}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}