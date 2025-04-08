import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useCart } from '../../components/CartContext';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description for product 1', category: 'Electronics' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Description for product 2', category: 'Clothing' },
  { id: 3, name: 'Product 3', price: '$30', description: 'Description for product 3', category: 'Electronics' },
  { id: 4, name: 'Product 4', price: '$25', description: 'Description for product 4', category: 'Books' },
  { id: 5, name: 'Product 5', price: '$15', description: 'Description for product 5', category: 'Clothing' },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          <h1>Product not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <span style={{
            backgroundColor: '#e0e0e0',
            padding: '0.25rem 0.75rem',
            borderRadius: '16px',
            display: 'inline-block',
            width: 'fit-content'
          }}>
            {product.category}
          </span>
          
          <h1 style={{ margin: '0' }}>{product.name}</h1>
          <p style={{ fontSize: '1.5rem', color: '#0070f3' }}>{product.price}</p>
          <p style={{ fontSize: '1.1rem' }}>{product.description}</p>
          
          <button
            onClick={() => {
              addToCart(product);
              router.push('/cart');
            }}
            style={{
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              width: 'fit-content'
            }}
          >
            Add to Cart
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}