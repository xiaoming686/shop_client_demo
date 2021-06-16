import { View, Text, Image, StyleSheet, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TakeoutOrderDetail() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f9' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#ffffff', flex: 1, margin: 19, marginTop: 40, borderRadius: 15, paddingLeft: 12, paddingRight: 20, paddingTop: 10 }}>
        {/* 1 */}
        <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 10, paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
              <Text style={{ fontSize: 19, color: '#3F3C3C', paddingLeft: 5 }}>#1</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 20, height: 20,resizeMode:'contain' }} source={require('../../assets/images/png/dy_dianpincheicon3x.png')}></Image>
              <Text style={{ fontSize: 15, color: '#FF6127' }}>待骑手接单</Text>
            </View>
          </View>
          <Text style={{ fontSize: 13, color: '#5d5757', marginTop: 10, marginLeft: 12 }}>立即送达，18:30之前送达</Text>
        </View>
        {/* 2 */}
        <View style={{ marginLeft: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
          <View>
            <Text style={{ fontSize: 16, color: '#5d5757', }}>李先生尾号1234</Text>
            <Text style={{ color: '#5d5757', fontSize: 13, marginTop: 5 }}>2.3km/具体位置</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/png/dw_dianhuaicon.png')}></Image>
          </View>
        </View>
        {/* 3 */}
        <View style={{ marginLeft: 12, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={{ color: '#5d5757', fontSize: 16, }}>出餐时间</Text>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>（承诺15分钟内出餐)</Text>
            </View>
            <View><Text style={{ fontSize: 13, color: '#5d5757', marginTop: 5 }}>00:20:00</Text></View>
          </View>
          <TouchableOpacity onPress={() => { console.log(666); }} style={{ backgroundColor: '#00CB88', alignSelf: 'center', padding: 10, paddingBottom: 5, paddingTop: 5, borderRadius: 20 }}>
            <Text style={{ fontSize: 16, color: '#ffffff' }}>已出餐</Text>
          </TouchableOpacity>
        </View>
        {/* 4 */}
        <View style={{ marginLeft: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={{ fontSize: 16, color: '#5d5757', }}>李四</Text>
              <Text style={{ color: '#5FA6EE', paddingLeft: 10 }}>骑手</Text>
            </View>
            <Text style={{ color: '#FF6127', fontSize: 13, marginTop: 5 }}>11:45  骑手已到店</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/png/dw_dianhuaicon.png')}></Image>
            <Image source={require('../../assets/images/png/dy_dingweiicon.png')} style={{ marginLeft: 10 }}></Image>
          </View>
        </View>
        {/* 5 */}
        <View style={styles.orderShop}>
          {/* 5-1 */}
          <View style={{ flexDirection: 'row', alignItems: 'center', fontWeight: 'bold' }}>
            <Text style={{ width: 6, height: 22, borderRadius: 3, backgroundColor: '#00CB88' }}></Text>
            <Text style={{ fontSize: 19, color: '#3F3C3C', paddingLeft: 5 }}>订单详情</Text>
          </View>
          {/* 5-2 */}
          <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 2 }}>
            <View style={{ marginTop: 22, flexDirection: "row" }}>
              <View style={{ marginLeft: 10, overflow: 'hidden' }}><Image source={require('../../assets/images/png/1.png')} style={{ height: 70, width: 70, borderRadius: 2 }} /></View>
              <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 14, color: '#2a2a2a', fontWeight: 'bold' }}>碳烤全羊</Text>
                  <Text style={{ fontSize: 12, color: '#5d5757' }}>类型: L</Text>
                  <Text style={{ fontSize: 12, color: '#5d5757' }}>X1</Text>
                </View>
                <View><Text style={{ color: '#2A2A2A', fontSize: 15, fontWeight: 'bold' }}>￥1,280</Text></View>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}><Text style={{ color: '#3F3C3C', fontSize: 11 }}>*上述价格已含税</Text></View>
          </View>
          {/* 5-3 */}
          <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 3, marginLeft: 12 }}>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>商品总数</Text>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>2</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>8%对象 (消费税)</Text>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>¥1830 (¥1830)</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>平台服务费</Text>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>¥30</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>配送费</Text>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>¥300</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>优惠券</Text>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>未使用优惠券</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>优惠金额</Text>
              <Text style={{ fontSize: 13, color: '#5d5757' }}>¥0</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 17, color: '#2A2A2A' }}>实收</Text>
              <View>
                <Text style={{ textAlign: 'right', fontSize: 17, color: '#1B1B1B' }}>¥1830</Text>
                <Text style={{ fontSize: 13, color: '#3F3C3C' }}>(不含税¥1647)</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 6 */}
        <View style={styles.orderTime}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -12 }}>
            <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
            <Text style={{ fontSize: 19, color: '#2A2A2A', marginLeft: 5 }}>订单信息</Text>
          </View>
          <View style={styles.orderTimeItems}>
            <Text style={{ fontSize: 13, color: '#5d5757' }}>订单编号</Text>
            <Text style={{ fontSize: 13, color: '#5d5757' }}>1366676554</Text>
          </View>
          <View style={styles.orderTimeItems}>
            <Text style={{ fontSize: 13, color: '#5d5757' }}>下单时间</Text>
            <Text style={{ fontSize: 13, color: '#5d5757' }}>2020-05-19 12:53</Text>
          </View>
          <View style={{ height: 180 }}>
            <Text style={{ fontSize: 13, color: '#5d5757', marginTop: 10 }}>订单备注</Text>
            <TextInput
              style={{ backgroundColor: '#f8f8f9', marginTop: 10, color: '#5d5757', paddingHorizontal: 20, borderRadius: 15, paddingVertical: 15 }}
              editable={false}
              multiline
              value={'不要香菜，少放点辣椒，我不喜欢洋葱，可以多放点孜然，希望师傅生活美满幸福。'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
    marginTop: 10
  },
  orderStatus: {
    height: 60,
    paddingTop: 15,
    backgroundColor: 'transparent',
    flexDirection: "row",
  },
  orderNumber: {
    height: 70,
    marginTop: 10,
    paddingLeft: 15,
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: "row",
  },
  orderShop: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  orderTime: {
    marginTop: 10,
    marginLeft: 12,
    backgroundColor: 'transparent',
  },
  orderTimeItems: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 10,
  },
  box: {
    width: '25%',
    alignItems: "center"
  },
  orderStatusIconStyle: {
    width: 20,
    height: 20,
  },
  remark: {
    height: 80,
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
    color: '#030000',
    fontSize: 12,
    backgroundColor: '#F8F8F9'
  }
})