// lib/api-client.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:44390/api';

const createApiClients = () => {
  const allowSelfSigned = process.env.ALLOW_SELF_SIGNED === 'true';
  
  let httpsAgent = undefined;
  
  if (allowSelfSigned && typeof window === 'undefined') {
    const https = require('https');
    if (process.env.NODE_ENV === 'production') {
      console.warn('⚠️  SECURITY: Using self-signed certificates in production');
    }
    httpsAgent = new https.Agent({
      rejectUnauthorized: false,
      keepAlive: true,
      maxSockets: 50,
    });
  }

  const baseConfig = {
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 15000,
    ...(httpsAgent && { httpsAgent }),
  };

  const authClient = axios.create(baseConfig);
  const apiClient = axios.create(baseConfig);

  return { authClient, apiClient };
};

const clients = createApiClients();

export const authClient = clients.authClient;
export const apiClient = clients.apiClient;

const getAuthToken = async (): Promise<string | null> => {
  try {
    if (typeof window === 'undefined') {
      const { getServerSession } = await import('next-auth');
      const session = await getServerSession();
      return session?.accessToken as string || null;
    } else {
      const { getSession } = await import('next-auth/react');
      const session = await getSession();
      return session?.accessToken as string || null;
    }
  } catch (error) {
    return null;
  }
};

apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // Silent fail - proceed without token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  userType: 'Superuser' | 'Admin' | 'Student' | 'Parent';
  phoneNumber?: string;
}

interface AuthResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    userType: string;
  };
  token: string;
  refreshToken: string;
}

export const authApi = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await authClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await authClient.post<AuthResponse>('/auth/register', data);
    return response.data;
  },
};

export const api = {
  get: <T>(url: string) => apiClient.get<T>(url).then(response => response.data),
  post: <T>(url: string, data?: any) => apiClient.post<T>(url, data).then(response => response.data),
  put: <T>(url: string, data?: any) => apiClient.put<T>(url, data).then(response => response.data),
  delete: <T>(url: string) => apiClient.delete<T>(url).then(response => response.data),
};