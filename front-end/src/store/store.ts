import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import estimateReducer from "./slice/estimateSlice"

const store = configureStore({
    reducer: {
        userData: userReducer,
        estimateData: estimateReducer

        
    }
})

export default store

export type RootState = ReturnType <typeof store.getState>
 