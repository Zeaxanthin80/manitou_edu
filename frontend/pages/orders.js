import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getOrders } from '../services/api';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchOrders() {
            try {
                const data = await getOrders();
                setOrders(data);
            } catch (err) {
                if (err.message === 'Authentication required') {
                    router.push('/admin/login');
                    return;
                }
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchOrders();
    }, [router]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <main style={{ padding: '2rem' }}>
                    <p>Loading orders...</p>
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <main style={{ padding: '2rem' }}>
                    <p>Error: {error}</p>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1>Orders</h1>
                </div>
                
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <div>
                        {orders.map((order) => (
                            <div 
                                key={order.id} 
                                style={{ 
                                    marginBottom: '1.5rem',
                                    padding: '1.5rem',
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    marginBottom: '1rem',
                                    padding: '0.5rem',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '4px'
                                }}>
                                    <h3 style={{ margin: 0 }}>Order #{order.id}</h3>
                                    <span style={{ 
                                        padding: '0.25rem 0.75rem',
                                        backgroundColor: order.status === 'pending' ? '#fff3cd' : '#d4edda',
                                        color: order.status === 'pending' ? '#856404' : '#155724',
                                        borderRadius: '999px',
                                        fontSize: '0.875rem'
                                    }}>
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </span>
                                </div>

                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <p><strong>Customer:</strong> {order.customer_name}</p>
                                    <p><strong>Email:</strong> {order.email}</p>
                                    <p><strong>Address:</strong> {order.address}</p>
                                    <p><strong>USDT Address:</strong> {order.usdt_address}</p>
                                    <p><strong>Total:</strong> ${Number(order.total).toFixed(2)}</p>
                                    <p><strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}