import { useState } from 'react';
import { useRouter } from 'next/router';
import { adminLogin } from '../../services/api';

export default function AdminLogin() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await adminLogin(credentials);
            router.push('/orders');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setCredentials(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div style={{ 
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5'
        }}>
            <div style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Admin Login</h1>
                
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
                        <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
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
                            value={credentials.password}
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
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}