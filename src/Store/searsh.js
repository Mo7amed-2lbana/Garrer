import { createSlice } from "@reduxjs/toolkit";



    let slicethree = createSlice({

        name : 'srarsh',

        initialState :{ title : '...'},

        reducers :{
            changsearsh : (state ,{payload})=>{

                state.title = payload
            }
        },
    })

    export let sil =slicethree.reducer;

    export let {changsearsh} =slicethree.actions