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
import SearchOrder from '../order/SearchOrder'
import OtherOrderDetail from '../orderDetail/OtherOrderDetail'
import TakeoutOrderDetail from '../orderDetail/TakeoutOrderDetail'


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
        name="Search"
        component={SearchOrder}
        options={{ title: '搜索', headerShown: true }}
      />
      {/* 订单详情根据不同的详情决定组件个数 */}
      <Stack.Screen
        name="OtherOrderDetail"
        component={OtherOrderDetail}
        options={{ title: '其他订单详情', headerShown: false }}
      />
      <Stack.Screen
        name="TakeoutOrderDetail"
        component={TakeoutOrderDetail}
        options={{ title: '外卖订单详情', headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Nav;