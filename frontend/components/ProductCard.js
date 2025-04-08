import Link from 'next/link';
import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Link href={`/products/${product.id}`} legacyBehavior>
          <a style={{ color: '#0070f3', textDecoration: 'none' }}>View Details</a>
        </Link>
        <button 
          onClick={() => addToCart(product)}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}