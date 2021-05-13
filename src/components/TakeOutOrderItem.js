import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'

export default class OtherOrderItem extends Component {
  render() {
    return (
      <View style={{ margin: 20, marginTop: 30, marginBottom: 0, padding: 10, backgroundColor: '#FFFFFF', borderRadius: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 20, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>#1</Text><Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, borderRadius: 4, marginLeft: 8, lineHeight: 20, color: '#fff', textAlign: 'center' }}>预定</Text>
          </View>
          <Text style={{ fontSize: 13, color: '#3F3C3C' }}>立即送达，18:30之前送达</Text>
          <View style={{ flexDirection: 'row' }}><Image source={require('../assets/images/png/search.png')}></Image><Text style={{ fontSize: 15, color: '#FF6127' }}>带骑手接单</Text></View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
          <Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>李先生尾号1234</Text><Text style={{ color: ' #3F3C3C ', fontSize: 13 }}>2.3km/具体位置</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/images/png/search.png')}></Image>
            <Image source={require('../assets/images/png/search.png')} style={{ marginLeft: 5 }}></Image>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
          <View style={{ flexDirection: 'row' }}><Text style={{ color: '#3F3C3C', fontSize: 16, fontWeight: 'bold' }}>出餐时间</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>（承诺15分钟内出餐)</Text></View>
          <Text style={{ fontSize: 13, color: '#3F3C3C' }}>00:20:00</Text>
          <TouchableOpacity style={{ width: 100, height: 50, overflow: 'hidden' }}><Button title="出餐完成" color='#00CB88' style={{ fontSize: 17, textAlign: 'center', borderRadius: 13 }}></Button></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>带骑手接单</Text><Text style={{ fontSize: 12, color: '#FF6127' }}>已等到 00:30:30</Text></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>1种商品，共2件</Text></View>
        <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>
          <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
          <Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>备注：</Text>
          <Text style={{ fontSize: 13, color: '#3F3C3C', lineHeight: 20, paddingBottom: 30 }}>师傅你好，麻烦少放辣椒，我真的很怕辣，可以多放点洋葱和香菜。可以多放点孜然，谢谢！</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>
            <Text style={{ fontSize: 14, color: '#3F3C3C', marginRight: 5 }}>订单详情</Text><Image source={require('../assets/images/png/search.png')}></Image>
          </View>
        </View>
        { this.props.byself ?
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ececec', paddingBottom: 10, paddingTop: 10 }}><Text style={{ backgroundColor: '#ff8c00', marginRight: 10, fontSize: 12, padding: 3, color: '#ffffff' }}>预定</Text><Text style={{ fontWeight: '700' }}>预订单/今日13:30自提</Text></View>
          :
          <></>}
        <View style={{ marginTop: 10, marginBottom: 15, paddingBottom: 20, borderBottomWidth: 1, borderStyle: 'dotted', borderBottomColor: '#ececec' }}>
          <Text style={{ textAlign: 'justify', fontSize: 16, color: '#5D5757' }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
        </View>
        { true ?
          <></>
          :
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ width: 120, borderRadius: 15, overflow: 'hidden' }}><Button title="提醒" color="#5FA6EE"></Button></View>
            <View style={{ width: 120, borderRadius: 15, overflow: 'hidden' }}><Button title="完成" color="#00CB88"></Button></View>
          </View>
        }
        { this.props.cancel ?
          <View style={{ flexDirection: 'row', width: 260, marginTop: 10, marginBottom: 10 }}>
            <Text style={{ color: '#fb1f1f', marginLeft: 5 }}>
              <Image style={{ resizeMode: 'contain', width: 12, height: 12 }} source={require('../assets/images/png/cancel.png')} />
              取消原因：商家接单1分钟内顾客退款申请被系统自动通过
              </Text>
          </View>
          :
          <></>
        }
      </View>
    )
  }
}
