import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'

export default class OtherOrderItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => { this.props.props.navigation.navigate('OrderDetail') }} style={{ margin: 20, marginTop: 30, marginBottom: 0, padding: 10, backgroundColor: '#FFFFFF', borderRadius: 20 }}>
        <View style={{ flexDirection: 'row', }}>
          <Text style={{ fontSize: 22 }}>取餐号{this.props.num}</Text>
          <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between', marginTop: 8, marginLeft: 10 }}>
            <Text style={{ color: '#5D5757' }}>桌号：58</Text>
            <Text style={{ color: 'green', }}>外带</Text>
          </View>
        </View>
        { this.props.byself ?
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, borderTopWidth: 1, borderBottomWidth: 1,borderColor:'#ececec', paddingBottom: 10, paddingTop: 10 }}><Text style={{ backgroundColor: '#ff8c00', marginRight: 10, fontSize: 12, padding: 3, color: '#ffffff' }}>预定</Text><Text style={{ fontWeight: '700' }}>预订单/今日13:30自提</Text></View>
          :
          <></>}
        <View style={{ marginTop: 10, marginBottom: 15, paddingBottom: 20, borderBottomWidth: 1, borderStyle: 'dotted', borderBottomColor: '#ececec' }}>
          <Text style={{ textAlign: 'justify', fontSize: 16, color: '#5D5757' }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
        </View>
        { this.props.tomorrow ?
          <></>
          :
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ width: 120, borderRadius: 15, overflow: 'hidden' }}><Button title="提醒" color="#5FA6EE"></Button></View>
            <View style={{ width: 120, borderRadius: 15, overflow: 'hidden' }}><Button title="完成" color="#00CB88"></Button></View>
          </View>
        }
        { this.props.cancel ?
          <View style={{ flexDirection: 'row', width: 260, marginTop: 10,marginBottom:10 }}>
            <Text style={{ color: '#fb1f1f', marginLeft: 5 }}>
              <Image style={{ resizeMode: 'contain', width: 12, height: 12 }} source={require('../assets/images/png/cancel.png')} />
              取消原因：商家接单1分钟内顾客退款申请被系统自动通过
              </Text>
          </View>
          :
          <></>
        }
      </TouchableOpacity>
    )
  }
}
