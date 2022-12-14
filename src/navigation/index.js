import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen'
import FirstScreen from '../screens/FirstScreen'
import SignUpScreen from '../screens/SignUpScreen'


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='FirstScreen' component={FirstScreen}/>
              <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
              <Stack.Screen name='SignInScreen' component={SignInScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation