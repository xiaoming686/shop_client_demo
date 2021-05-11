import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TakeOutOrder from './TakeOutOrder'
import OtherOrder from './OtherOrder'
import HistoryOrder from './HistoryOrder'
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function OrderScreen() {
    return (
        <Tab.Navigator tabBarOptions={{
            indicatorStyle: {
                backgroundColor: '#00CB88',
                width: 50,
                marginLeft: 20,
                marginBottom: 10,
                height: 4
            },
            style: {
                marginTop: 20,
                marginRight:60,
                backgroundColor:'#F8F8F9',
            }
        }}>
            <Tab.Screen name="TakeOutOrder" component={TakeOutOrder} options={{ title: '外卖单', }} />
            <Tab.Screen name="OtherOrder" component={OtherOrder} options={{ title: '其他单', }} />
            <Tab.Screen name="HistoryOrder" component={HistoryOrder} options={{ title: '历史订单', }} />
        </Tab.Navigator>
    );
}
