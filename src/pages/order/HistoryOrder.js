import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity, Image } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import OtherOrderItem from '../../components/OtherOrderItem'
import TakeOutOrderItem from '../../components/TakeOutOrderItem'
import DropDownMenu from '../../utils/dropDownMenu'

export default class HistoryOrder extends Component {
  state = {
    active: 1,
    isDatePickerVisible: false,
  }
  // 打开日期选择器
  showDatePicker = () => {
    // setDatePickerVisibility(true);
    this.setState({ isDatePickerVisible: true })
    console.log(this.props);
  };
  hideDatePicker = () => {
    // setDatePickerVisibility(false);
    this.setState({ isDatePickerVisible: false })
  };
  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  render() {
    var data = [["第一项目项目项目", "第二项目", "1111111111"], ["第三项目", "第四项目", "22222222222222"]]
    return (
      <ScrollView>
        <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', padding: 15, paddingLeft: 10, paddingRight: 10, borderRadius: 10, backgroundColor: '#030000' }} onPress={this.showDatePicker}>
            <Text style={{ color: '#ffffff' }}>4.23</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 5 }} source={require('../../assets/images/png/downangle.png')} ></Image>
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', backgroundColor: '#030000', borderRadius: 10 }}>
            <TouchableOpacity style={{ padding: 15, paddingLeft: 21, paddingRight: 21, }} onPress={() => { this.setState({ active: 1 }) }}>
              <Text style={{ color: this.state.active == 1 ? '#ffffff' : '#989897' }}>外卖单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 15, paddingLeft: 21, paddingRight: 21, }} onPress={() => { this.setState({ active: 2 }) }}>
              <Text style={{ color: this.state.active == 2 ? '#ffffff' : '#989897' }}>其它单</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 15, paddingLeft: 21, paddingRight: 21, }} onPress={() => { this.setState({ active: 3 }) }}>
              <Text style={{ color: this.state.active == 3 ? '#ffffff' : '#989897' }}>取消单</Text>
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