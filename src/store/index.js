import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './ProductSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      cart: state.cart,
      products: state.products
    });
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;