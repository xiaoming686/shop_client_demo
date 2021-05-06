import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../login/LoginScreen'
import NavTab from './NavTab'
import DetailScreen from '../details/DetailScreen'

const Stack = createStackNavigator();

function Nav() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: '登录', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="NavTab"
        component={NavTab}
        options={{ title: '首页', headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ route, navigation }) => ({
          title: route.params.screenName,
        })}
      />
    </Stack.Navigator>
  );
}

export default Nav;