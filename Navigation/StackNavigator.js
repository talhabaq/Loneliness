import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogoScreen from '../screens/LogoScreen';
import SignIn from '../Auth/SignIn';
import PathScreen from '../Auth/PathScreen';
import TabNavigator from './TabNavigator';
import MainStack from './MainStack';
import SignUp from '../Auth/SignUp';
import Name from '../Auth/Name';
import PhoneNumber from '../Auth/PhoneNumber';
import ProfilePhoto from '../Auth/ProfilePhoto';
import About from '../Auth/About';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='AuthStack' component={AuthStack} />
      <Stack.Screen name="HomeTabs" component={MainStack} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
