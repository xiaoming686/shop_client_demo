import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'


export default function OtherOrderItem(props) {
  return (
    <View style={{ margin: 17.5, marginBottom: 0, padding: 15.5, backgroundColor: '#FFFFFF', borderRadius: 20, width: 328.5 }}>
      {/* 1 */}
      <TouchableOpacity activeOpacity={1} onPress={() => { props.props.props.navigation.navigate('OtherOrderDetail') }} >
        <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 19, color: '#5d5757', fontWeight: 'bold', lineHeight: 30 }}>取餐号{props.num}</Text>
          <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between', marginLeft: 8, alignItems: 'center' }}>
            {props.cancel ?
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 14, height: 15, resizeMode: 'contain' }} source={require('../assets/images/png/cancel.png')}></Image>
                <Text style={{ fontSize: 17, color: '#fb1f1f', marginLeft: 3 }}>申请退款</Text>
              </View>
              : props.can ?
                <Text style={{ fontSize: 14, color: '#3f3c3c', borderRadius: 3 }}>桌号:30</Text>
                :
                <Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, lineHeight: 20, color: '#f8f8f9', textAlign: 'center', borderRadius: 3 }}>预定</Text>
            }
            <Text style={{ color: '#00CB88', fontSize: 17, }}>自提</Text>
          </View>
        </View>
        {props.cancel || props.can ?
          <></>
          :
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.03)', paddingTop: 10 }}>
            <Text style={{ color: '#5d5757' }}>预订单/今日13:30自提</Text>
          </View>
        }
        <View style={{ marginTop: 15, paddingBottom: props.tomorrow ? 10 : 20, paddingTop: 15, borderBottomWidth: props.tomorrow ? 0 : 1, borderTopWidth: 1, borderStyle: 'dotted', borderColor: 'rgba(0,0,0,0.03)' }}>
          <Text style={{ textAlign: 'justify', fontSize: 13, color: '#838181' }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
        </View>
      </TouchableOpacity>
      {
        props.tomorrow || props.cancel || props.can ?
          <></>
          :
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
            <TouchableOpacity activeOpacity={1} style={{ width: 128.5, borderRadius: 15, height: 35, backgroundColor: '#5fa6ee', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 17, color: '#ffffff' }}>提醒</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={{ width: 128.4, borderRadius: 15, height: 35, backgroundColor: '#00cb88', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 17, color: '#ffffff' }}>完成</Text>
            </TouchableOpacity>
          </View>
      }
      {
        props.cancel ?
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
            <TouchableOpacity activeOpacity={1} style={{ width: 128.5, borderRadius: 15, height: 35, backgroundColor: '#e5e4e4', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 17, color: '#989897' }}>拒绝退款</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={{ width: 128.4, borderRadius: 15, height: 35, backgroundColor: '#ff6127', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 17, color: '#ffffff' }}>同意退款</Text>
            </TouchableOpacity>
          </View>
          : <></>
      }
      {
        props.can ?
          <View style={{ flexDirection: 'row', paddingTop: 15 }}>
            <Text style={{ fontSize: 13, color: '#fb1f1f', marginLeft: 3 }}>
              <Image style={{ width: 12, height: 12, resizeMode: 'contain', }} source={require('../assets/images/png/cancel.png')}></Image> 取消原因：商家接单1分钟内，顾客退款申请被系统自动通过
            </Text>
          </View>
          : <></>
      }
    </View>
  )
}
