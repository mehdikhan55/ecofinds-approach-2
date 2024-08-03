import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import {
    MessagesScreen,
    AccountScreen,
    ListingsScreen,

} from './';

const Tab = createBottomTabNavigator();

const MainDashboard = () => {
  return (
    <Tab.Navigator
        initialRouteName='Listings'
        screenOptions={{
            headerShown: false
        }}
    >
      <Tab.Screen name="Listings" component={ListingsScreen} />
      <Tab.Screen name="Messsages" component={MessagesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default MainDashboard