import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OtherOrderItem from '../../components/OtherOrderItem'

const Tab = createMaterialTopTabNavigator();

export default function OtherOrder() {
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
      <Tab.Screen name="DoingOrder" component={DoingOrder} options={{ title: '进行中', }} />
      <Tab.Screen name="ReservedOrder" component={ReservedOrder} options={{ title: '预定单', }} />
      <Tab.Screen name="CancelOrder" component={CancelOrder} options={{ title: '取消单', }} />
    </Tab.Navigator>
  )
}
// 1-1进行中组件
class DoingOrder extends Component {
  state = {
    doingorder: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView>
        {
          this.state.doingorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props} num={item.a}></OtherOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
// 1-2-预定单组件
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
    reservedsoonorder: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedsoonorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props.props} num={item.a}></OtherOrderItem>
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
              <View key={item.id}>
                <OtherOrderItem props={this.props.props} num={item.a} byself={true}></OtherOrderItem>
              </View>
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
              <OtherOrderItem key={item.id} props={this.props.props} num={item.a} cancel={false} tomorrow={item.b} byself={true}></OtherOrderItem>
            )
          })
        }
      </View>
    )
  }
}
// 1-3-取消单组件
class CancelOrder extends Component {
  state = {
    cancelorder: [{ id: 1, a: 1, b: 2 }, { id:2,a: 3, b: 4 }, { id: 3,a: 5, b: 4 }, { id: 4,a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView>
        {
          this.state.cancelorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props} num={item.a} tomorrow={true} cancel={item.b}></OtherOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}

