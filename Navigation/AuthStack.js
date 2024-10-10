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
import DateofBirth from '../Auth/DateofBirth';
import Gender from '../Auth/Gender';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Logo" component={LogoScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Path" component={PathScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Name" component={Name} />
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
            <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="DateofBirth" component={DateofBirth} />
            <Stack.Screen name="Gender" component={Gender} />
        </Stack.Navigator>
    );
};

export default AuthStack;
