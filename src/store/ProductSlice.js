import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API functions thay vì dùng axios trực tiếp
const mockProducts = [
  { id: 1, title: 'Sản phẩm 1', body: 'Áo khoác', price: 200 },
  { id: 2, title: 'Sản phẩm 2', body: 'Quần jean', price: 150 },
  { id: 3, title: 'Sản phẩm 3', body: 'Tất', price: 30 },
  { id: 4, title: 'Sản phẩm 4', body: 'Giày', price: 800 },
  { id: 5, title: 'Sản phẩm 5', body: 'Túi xách', price: 500 },
  { id: 6, title: 'Sản phẩm 6', body: 'Balo', price: 200 },
  { id: 7, title: 'Sản phẩm 7', body: 'Đồng hồ', price: 1000 },
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    await delay(500);
    return mockProducts;
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData) => {
    await delay(500);
    const newProduct = {
      id: Date.now(),
      ...productData,
      body: productData.description || 'Mô tả mặc định'
    };
    return newProduct;
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, productData }) => {
    await delay(500);
    return { id, ...productData, body: productData.description };
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    await delay(500);
    return id;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;