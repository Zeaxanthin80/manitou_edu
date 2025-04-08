import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { registerUser } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await registerUser(formData);
            router.push('/dashboard');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div>
            <Navbar />
            <main style={{ 
                minHeight: 'calc(100vh - 160px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                padding: '2rem'
            }}>
                <div style={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                    <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Create Account</h1>
                    
                    {error && (
                        <div style={{
                            padding: '0.75rem',
                            backgroundColor: '#fee2e2',
                            color: '#dc2626',
                            borderRadius: '4px',
                            marginBottom: '1rem'
                        }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                backgroundColor: loading ? '#ccc' : '#0070f3',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                marginBottom: '1rem'
                            }}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>

                        <p style={{ textAlign: 'center' }}>
                            Already have an account?{' '}
                            <Link href="/login" style={{ color: '#0070f3', textDecoration: 'none' }}>
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}