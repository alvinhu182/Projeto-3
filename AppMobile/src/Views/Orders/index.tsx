import { faRectangleList as farRectangleList } from "@fortawesome/free-regular-svg-icons/faRectangleList";
import { faRectangleList as fasRectangleList } from "@fortawesome/free-solid-svg-icons/faRectangleList";
import { faClock as farClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faClock as fasClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faCircleCheck as farCircleCheck } from "@fortawesome/free-regular-svg-icons/faCircleCheck";
import { faCircleCheck as fasCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { AcceptedOrdersView } from "../AcceptedOrders";
import { FinishedOrdersView } from "../FinishedOrders";
import { OpenOrdersView } from "../OpenOrders";
import { selectUser } from "../../store/slice/userSlice";
import { loadOrders } from "../../store/slice/orderSlice";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";


const Tab = createBottomTabNavigator()

 export function OrdersView () {
     const user = useSelector(selectUser)
     const userId = user?.id || '';
    const dispatch = useAppDispatch();
    useEffect( () => {
  
        dispatch(loadOrders(userId))
    },[userId, dispatch]) ;
    return (
     <Tab.Navigator 
     screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
            let icon;
            switch (route.name) {
                case 'OpenOrders' :
                icon = focused ? fasRectangleList : farRectangleList;
                break;
                case 'AcceptedOrders':
                    icon = focused ? fasClock : farClock;
                break;
                case 'FinishedOrders':
                    icon = focused ? fasCircleCheck : farCircleCheck
                break;
                default:
                    return null;
            }
            return <FontAwesomeIcon icon={icon} color={color} size= {size} />;
        },
        tabBarActiveTintColor: '#1117a3',
        tabBarInactiveTintColor: '#333333',
        tabBarInactiveBackgroundColor: '#EEEEEE',
        tabBarActiveBackgroundColor: '#EEEEEE',
        tabBarStyle: {
            fontFamily: 'Lato-Regular',
            fontSize: 12,
        }
     })}>
       <Tab.Screen name="OpenOrders" component=
       {OpenOrdersView} options={{
        title: 'Disponiveis'
       }} /> 
       <Tab.Screen name="AcceptedOrders" component=
       {AcceptedOrdersView} options={{
        title: 'Em Andamento'
       }} />
       <Tab.Screen name="FinishedOrders" component=
       {FinishedOrdersView} options={{
        title: 'Finalizados'
       }} />
     </Tab.Navigator>
    )
}