// lib/services/api-client.ts
import axios from 'axios';
import { getSession } from './auth';

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
      console.error('Failed to create HTTPS agent:', error);
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

  apiClient.interceptors.request.use(
    async (config) => {
      try {
        const session = await getSession();
        if (session?.accessToken) {
          config.headers.Authorization = `Bearer ${session?.accessToken}`;
        }
      } catch (error) {
        console.error('Error in request interceptor:', error);
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return { authClient, apiClient };
};

const clients = createApiClients();

export const authClient = clients.authClient;
export const apiClient = clients.apiClient;

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