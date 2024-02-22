import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  quantity: number;
};

type InitialState = {
  cartItems: CartItem[];
};

const initialState: InitialState = {
  cartItems: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action) {
      const id = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity++;
      } else {
        state.cartItems.push({ id, quantity: 1 });
      }
    },

    increaseProductQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseProductQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item?.quantity > 0) item.quantity--;
      if (item?.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    removeProduct(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const getTotalQuantity = (state) => {
  return state.product.cartItems.reduce((sum, item) => sum + item.quantity, 0);
};

export const {
  getProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
  clearCart,
} = productSlice.actions;
export default productSlice.reducer;
