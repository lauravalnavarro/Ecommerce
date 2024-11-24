import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del carrito
const initialState = {
  items: [], // Lista de productos en el carrito
  totalQuantity: 0, // Total de productos en el carrito
  totalPrice: 0, // Precio total de los productos en el carrito
};

// Crear el slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, quantity, name, image } = action.payload;

      // Comprobamos si el producto ya está en el carrito
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        // Si ya está en el carrito, incrementamos la cantidad
        existingItem.quantity += quantity;
      } else {
        // Si no está en el carrito, lo agregamos
        state.items.push({ id, name, image, price, quantity });
      }

      // Actualizamos el total de productos y el precio total
      state.totalQuantity += quantity;
      state.totalPrice += price * quantity;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        // Reducimos la cantidad del producto o lo eliminamos si es necesario
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // Actualizamos la cantidad del producto
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice += existingItem.price * (quantity - existingItem.quantity);
        existingItem.quantity = quantity;
      }
    },
  },
});

// Acciones exportadas para usarlas en los componentes
export const { addToCart, removeFromCart, clearCart, updateCartQuantity } = cartSlice.actions;

// Reducer exportado para el store
export default cartSlice.reducer;
