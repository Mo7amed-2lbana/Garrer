import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    incrementValue: (state) => {
      state.value += 1;
    },
  },
});


export const loadingReducer = loadingSlice.reducer;

export const {incrementValue} = loadingSlice.actions;