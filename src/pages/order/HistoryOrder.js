import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity, Image } from 'react-native'
import OtherOrderItem from '../../components/OtherOrderItem'
import TakeOutOrderItem from '../../components/TakeOutOrderItem'

export default class HistoryOrder extends Component {
  state = {
    active: 1,
    clickDay: false,
    clickDayItem: 6,
    pickday: [{ id: 1, day: '4.18' }, { id: 2, day: '4.19' }, { id: 3, day: '4.20' }, { id: 4, day: '4.21' }, { id: 5, day: '4.22' }, { id: 6, day: '4.23' },]
  }
  showDayPick = () => {
    this.setState({ clickDay: !this.state.clickDay });
  }
  render() {
    return (
      <ScrollView>
        <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View>
            {/* 弹出日期选择框 */}
            <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', flexDirection: 'row', width: 60, height: 51, borderRadius: 5, backgroundColor: '#3f3c3c', }} onPress={this.showDayPick}>
              <Text style={{ color: '#ffffff', marginLeft: 8 }}>{this.state.pickday[this.state.clickDayItem - 1].day}</Text>
              <Image style={{ width: 15, height: 15, marginLeft: 3 }} source={require('../../assets/images/png/downangle.png')} ></Image>
            </TouchableOpacity>
            {
              this.state.clickDay ?
                <View style={{ position: 'absolute', top: 55, borderRadius: 15, backgroundColor: '#f3f3f3', zIndex: 10, width: 64, height: 175, paddingVertical: 5 }}>
                  {
                    this.state.pickday.map((item) => {
                      return (
                        <TouchableOpacity onPress={() => { this.setState({ clickDayItem: item.id, clickDay: false }) }} activeOpacity={1} key={item.id} style={{ alignItems: 'center' }}>
                          <Text style={{ fontSize: 13, color: this.state.clickDayItem == item.id ? '#000000' : '#989897', lineHeight: 28 }}>{item.day}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
                :
                <></>
            }
          </View>
          {/* 导航 */}
          <View style={{ flexDirection: 'row', backgroundColor: '#3f3c3c', borderRadius: 5, }}>
            <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 1 }) }}>
              <Text style={{ backgroundColor: this.state.active == 1 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
              <Text style={{ marginLeft: 3, color: this.state.active == 1 ? '#ffffff' : '#989897' }}>外卖单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 2 }) }}>
              <Text style={{ backgroundColor: this.state.active == 2 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
              <Text style={{ marginLeft: 3, color: this.state.active == 2 ? '#ffffff' : '#989897' }}>其它单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 3 }) }}>
              <Text style={{ backgroundColor: this.state.active == 3 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
              <Text style={{ marginLeft: 3, color: this.state.active == 3 ? '#ffffff' : '#989897' }}>取消单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 6, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 4 }) }}>
              <Text style={{ backgroundColor: this.state.active == 4 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
              <Text style={{ marginLeft: 3, color: this.state.active == 4 ? '#ffffff' : '#989897' }}>退款单</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {this.state.active == 1 ? <HistoryTakeOutOrder props={this.props.props}></HistoryTakeOutOrder> : this.state.active == 2 ? <HistoryOtherOrder props={this.props.props}></HistoryOtherOrder> : <HistoryCancleOrder props={this.props.props}></HistoryCancleOrder>}
        </View>
      </ScrollView>
    )
  }
}
// 1-2-1外卖单组件
class HistoryTakeOutOrder extends Component {
  state = {
    historytakeoutorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.historytakeoutorder.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props.props} num={item.a} tomorrow={item.b}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-2其它单组件
class HistoryOtherOrder extends Component {
  state = {
    historyotherorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.historyotherorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props.props} num={item.a} tomorrow={item.b}></OtherOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-3取消单组件
class HistoryCancleOrder extends Component {
  state = {
    historyotherorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.historyotherorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props.props} num={item.a} tomorrow={item.b} cancel={true}></OtherOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}