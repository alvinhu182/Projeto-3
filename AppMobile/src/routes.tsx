import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { HomeView } from './Views/Home'
import { LoginView } from './Views/Login'

export type RootStackParamList = {
    Home: undefined,
    Login: undefined,

};

const Stack = createNativeStackNavigator<RootStackParamList>();
   

export function Routes () {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1117a3'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontFamily:  'Lato-Regular',
            } ,
        }}>
            <Stack.Screen name='Home' 
            component={HomeView}
            options ={{
                headerShown: false,
                
            }}
            />
            <Stack.Screen name='Login' component={LoginView} options={{
                title: 'Entrar no sistema',
            }} 
            />
        </Stack.Navigator>
    )
}