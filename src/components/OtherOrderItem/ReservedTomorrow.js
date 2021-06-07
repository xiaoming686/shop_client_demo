import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'


export default function OtherOrderItem(props) {
  return (
    <View style={{ margin: 17.5, marginBottom: 0, padding: 15.5, backgroundColor: '#FFFFFF', borderRadius: 20, }}>
      {/* 1 */}
      <TouchableOpacity activeOpacity={1} onPress={() => { props.props.props.navigation.navigate('OtherOrderDetail') }} >
        <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 19, color: '#5d5757', fontWeight: 'bold', lineHeight: 30 }}>取餐号{props.num}</Text>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginLeft: 8, alignItems: 'center' }}>
            <Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, lineHeight: 20, color: '#f8f8f9', textAlign: 'center', borderRadius: 3 }}>预定</Text>
            <Text style={{ color: '#00CB88', fontSize: 17, }}>自提</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.03)', paddingTop: 10 }}>
          <Text style={{ color: '#5d5757' }}>预订单/今日13:30自提</Text>
        </View>
        <View style={{ marginTop: 15, paddingBottom: props.tomorrow ? 10 : 20, paddingTop: 15, borderBottomWidth: props.tomorrow ? 0 : 1, borderTopWidth: 1, borderStyle: 'dotted', borderColor: 'rgba(0,0,0,0.03)' }}>
          <Text style={{ textAlign: 'justify', fontSize: 13, color: '#838181' }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
