import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./routes";
import Toast from 'react-native-toast-message';
import { Provider as ReduxProvider} from "react-redux";
import store from "./store/store";

export default function App ( ){
   return (
    <ReduxProvider store={store}>

        
        <NavigationContainer>
            <Routes/>
            <Toast />
        </NavigationContainer>
   </ReduxProvider>
   
   )
}

