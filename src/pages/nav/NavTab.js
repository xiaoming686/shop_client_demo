import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import OrderScreen from '../order/OrderScreen';
import MyScreen from '../my/MyScreen';
import I18n from '../../utils/languages/languages'
//93行类比更改语言，跟随系统语言切换
const Tab = createBottomTabNavigator();
const TabStack = createStackNavigator();

// 监听返回按钮直接退出程序，全局监听，待优化
// backAction = () => {
//   Alert.alert("注意!", "是否退出", [
//     {
//       text: "取消",
//       onPress: () => null,
//       style: "cancel"
//     },
//     { text: "确定", onPress: () => BackHandler.exitApp() }
//   ],
//     {
//       cancelable: true,
//     }
//   );
//   return true;
// }
// componentDidMount() {
//   console.log(777);
//   this.backHandler = BackHandler.addEventListener(
//     "hardwareBackPress",
//     this.backAction
//   );
// }

// 底部tab栏
export default function Navigation() {
  return (
    <Tab.Navigator backBehavior='none' initialRouteName='order'>
      <Tab.Screen
        name="order"
        component={OrderScreen}
        options={{
          title: I18n.t('order'),
          headerMode: 'none',
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            tintColor = 'red';
            return (
              <Image
                style={{ width: 25, height: 25 }}
                source={
                  focused
                    ? require('../../assets/images/png/orderA.png')
                    : require('../../assets/images/png/orderB.png')
                }></Image>
            );
          }
        }}
      />
      <Tab.Screen
        name="my"
        component={MyScreen}
        options={{
          title: '我的',
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            tintColor = 'red';
            return (
              <Image
                style={{ width: 25, height: 25 }}
                source={
                  focused
                    ? require('../../assets/images/png/myA.png')
                    : require('../../assets/images/png/myB.png')
                }></Image>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

