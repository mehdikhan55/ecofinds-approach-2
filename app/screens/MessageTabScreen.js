import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
    MessagesScreen,
} from './';

const Stack = createNativeStackNavigator();

const MessageTabScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName='Messages'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Messages'
                component={MessagesScreen}
            />
        </Stack.Navigator>
    )
}

export default MessageTabScreen