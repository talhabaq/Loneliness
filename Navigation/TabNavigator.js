import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Services from '../screens/Services';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Home2 from '../screens/Home2';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name == 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          }
          else if (route.name == 'Services') {
            iconName = focused ? 'calendar' : 'calendar-outline'
          }
          else if (route.name == 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }
          else if (route.name == 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#FEC600",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopWidth: 0
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold'
        },
      })
      }
    >
      <Tab.Screen name="Home" component={Home2} options={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 0
        }
      }} />
      <Tab.Screen name="Services" component={Services} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={Chat} options={{
        headerShown: false,
        tabBarStyle:
        {
          backgroundColor: "#434343",
          borderTopWidth: 0,
        },
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
