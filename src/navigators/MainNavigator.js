import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OverViewScreen from '../screens/OverViewScreen';
import ItemsListingScreen from '../screens/ItemsListingScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="OverView">
            <Stack.Screen
                name="OverView"
                component={OverViewScreen}
                options={{
                    title: "Welcome to Supertal App",
                    headerTitleAlign: 'center',
                    headerShadowVisible: false
                }}
            />
            <Stack.Screen
                name="ItemsListing"
                component={ItemsListingScreen}
                options={(props) => ({
                    header: () => <Header onBack={() => props.navigation.goBack()} />,
                    headerShadowVisible: false
                })}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator