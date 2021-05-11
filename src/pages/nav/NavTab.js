import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Dimensions } from 'react-native'
import OrderScreen from '../order/OrderScreen';
import MyScreen from '../my/MyScreen';
import MyDetail from '../my/MyDetail';
import I18n from '../../utils/languages/languages'
//93行类比更改语言，跟随系统语言切换
const Tab = createBottomTabNavigator();
const TabStack = createStackNavigator();

function OrderNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Order"
        component={OrderScreen}
        options={{
          headerShown:false,
        }}
      />
    </TabStack.Navigator>
  );
}

function MyNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="My"
        component={MyScreen}
        options={{
          headerTitle: '我的',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
      <TabStack.Screen
        name="MyDetail"
        component={MyDetail}
        options={{
          headerTitle: '我的详情',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="order"
        component={OrderNavigator}
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
        component={MyNavigator}
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

