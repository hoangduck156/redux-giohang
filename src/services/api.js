import axios from 'axios';

// Tạo instance axios với config mặc định
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API mẫu, thay bằng API thực tế
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor cho request
api.interceptors.request.use(
  (config) => {
    // Thêm token nếu có
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi chung
    if (error.response?.status === 401) {
      // Xử lý unauthorized
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints cho products (sử dụng jsonplaceholder làm mẫu)
export const productAPI = {
  getAll: () => api.get('/posts'), // Thay bằng endpoint thực tế
  getById: (id) => api.get(`/posts/${id}`),
  create: (data) => api.post('/posts', data),
  update: (id, data) => api.put(`/posts/${id}`, data),
  delete: (id) => api.delete(`/posts/${id}`),
};

export default api;