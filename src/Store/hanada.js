import { createSlice } from "@reduxjs/toolkit";




 let sliceOne = createSlice({

    name :'ahmed' ,

  initialState:{
   counter : 22
  },

    reducers:{
       hazawed :(ahmed)=>{
        ahmed.counter += 1

       },
       haynaas :(ahmed)=>{
        ahmed.counter -= 1

       }
    }


})

 export let   reduserTwo = sliceOne.reducer
 export let   { haynaas , hazawed } = sliceOne.actions