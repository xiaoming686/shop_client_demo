import React, { Component } from 'react'
import { View, Text, Button,Image, ScrollView,TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TakeOutOrderItem from '../../components/TakeOutOrderItem'

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
// 1-1进行中组件
class DoingOrder extends Component {
  state = {
    doingorder: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 4 }, { a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView>
        {
          this.state.doingorder.map((item) => {
            return (
              <View>
                <TakeOutOrderItem props={this.props} num={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
// 1-2预定单组件
class ReservedOrder extends Component {
  state = {
    active: 1
  }
  render() {
    return (
      <View>
        <View style={{ marginTop:20,flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{padding:5,paddingLeft:10,paddingRight:10,borderRadius:10,backgroundColor:this.state.active==1?'gray':'transparent'}} onPress={() => { this.setState({active:1}) }}>
            <Text>即将到时</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:5,paddingLeft:10,paddingRight:10,borderRadius:10,backgroundColor:this.state.active==2?'gray':'transparent'}} onPress={() => { this.setState({active:2}) }}>
            <Text>今日</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:5,paddingLeft:10,paddingRight:10,borderRadius:10,backgroundColor:this.state.active==3?'gray':'transparent'}} onPress={() => { this.setState({active:3}) }}>
            <Text>明日</Text>
          </TouchableOpacity>
        </View>
        <View>
          {this.state.active==1?<ReservedSoonOrder props={this.props}></ReservedSoonOrder>:this.state.active==2?<ReservedTodayOrder props={this.props}></ReservedTodayOrder>:<ReservedTomorrowOrder props={this.props}></ReservedTomorrowOrder>}
        </View>
      </View>
    )
  }
}
// 1-2-1即将到时组件
class ReservedSoonOrder extends Component {
  render() {
    return (
      <View>
        {/* 1-需要遍历外卖即将到时的订单 */}
        <TouchableOpacity onPress={() => { this.props.props.navigation.navigate('OrderDetail') }} style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF',borderRadius:20 }}>
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
        </TouchableOpacity>
      </View>
    )
  }
}
// 1-2-2今日组件
class ReservedTodayOrder extends Component {
  render() {
    return (
      <View>
        {/* 1-需要遍历外卖今日的订单 */}
        <TouchableOpacity onPress={() => { this.props.props.navigation.navigate('OrderDetail') }} style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF',borderRadius:20 }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 24 }}>A8554</Text>
            <View style={{ flexDirection: 'row', width: '65%', justifyContent: 'space-between', marginTop: 8, marginLeft: 10 }}>
              <Text style={{ color: '#5D5757' }}>桌号：5888</Text>
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
        </TouchableOpacity>
      </View>
    )
  }
}
// 1-2-3明日组件
class ReservedTomorrowOrder extends Component {
  render() {
    return (
      <View>
        {/* 1-需要遍历外卖明日的订单 */}
        <TouchableOpacity onPress={() => { this.props.props.navigation.navigate('OrderDetail') }} style={{ margin: 20, padding: 10, backgroundColor: '#FFFFFF',borderRadius:20 }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 24 }}>A8554</Text>
            <View style={{ flexDirection: 'row', width: '65%', justifyContent: 'space-between', marginTop: 8, marginLeft: 10 }}>
              <Text style={{ color: '#5D5757' }}>桌号：5899</Text>
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
        </TouchableOpacity>
      </View>
    )
  }
}
// 1-3退款组件
class Refund extends Component {
  render() {
    return (
      <View>
        {/* 1-需要遍历外卖退款的订单 */}
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
