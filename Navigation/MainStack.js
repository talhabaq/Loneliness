import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Chatting from '../screens/Chatting'
import TabNavigator from './TabNavigator'
import SignUp from '../Auth/SignUp'
const Stack=createStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='tabs' screenOptions={{headerShown:false}}>
        <Stack.Screen name='tabs' component={TabNavigator}/>
        <Stack.Screen  name='Chatting' component={Chatting}/>
    </Stack.Navigator>
  )
}

export default MainStack