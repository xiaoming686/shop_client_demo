import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity, Image } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import OtherOrderItem from '../../components/OtherOrderItem'
import TakeOutOrderItem from '../../components/TakeOutOrderItem'
import MyDatePick from '../../utils/mydatePick'

export default class HistoryOrder extends Component {
  state = {
    active: 1,
    isMyDatePickVisible: false,
  }
  ensureMyToast = (a) => {
    console.log(a);
    this.setState({ isMyDatePickVisible: false });
  }
  cancelMyToast = () => {
    this.setState({ isMyDatePickVisible: false });
  }
  showDatePick = () => {
    this.setState({ isMyDatePickVisible: true });
  }
  render() {
    return (
      <ScrollView>
        <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', width: 70, height: 51, borderRadius: 5, backgroundColor: '#3f3c3c', }} onPress={this.showDatePick}>
            <Text style={{ color: '#ffffff', marginLeft: 10 }}>4.23</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 5 }} source={require('../../assets/images/png/downangle.png')} ></Image>
          </TouchableOpacity>
          <MyDatePick
            confirm={this.ensureMyToast}
            cancel={this.cancelMyToast}
            visible={this.state.isMyDatePickVisible}>
          </MyDatePick>
          <View style={{ flexDirection: 'row', backgroundColor: '#3f3c3c', borderRadius: 5, marginLeft: 5 }}>
            <TouchableOpacity style={{ padding: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 1 }) }}>
              <Text style={{ backgroundColor: this.state.active == 1 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
              <Text style={{ marginLeft: 3, color: this.state.active == 1 ? '#ffffff' : '#989897' }}>外卖单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 2 }) }}>
              <Text style={{ backgroundColor: this.state.active == 2 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
              <Text style={{ marginLeft: 3, color: this.state.active == 2 ? '#ffffff' : '#989897' }}>其它单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 3 }) }}>
              <Text style={{ backgroundColor: this.state.active == 3 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
              <Text style={{ marginLeft: 3, color: this.state.active == 3 ? '#ffffff' : '#989897' }}>取消单</Text>
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