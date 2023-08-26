import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./LoadingSlice";
import { reduserTwo } from "./hanada";
import { redusethree, sil } from "./searsh";




export const store = configureStore({
  reducer: {
    handleLoading: loadingReducer,
    reduserTwo:reduserTwo,
    sil:sil
   

  },


});