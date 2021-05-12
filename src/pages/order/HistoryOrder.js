import React, { Component } from 'react'
import { View,Text,Button } from 'react-native'

export default class HistoryOrder extends Component {
  render() {
    return (
      <View>
      {/* 1-需要遍历历史订单 */}
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
