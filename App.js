import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './Navigation/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
  )
}

export default App