import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./LoadingSlice";
import { reduserTwo } from "./hanada";
import { redusethree, sil } from "./searsh";




export const store = configureStore({
  reducer: {
    handleLoading: loadingReducer,
    reduserTwo:reduserTwo,
<<<<<<< HEAD
    sil:sil,
=======
    sil:sil
   

>>>>>>> 976fbf78da92f4f0ac446cec09a9f6b4fec511fe
  },


});