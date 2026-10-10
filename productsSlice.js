import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Загрузка товаров
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return [
    { id: 1, name: 'iPhone 15', price: 999, description: 'Latest Apple smartphone', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Samsung S24', price: 899, description: 'Powerful Android phone', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Pixel 8', price: 699, description: 'Best camera phone', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'MacBook Air', price: 1199, description: 'Thin and light laptop', image: 'https://via.placeholder.com/150' },
  ];
});

// Слайс продуктов
const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
