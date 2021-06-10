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
      <View style={{flex:1}}>
        <View style={{ flexDirection: 'row', paddingLeft: 35, height: 40, alignItems: 'center',marginTop:-15 }}>
          <View>
            {/* 弹出日期选择框 */}
            <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', flexDirection: 'row', width: 70, }} onPress={this.showDayPick}>
              <Text style={{ color: '#5d5757', fontSize: 15 }}>{this.state.pickday[this.state.clickDayItem - 1].day}</Text>
              <Image style={{ width: 12, height: 18, marginLeft: 3, resizeMode: 'contain' }} source={require('../../assets/images/png/downangle.png')} ></Image>
            </TouchableOpacity>
            {
              this.state.clickDay ?
                <View style={{ position: 'absolute', top: 30, left:-5,borderRadius: 15, backgroundColor: '#f3f3f3', zIndex: 10, width: 52, height: 175, }}>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={{ width: 75, }} onPress={() => { this.setState({ active: 1 }) }}>
              <Text style={{ color: this.state.active == 1 ? '#5d5757' : '#a09e9e' }}>外卖单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 75, }} onPress={() => { this.setState({ active: 2 }) }}>
              <Text style={{ color: this.state.active == 2 ? '#5d5757' : '#a09e9e' }}>其它单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 75, }} onPress={() => { this.setState({ active: 3 }) }}>
              <Text style={{ color: this.state.active == 3 ? '#5d5757' : '#a09e9e' }}>取消单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 75, }} onPress={() => { this.setState({ active: 4 }) }}>
              <Text style={{ color: this.state.active == 4 ? '#5d5757' : '#a09e9e' }}>退款单</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{flex:1}}>
          {
            this.state.active == 1 ?
              <HistoryTakeOutOrder props={this.props.props}></HistoryTakeOutOrder>
              :
              this.state.active == 2 ?
                <HistoryOtherOrder props={this.props.props}></HistoryOtherOrder>
                : this.state.active == 3 ?
                  <HistoryCancleOrder props={this.props.props}></HistoryCancleOrder>
                  :
                  <HistoryRefundOrder props={this.props.props}></HistoryRefundOrder>}
        </View>
      </View>
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
      <ScrollView>
        {
          this.state.historytakeoutorder.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props} num={item.a} tomorrow={item.b}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
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
      <ScrollView>
        {
          this.state.historyotherorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props} num={item.a} tomorrow={item.b}></OtherOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
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
      <ScrollView>
        {
          this.state.historyotherorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props} num={item.a} can={true}></OtherOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
// 1-2-3退款单组件
class HistoryRefundOrder extends Component {
  state = {
    historyotherorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView>
        {
          this.state.historyotherorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props} num={item.a} tomorrow={item.b} cancel={true}></OtherOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}