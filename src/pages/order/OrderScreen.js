import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TakeOutOrder from './TakeOutOrder'
import OtherOrder from './OtherOrder'
import HistoryOrder from './HistoryOrder'
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function OrderScreen() {
    return (
        <View style={{ flex: 1 }}>
            {/* 1-搜索框绝对定位 */}
            <TouchableOpacity style={{ flexDirection: 'row', position: 'absolute', right: 0, top: 30 }}>
                <Image style={{ resizeMode: 'contain', width: 20, height: 20 }} source={require('../../assets/images/png/search.png')}></Image><Text>搜索</Text>
            </TouchableOpacity>
            {/* 2-顶部tab栏必须在view加上flex才能显示出来 */}
            <Tab.Navigator tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: '#00CB88',
                    width: 50,
                    marginLeft: 20,
                    marginBottom: 10,
                    height: 4
                },
                labelStyle: {
                    fontSize: 13
                },
                style: {
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    width: 240,
                    backgroundColor: '#F8F8F9',
                }
            }}>
                <Tab.Screen name="TakeOutOrder" component={TakeOutOrder} options={{ title: '外卖单', }} />
                <Tab.Screen name="OtherOrder" component={OtherOrder} options={{ title: '其他单', }} />
                <Tab.Screen name="HistoryOrder" component={HistoryOrder} options={{ title: '历史订单', }} />
            </Tab.Navigator>
        </View>
    )
}

