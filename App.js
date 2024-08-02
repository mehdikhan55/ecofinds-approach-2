import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import AppStack from './app/navigation/AppStack';
import AuthStack from './app/navigation/AuthStack';
import { useState } from 'react';
import LoginScreen from './app/auth/LoginScreen';


export default function App() {


  return (
       <AppContent/>
  );

}

function AppContent(){
  const {initializing, setInitializing} =  useState(true);
  const [currentUser, setCurrentUser] = useState(true);

  return (
    <NavigationContainer>
          {initializing ? (
            <View style={{flex:1,backgroundColor:'yellow', justifyContent:'center'}}>
            <ActivityIndicator size={50} color={'red'}/>
          </View>
          ):(
            currentUser ? <AppStack/> : <AuthStack/>
          )}
      </NavigationContainer> 
  )
}




