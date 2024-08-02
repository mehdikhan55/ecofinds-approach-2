import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
    ListingDetailsScreen,
    ListingEditScreen,
    MessagesScreen,
    ViewImageScreen,
    AccountScreen,
} from './';

const Stack = createNativeStackNavigator();

const AccountTabScreen = () => {
  return (
    <Stack.Navigator
        initialRouteName='Listings'
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen
            name='Accout'
            component={AccountScreen}
        />
        <Stack.Screen 
            name='Listing Details'
            component={ListingDetailsScreen}
        />
        <Stack.Screen 
            name='Edit Listing'
            component={ListingEditScreen}
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

export default AccountTabScreen