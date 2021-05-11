import React, { Component } from 'react'
import { View, Text, Button, ViewComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TakeOutOrder() {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: true,
      activeTintColor: '#FFFFFF',
      indicatorStyle: {
        backgroundColor: '#00CB88',
        width:8,
        height:8,
        borderRadius:5,
        marginBottom:20,
        marginLeft:15
      },
      style: {
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: '#030000',
      }
    }}>
      <Tab.Screen name="DoingOrder" component={DoingOrder} options={{ tabBarLabel: '进行中', }} />
      <Tab.Screen name="ReservedOrder" component={ReservedOrder} options={{ tabBarLabel: '预定单', }} />
      <Tab.Screen name="Refund" component={Refund} options={{ tabBarLabel: '退款', }} />
    </Tab.Navigator>
  );
}

class DoingOrder extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9' }}>
        {/* 1-遍历订单 */}
        <View style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 24 }}>A8554</Text>
            <View style={{ flexDirection: 'row', width: '65%', justifyContent: 'space-between', marginTop: 8, marginLeft: 10 }}>
              <Text style={{ color: '#5D5757' }}>桌号：58</Text>
              <Text style={{ color: 'green', }}>外带</Text>
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10, paddingTop: 20, paddingBottom: 20, borderTopWidth: 1, borderStyle: 'dotted' }}>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse', }}>
            <View style={{ width: 60, borderRadius: 10, overflow: 'hidden' }}><Button title="完成" color="#00CB88"></Button></View>
            <View style={{ width: 60, marginRight: 20, borderRadius: 10, overflow: 'hidden' }}><Button title="提醒" color="#5FA6EE"></Button></View>
          </View>
        </View>
      </View>
    )
  }
}

class ReservedOrder extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9' }}>
        {/* 1-遍历订单 */}
        <View style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 24 }}>A8554</Text>
            <View style={{ flexDirection: 'row', width: '65%', justifyContent: 'space-between', marginTop: 8, marginLeft: 10 }}>
              <Text style={{ color: '#5D5757' }}>桌号：58</Text>
              <Text style={{ color: 'green', }}>外带</Text>
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10, paddingTop: 20, paddingBottom: 20, borderTopWidth: 1, borderStyle: 'dotted' }}>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse', }}>
            <View style={{ width: 60, borderRadius: 10, overflow: 'hidden' }}><Button title="完成" color="#00CB88"></Button></View>
            <View style={{ width: 60, marginRight: 20, borderRadius: 10, overflow: 'hidden' }}><Button title="提醒" color="#5FA6EE"></Button></View>
          </View>
        </View>
      </View>
    )
  }
}

class Refund extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9' }}>
        {/* 1-遍历订单 */}
        <View style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 24 }}>A8554</Text>
            <View style={{ flexDirection: 'row', width: '65%', justifyContent: 'space-between', marginTop: 8, marginLeft: 10 }}>
              <Text style={{ color: '#5D5757' }}>桌号：58</Text>
              <Text style={{ color: 'green', }}>外带</Text>
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10, paddingTop: 20, paddingBottom: 20, borderTopWidth: 1, borderStyle: 'dotted' }}>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse', }}>
            <View style={{ width: 60, borderRadius: 10, overflow: 'hidden' }}><Button title="完成" color="#00CB88"></Button></View>
            <View style={{ width: 60, marginRight: 20, borderRadius: 10, overflow: 'hidden' }}><Button title="提醒" color="#5FA6EE"></Button></View>
          </View>
        </View>
      </View>
    )
  }
}
