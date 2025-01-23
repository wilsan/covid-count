import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./appDataSlice";

export const store = configureStore({
  reducer: {
    appDate: appDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
