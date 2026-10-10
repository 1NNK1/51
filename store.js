import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/model/productsSlice';
import cartReducer from '../features/cart/model/cartSlice';

// Конфигурация хранилища
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
