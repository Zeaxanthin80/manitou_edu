import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            router.push('/login');
            return;
        }

        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch('/api/orders/my-orders', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            });

            if (!res.ok) {
                throw new Error('Failed to fetch orders');
            }

            const data = await res.json();
            setOrders(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <main style={{ 
                minHeight: 'calc(100vh - 160px)',
                padding: '2rem',
                backgroundColor: '#f5f5f5'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h1 style={{ marginBottom: '2rem' }}>My Orders</h1>

                    {error && (
                        <div style={{
                            backgroundColor: '#fee2e2',
                            color: '#dc2626',
                            padding: '12px',
                            borderRadius: '4px',
                            marginBottom: '16px'
                        }}>
                            {error}
                        </div>
                    )}

                    {orders.length === 0 ? (
                        <div style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <p>You haven't placed any orders yet.</p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gap: '1rem'
                        }}>
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    style={{
                                        padding: '1.5rem',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1rem'
                                    }}>
                                        <div>
                                            <h3 style={{ marginBottom: '0.5rem' }}>
                                                Order #{order.id}
                                            </h3>
                                            <p style={{ color: '#666' }}>
                                                {new Date(order.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div style={{
                                            backgroundColor: '#f3f4f6',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '0.875rem'
                                        }}>
                                            {order.status}
                                        </div>
                                    </div>

                                    <div>
                                        {order.items.map((item, index) => (
                                            <div 
                                                key={index}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '8px 0'
                                                }}
                                            >
                                                <div>
                                                    <p>{item.product_name}</p>
                                                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                                                        Quantity: {item.quantity}
                                                    </p>
                                                </div>
                                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{
                                        borderTop: '1px solid #e5e7eb',
                                        marginTop: '12px',
                                        paddingTop: '12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        fontWeight: '500'
                                    }}>
                                        <p>Total</p>
                                        <p>${order.total.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}