import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./LoadingSlice";

export const store = configureStore({
  reducer: {
    handleLoading: loadingReducer,
  },
});
