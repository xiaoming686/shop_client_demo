import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../login/LoginScreen'
import RegisterScreen from '../login/RegisterScreen'
import EmailRegisterScreen from '../login/EmailRegisterScreen'
import PhoneRegisterScreen from '../login/PhoneRegisterScreen'
import ForgetScreen from '../login/ForgetScreen'
import LanguageScreen from '../login/LanguageScreen'
import NavTab from './NavTab'
import DetailScreen from '../details/DetailScreen'

const Stack = createStackNavigator();
function Nav() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: '登录', headerTitleAlign: 'center', headerTransparent:true}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: '注册', headerTitleAlign: 'center', }}
      />
      <Stack.Screen
        name="EmailRegister"
        component={EmailRegisterScreen}
        options={{ title: '邮箱注册', headerTitleAlign: 'center', }}
      />
      <Stack.Screen
        name="PhoneRegister"
        component={PhoneRegisterScreen}
        options={{ title: '手机注册', headerTitleAlign: 'center', }}
      />
      <Stack.Screen
        name="Forget"
        component={ForgetScreen}
        options={{ title: '忘记密码', headerTitleAlign: 'center', }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ title: '语言切换', headerTitleAlign: 'center', }}
      />
      <Stack.Screen
        name="NavTab"
        component={NavTab}
        options={{ title: '首页', headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route, navigation }) => ({
          title: route.params.screenName,
        })}
      />
    </Stack.Navigator>
  );
}

export default Nav;