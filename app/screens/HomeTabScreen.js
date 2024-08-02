import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
    ListingsScreen,
    ListingDetailsScreen,
    MessagesScreen,
    ViewImageScreen,
} from './';

const Stack = createNativeStackNavigator()

const HomeTabScreen = () => {
  return (
    <Stack.Navigator
        initialRouteName='Listings'
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen 
            name='Listings'
            component={ListingsScreen}
        />
        <Stack.Screen 
            name='Listing Details'
            component={ListingDetailsScreen}
        />
        <Stack.Screen 
            name='Messages'
            component={MessagesScreen}
        />
        <Stack.Screen 
            name='View Image'
            component={ViewImageScreen}
        />
    </Stack.Navigator>
  )
}

export default HomeTabScreen