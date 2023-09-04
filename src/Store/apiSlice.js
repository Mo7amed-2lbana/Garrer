import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const apiLoginCarrer = createAsyncThunk('api/apipetza', async function (value) {



    let data = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , value ) 
    return data.data; 
   
});



const apiSlice = createSlice({

    name: 'api',

    initialState: {

        apipetza: null
    },

    extraReducers: function (builder) {

      builder.addCase("fulfilled" , (state , action)=>{

        state.apipetza = action.payload;

      })

    }
})

export default apiSlice.reducer;