import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
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
        width: 8,
        height: 8,
        borderRadius: 5,
        marginBottom: 20,
        marginLeft: 15
      },
      style: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 7,
        backgroundColor: '#3f3c3c',
      },
      labelStyle:{
        fontSize:16
      }
    }}>
      <Tab.Screen name="DoingOrder" component={DoingOrder} options={{ tabBarLabel: '进行中' }} />
      <Tab.Screen name="ReservedOrder" component={ReservedOrder} options={{ tabBarLabel: '预定单', }} />
      <Tab.Screen name="Refund" component={Refund} options={{ tabBarLabel: '退款', }} />
    </Tab.Navigator>
  );
}
// 1-1进行中组件
class DoingOrder extends Component {
  state = {
    doingorder: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView style={{backgroundColor:'#f8f8f9'}}>
        {
          this.state.doingorder.map((item) => {
            return (
              <TakeOutOrderItem key={item.id} props={this.props} doing={item.a}></TakeOutOrderItem>
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
      <ScrollView style={{backgroundColor:'#f8f8f9'}}>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around',marginLeft:40,width:280 }}>
          <TouchableOpacity style={{ width:85,height:30,alignItems:'center', borderRadius: 10, backgroundColor: this.state.active == 1 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 1 }) }}>
            <Text style={{fontSize:15,marginTop:4,color:'#3f3c3c'}}>即将到时</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width:85,height:30,alignItems:'center', borderRadius: 10, backgroundColor: this.state.active == 2 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 2 }) }}>
            <Text style={{fontSize:15,marginTop:4,color:'#3f3c3c'}}>今日</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width:85,height:30,alignItems:'center', borderRadius: 10, backgroundColor: this.state.active == 3 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 3 }) }}>
            <Text style={{fontSize:15,marginTop:4,color:'#3f3c3c'}}>明日</Text>
          </TouchableOpacity>
        </View>
        <View>
          {this.state.active == 1 ? <ReservedSoonOrder props={this.props}></ReservedSoonOrder> : this.state.active == 2 ? <ReservedTodayOrder props={this.props}></ReservedTodayOrder> : <ReservedTomorrowOrder props={this.props}></ReservedTomorrowOrder>}
        </View>
      </ScrollView>
    )
  }
}
// 1-2-1即将到时组件
class ReservedSoonOrder extends Component {
  state = {
    reservedsoonorder: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedsoonorder.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props} num={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-2今日组件
class ReservedTodayOrder extends Component {
  state = {
    reservedtodayorder: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtodayorder.map((item) => {
            return (
              <TakeOutOrderItem key={item.id} props={this.props} num={item.a}></TakeOutOrderItem>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-3明日组件
class ReservedTomorrowOrder extends Component {
  state = {
    reservedtomorroworder: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtomorroworder.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props} num={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-3退款组件
class Refund extends Component {
  state = {
    refund: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView style={{backgroundColor:'#f8f8f9'}}>
        {
          this.state.refund.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props} refund={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
