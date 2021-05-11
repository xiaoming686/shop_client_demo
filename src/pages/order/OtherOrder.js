import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function OtherOrder() {
  return (
    {/* 1-颈部tab栏 */}
    <Tab.Navigator tabBarOptions={{
      showLabel: true,
      activeTintColor: '#FFFFFF',
      indicatorStyle: {
        backgroundColor: '#00CB88',
        width: 8,
        height: 8,
        borderRadius: 5,
        marginBottom: 20,
        marginLeft: 15
      },
      style: {
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: '#030000',
      }
    }}>
      <Tab.Screen name="DoingOrder" component={DoingOrder} options={{ title: '进行中', }} />
      <Tab.Screen name="ReservedOrder" component={ReservedOrder} options={{ title: '预定单', }} />
      <Tab.Screen name="CancelOrder" component={CancelOrder} options={{ title: '取消单', }} />
    </Tab.Navigator>
  );
}
// 1-1进行中组件
class DoingOrder extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9' }}>
        {/* 1-遍历订单 */}
        <View style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 22 }}>取餐号A8554</Text>
            <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-between', marginTop: 8, marginLeft: 10 }}>
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
// 1-2-预定单组件
class ReservedOrder extends Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{
        showLabel: true,
        activeTintColor: '#000000',
        indicatorStyle: {
          backgroundColor: 'transparent',
        },
        labelStyle: {
          backgroundColor:'#E5E4E4',
          padding:5,
          borderRadius:10
        },
        style: {
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: 'F8F8F9',
          height: 50
        }
      }}>
        <Tab.Screen name="ReservedSoonOrder" component={ReservedSoonOrder} options={{ title: '即将到时', }} />
        <Tab.Screen name="ReservedTodayOrder" component={ReservedTodayOrder} options={{ title: '今日', }} />
        <Tab.Screen name="ReservedTomorrowOrder" component={ReservedTomorrowOrder} options={{ title: '明日', }} />
      </Tab.Navigator>
    )
  }
}
// 1-2-1即将到时组件
class ReservedSoonOrder extends Component {
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
// 1-2-2今日组件
class ReservedTodayOrder extends Component {
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
// 1-2-3明日组件
class ReservedTomorrowOrder extends Component {
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
// 1-3-取消单组件
class CancelOrder extends Component {
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

