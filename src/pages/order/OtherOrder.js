import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OtherOrderItem from '../../components/OtherOrderItem'
import Doing from '../../components/OtherOrderItem/Doing'
import Refund from '../../components/OtherOrderItem/Refund'
import ReservedSoon from '../../components/OtherOrderItem/ReservedSoon'
import ReservedToday from '../../components/OtherOrderItem/ReservedToday'
import ReservedTomorrow from '../../components/OtherOrderItem/ReservedTomorrow'

export default class OtherOrder extends Component {
  state = {
    active: 1
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ height: 50, marginHorizontal: 25, backgroundColor: '#3f3c3c', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 1 }) }}>
            <Text style={{ backgroundColor: this.state.active == 1 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
            <Text style={{ marginLeft: 3, color: this.state.active == 1 ? '#ffffff' : '#989897',fontSize:17 }}>进行中</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 2 }) }}>
            <Text style={{ backgroundColor: this.state.active == 2 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
            <Text style={{ marginLeft: 3, color: this.state.active == 2 ? '#ffffff' : '#989897',fontSize:17 }}>预定单</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 3 }) }}>
            <Text style={{ backgroundColor: this.state.active == 3 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
            <Text style={{ marginLeft: 3, color: this.state.active == 3 ? '#ffffff' : '#989897',fontSize:17 }}>退款单</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {this.state.active == 1 ? <DoingOrder props={this.props.props}></DoingOrder> : this.state.active == 2 ? <ReservedOrder props={this.props.props}></ReservedOrder> : <RefundOrder props={this.props.props}></RefundOrder>}
        </View>
      </View>

    )
  }
}
// 1-1进行中组件
class DoingOrder extends Component {
  state = {
    doingorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f8f8f9' }}>
        {
          this.state.doingorder.map((item) => {
            return (
              <View key={item.id}>
                <Doing props={this.props} num={item.a}></Doing>
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
      <ScrollView style={{ backgroundColor: '#f8f8f9' }}>
        <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-around', flex: 1,marginHorizontal:20 }}>
          <TouchableOpacity style={{ width: 85, height: 30, alignItems: 'center', borderRadius: 15, backgroundColor: this.state.active == 1 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 1 }) }}>
            <Text style={{ fontSize: 15, marginTop: 4, color: this.state.active == 1 ? '#5d5757' : '#a09e9e' }}>即将到时</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85, height: 30, alignItems: 'center', borderRadius: 15, backgroundColor: this.state.active == 2 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 2 }) }}>
            <Text style={{ fontSize: 15, marginTop: 4, color: this.state.active == 2 ? '#5d5757' : '#a09e9e' }}>今日</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85, height: 30, alignItems: 'center', borderRadius: 15, backgroundColor: this.state.active == 3 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 3 }) }}>
            <Text style={{ fontSize: 15, marginTop: 4, color: this.state.active == 3 ? '#5d5757' : '#a09e9e' }}>明日</Text>
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
    reservedsoonorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedsoonorder.map((item) => {
            return (
              <View key={item.id}>
                <ReservedSoon props={this.props.props} num={item.a}></ReservedSoon>
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
    reservedtodayorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtodayorder.map((item) => {
            return (
              <View key={item.id}>
                <ReservedToday props={this.props.props} num={item.a} byself={true}></ReservedToday>
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
    reservedtomorroworder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtomorroworder.map((item) => {
            return (
              <ReservedTomorrow key={item.id} props={this.props.props} num={item.a} cancel={false} tomorrow={item.b} byself={true}></ReservedTomorrow>
            )
          })
        }
      </View>
    )
  }
}
// 1-3-取消单组件
class RefundOrder extends Component {
  state = {
    cancelorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f8f8f9' }}>
        {
          this.state.cancelorder.map((item) => {
            return (
              <View key={item.id}>
                <Refund props={this.props} num={item.a} cancel={item.b}></Refund>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}

