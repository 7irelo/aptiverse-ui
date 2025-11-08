// lib/services/api-client.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://api.aptiverse.co.za/api'
    : 'https://localhost:44390/api');

const createApiClients = () => {
  let httpsAgent = undefined;
  
  if (process.env.NODE_ENV === 'development') {
    try {
      const https = require('https');
      httpsAgent = new https.Agent({
        rejectUnauthorized: false,
        keepAlive: true,
        maxSockets: 50,
      });
    } catch (error) {
      console.error('❌ Failed to create HTTPS agent:', error);
    }
  }

  const baseConfig = {
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
    ...(httpsAgent && { httpsAgent }),
  };

  const authClient = axios.create(baseConfig);
  const apiClient = axios.create(baseConfig);

  authClient.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.error('❌ API Request Error:', error);
      return Promise.reject(error);
    }
  );

  authClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error('❌ API Response Error:', {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        statusText: error.response?.statusText,
        url: error.config?.url,
        baseURL: error.config?.baseURL,
        stack: error.stack
      });
      return Promise.reject(error);
    }
  );

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
    console.error('❌ Error getting auth token:', error);
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
      console.error('❌ Error adding auth token:', error);
    }
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
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
    console.log('🔐 authApi.login called with:', { 
      email: data.email,
      passwordLength: data.password.length 
    });
    
    try {
      const response = await authClient.post<AuthResponse>('/auth/login', data);
      return response.data;
    } catch (error: any) {
      console.error('❌ authApi.login failed:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
      throw error;
    }
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