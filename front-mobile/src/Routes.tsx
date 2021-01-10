import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./components/Home";
import Orders from "./components/Orders";
import OrderDetails from "./components/OrderDetails";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFFFFF'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
                <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes