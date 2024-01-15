import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/MoviesList';
import Favorite from '../screens/Favorite';
import MoviesDetails from '../screens/MoviesDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="HomeScreen" component={TabNavigator} />
       <Stack.Screen name="MoviesDetails" component={MoviesDetails} />
       <Stack.Screen name="Favorite" component={Favorite} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation



const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home Screen"
    screenOptions={{
      animationEnabled: true,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: 60,
        paddingVertical: 5,
      },
    }}>
    <Tab.Screen
      name="Home Screen"
      component={HomeScreen}
      // options={{
      //     tabBarIcon: ({ color }) => (
      //         <Icon1 name="gamepad-square-outline" color={color} size={26} />
      //     ),
      // }}
    />
    <Tab.Screen
      name="Favorite"
      component={Favorite}
      // options={{
      //     tabBarIcon: ({ color }) => (
      //         <Icon name="user" color={color} size={26} />
      //     ),
      // }}
    />
  </Tab.Navigator>
  );
};

const styles = StyleSheet.create({})