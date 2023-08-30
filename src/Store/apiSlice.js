import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




// handle login 
export const handleLogin = createAsyncThunk(
  "api/apipetza",
  async function (values) {
    let data = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signin `,
      values
    );
    return data.data;
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    apipetza: null,
  },

  extraReducers: function (builder) {
    builder.addCase("fulfilled", (state, { payload }) => {
      state.apipetza = payload;
    });
  },
});
