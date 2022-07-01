import React, { useEffect } from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { HomeView } from './Views/Home'
import { LoginView } from './Views/Login'
import { OrdersView } from './Views/Orders';
import auth from '@react-native-firebase/auth'
import { deleteUser, selectIsLoadingUser, selectIsUserLoggedIn, updateUser } from './store/slice/userSlice';
import { getUser } from './services/getUser';
import {useDispatch, useSelector} from 'react-redux';
import { LogoutButton } from './components/LogoutButton';
import { Loading } from './components/Loading';


export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Orders: undefined;
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  export function Routes() {
    const dispatch = useDispatch();
    useEffect(() => {
      auth().onAuthStateChanged(async currentUser => {
        if (currentUser) {
          const user = await getUser(currentUser.uid);
          dispatch(updateUser(user));
        } else {
          dispatch(deleteUser());
        }
      });
    }, [dispatch]);
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
    const isLoadingUser = useSelector(selectIsLoadingUser);
    if (isLoadingUser) {
      return <Loading />;
    }
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1117A3',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontFamily: 'Lato-Regular',
          },
        }}>
        {!isUserLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeView}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginView}
              options={{
                title: 'Entrar no sistema',
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Orders"
            component={OrdersView}
            options={{
              title: 'Pedidos',
              headerRight: () => <LogoutButton />,
            }}
          />
        )}
      </Stack.Navigator>
    );
  }