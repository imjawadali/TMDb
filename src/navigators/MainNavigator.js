import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OverViewScreen from '../screens/OverViewScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="OverView">
            <Stack.Screen
                name="OverView"
                component={OverViewScreen}
                options={{
                    title: "Movies List",
                    headerTitleAlign: 'center',
                    headerShadowVisible: false
                }}
            />
            <Stack.Screen
                name="MovieDetails"
                component={MovieDetailsScreen}
                options={(props) => ({
                    header: () => <Header onBack={() => props.navigation.goBack()} />,
                    headerShadowVisible: false
                })}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator