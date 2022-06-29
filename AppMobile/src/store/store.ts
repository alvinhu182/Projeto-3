import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";


const store = configureStore({
    reducer: {
        userData: userReducer,
       

        
    },
    middleware: (getDefaultMiddlewares) => {
        const middlewares = getDefaultMiddlewares()
        if (__DEV__) {
            const createDebugger = require('redux-flipper').default;
            middlewares.push(createDebugger());
        }
        return middlewares;
    },
})

export default store

export type RootState = ReturnType <typeof store.getState>
 