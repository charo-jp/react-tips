import { Store, configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// this is to specify what type of date you want to pass to dispatch functions.
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
