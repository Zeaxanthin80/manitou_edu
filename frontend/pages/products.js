import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';

const categories = ['All', 'Electronics', 'Clothing', 'Books'];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <p>Loading products...</p>
      </main>
      <Footer />
    </div>
  );

  if (error) return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <p>Error: {error}</p>
      </main>
      <Footer />
    </div>
  );

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '0.5rem',
              width: '100%',
              maxWidth: '300px',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: selectedCategory === category ? '#0070f3' : '#fff',
                  color: selectedCategory === category ? '#fff' : '#000',
                  border: '1px solid #0070f3',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <h1>Products {selectedCategory !== 'All' ? `- ${selectedCategory}` : ''}</h1>
        
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}