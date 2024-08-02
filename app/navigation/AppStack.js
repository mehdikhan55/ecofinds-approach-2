import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { HomeTabScreen, MessageTabScreen , AccountTabScreen  } from '../screens';


const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            initialRouteName='Listings'
            screenOptions={{
                headerShown: false
            }}
            options={{

            }}
        >
            <Tab.Screen
                name="Listings"
                component={HomeTabScreen}
            />
            <Tab.Screen
                name="Messages tab"
                component={MessageTabScreen}
            />
            <Tab.Screen
                name="Account"
                component={AccountTabScreen}
            />

        </Tab.Navigator>

    )
}

export default AppStack