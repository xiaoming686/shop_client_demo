import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image, BackHandler, Alert } from 'react-native'
import { Checkbox } from 'teaset'

export default class TakeOutOrderItem extends Component {
  render() {
    return (
      <View style={{ margin: 19, marginTop: 23, padding: 20, backgroundColor: '#FFFFFF', borderRadius: 20 }}>
        {/* 1 */}
        <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
              <Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 5 }}>#1</Text>
              {
                this.props.doing || this.props.refund ?
                  <></>
                  :
                  <Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, marginLeft: 15, lineHeight: 20, color: '#f8f8f9', textAlign: 'center' }}>预定</Text>
              }
            </View>
            {
              this.props.refund ?
                <Text style={{ fontSize: 15, color: '#838181' }}>订单取消</Text>
                :
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ resizeMode: 'contain', width: 18, height: 18 }} source={require('../assets/images/png/dy_dianpincheicon.png')}></Image>
                  <Text style={{ fontSize: 15, color: '#FF6127' }}>待骑手接单</Text>
                </View>
            }
          </View>
          <Text style={{ fontSize: 13, color: '#3F3C3C', marginTop: 7 }}>立即送达，18:30之前送达</Text>
          {this.props.refund ?
            <View style={{ flexDirection: 'row', marginTop: 10, }}>
              <Text style={{ color: '#fb1f1f' }}>
                <Image style={{ resizeMode: 'contain', width: 12, height: 12 }} source={require('../assets/images/png/cancel.png')} />
              取消原因：商家接单1分钟内顾客退款申请被系统自动通过
              </Text>
            </View>
            :
            <></>
          }
        </View>
        {/* 2 */}
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
          <View>
            <Text style={{ fontSize: 16, color: '#3F3C3C', }}>李先生尾号1234</Text>
            <Text style={{ color: '#3F3C3C', fontSize: 13, marginTop: 5 }}>2.3km/具体位置</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/images/png/dw_dianhuaicon.png')}></Image>
          </View>
        </View>
        {/* 3 */}
        {this.props.refund ?
          <View style={{ paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
            <Text style={{ color: '#3F3C3C', fontSize: 16, }}>本单备餐时长</Text>
            <Text style={{ fontSize: 13, color: '#3F3C3C', marginTop: 5 }}>00:20:00</Text>
          </View>
          :
          <View>
            {/* 4 */}
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={{ color: '#3F3C3C', fontSize: 16, }}>出餐时间</Text>
                  <Text style={{ fontSize: 13, color: '#3F3C3C' }}>（承诺15分钟内出餐)</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#3F3C3C', marginTop: 5 }}>00:20:00</Text>
              </View>
              <TouchableOpacity onPress={() => { console.log(666); }} style={{ backgroundColor: '#00CB88', width: 85, height: 31, borderRadius: 15, alignItems: 'center' }}>
                <Text style={{ fontSize: 17, color: '#ffffff', marginTop: 3 }}>出餐完成</Text>
              </TouchableOpacity>
            </View>
            {/* 5 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <Text style={{ fontSize: 16, color: '#3F3C3C', }}>待骑手接单</Text>
              <Text style={{ fontSize: 12, color: '#FF6127' }}>已等到 00:30:30</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <Text style={{ fontSize: 16, color: '#3F3C3C', }}>1种商品，共2件</Text>
            </View>
          </View>
        }
        {/*  6 */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
          <Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 5 }}>备注：</Text>
        </View>
        {/* 7 */}
        <Text style={{ fontSize: 14, color: '#3F3C3C', marginTop: 17 }}>师傅你好，麻烦少放辣椒，我真的很怕辣，可以多放点洋葱和香菜。可以多放点孜然，谢谢！</Text>
        {/* 8 */}
        <TouchableOpacity onPress={() => { this.props.props.navigation.navigate('TakeoutOrderDetail') }} style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 50 }}>
          <Text style={{ fontSize: 14, color: '#3F3C3C', marginRight: 5 }}>订单详情</Text>
          <Image source={require('../assets/images/png/dy_gengduoicon.png')}></Image>
        </TouchableOpacity>
      </View >
    )
  }
}
