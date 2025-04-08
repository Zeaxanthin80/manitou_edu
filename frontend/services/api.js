const API_URL = 'http://localhost:5000/api';

function getAuthToken() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('userToken') || localStorage.getItem('adminToken');
    }
    return null;
}

export async function registerUser(userData) {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to register');
    }

    const data = await response.json();
    localStorage.setItem('userToken', data.token);
    return data;
}

export async function loginUser(credentials) {
    const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to login');
    }

    const data = await response.json();
    localStorage.setItem('userToken', data.token);
    return data;
}

export async function getUserOrders() {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication required');
    }

    const response = await fetch(`${API_URL}/users/orders`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    
    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch orders');
    }
    
    return response.json();
}

export async function adminLogin(credentials) {
    const response = await fetch(`${API_URL}/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('Invalid credentials');
    }

    const data = await response.json();
    localStorage.setItem('adminToken', data.token);
    return data;
}

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}

export async function getProduct(id) {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return response.json();
}

export async function createOrder(orderData) {
    const token = getAuthToken();
    const headers = {
        'Content-Type': 'application/json',
    };
    
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers,
        body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
        throw new Error('Failed to create order');
    }
    return response.json();
}

export async function getOrder(id) {
    const response = await fetch(`${API_URL}/orders/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    return response.json();
}

export async function getOrders() {
    const token = getAuthToken();
    if (!token) {
        throw new Error('Authentication required');
    }

    const response = await fetch(`${API_URL}/orders`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    
    if (response.status === 401) {
        localStorage.removeItem('adminToken');
        throw new Error('Authentication required');
    }
    
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    
    return response.json();
}