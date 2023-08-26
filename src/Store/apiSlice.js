import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


createAsyncThunk ( 'api/apipetza' , async function ( values ){



let data = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin `,values)


});



 const apiSlice = createSlice({

    name :'api',
    initialState :{
        apipetza :null
    },

    extraReducers : function( builder   ){

        builder.addCase(  function (){
        
            
        }  )

    }
 })