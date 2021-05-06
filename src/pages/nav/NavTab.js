import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Dimensions } from 'react-native'
import ShopScreen from '../shop/ShopScreen';
import OrderScreen from '../order/OrderScreen';
import MessageScreen from '../message/MessageScreen';
import MyScreen from '../my/MyScreen';
import MyDetail from '../my/MyDetail';

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

function ShopNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerTitle: '店铺',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}

function MessageNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerTitle: '消息',
          headerLeft: null,
          headerTitleAlign: 'center',
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
          title: '订单',
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
        name="message"
        component={MessageNavigator}
        options={{
          title: '消息',
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            tintColor = 'red';
            return (
              <Image
                style={{ width: 25, height: 25 }}
                source={
                  focused
                    ? require('../../assets/images/png/msg.png')
                    : require('../../assets/images/png/msg.png')
                }></Image>
            );
          }
        }}
      />
      <Tab.Screen
        name="school"
        component={ShopNavigator}
        options={{
          title: '店铺',
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            tintColor = 'red';
            return (
              <Image
                style={{ width: 25, height: 25 }}
                source={
                  focused
                    ? require('../../assets/images/png/shopcard.png')
                    : require('../../assets/images/png/shopcard.png')
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

