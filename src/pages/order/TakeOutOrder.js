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
              <TakeOutOrderItem props={this.props} doing={item.a}></TakeOutOrderItem>
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
      <ScrollView>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 10, backgroundColor: this.state.active == 1 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 1 }) }}>
            <Text>即将到时</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 10, backgroundColor: this.state.active == 2 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 2 }) }}>
            <Text>今日</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 10, backgroundColor: this.state.active == 3 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 3 }) }}>
            <Text>明日</Text>
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
    reservedsoonorder: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 4 }, { a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedsoonorder.map((item) => {
            return (
              <View>
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
    reservedtodayorder: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 4 }, { a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtodayorder.map((item) => {
            return (
              <TakeOutOrderItem props={this.props} num={item.a}></TakeOutOrderItem>
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
    reservedtomorroworder: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 4 }, { a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtomorroworder.map((item) => {
            return (
              <View>
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
    refund: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 4 }, { a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView>
        {
          this.state.refund.map((item) => {
            return (
              <View>
                <TakeOutOrderItem props={this.props} refund={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
