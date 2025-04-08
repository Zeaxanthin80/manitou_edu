import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from './CartContext';

export default function Navbar() {
    const { cart } = useCart();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        router.push('/');
    };

    return (
        <nav style={{
            backgroundColor: 'white',
            padding: '1rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                    Manitou
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link href="/products" style={{ textDecoration: 'none', color: '#666' }}>
                        Products
                    </Link>
                    
                    {isLoggedIn ? (
                        <>
                            <Link href="/dashboard" style={{ textDecoration: 'none', color: '#666' }}>
                                My Orders
                            </Link>
                            <button
                                onClick={handleLogout}
                                style={{
                                    border: 'none',
                                    background: 'none',
                                    color: '#666',
                                    cursor: 'pointer',
                                    padding: 0
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" style={{ textDecoration: 'none', color: '#666' }}>
                                Login
                            </Link>
                            <Link href="/register" style={{ textDecoration: 'none', color: '#666' }}>
                                Register
                            </Link>
                        </>
                    )}

                    <Link 
                        href="/cart"
                        style={{
                            textDecoration: 'none',
                            color: '#666',
                            position: 'relative'
                        }}
                    >
                        Cart
                        {cart.length > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-12px',
                                backgroundColor: '#0070f3',
                                color: 'white',
                                borderRadius: '9999px',
                                padding: '0.25rem 0.5rem',
                                fontSize: '0.75rem'
                            }}>
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}