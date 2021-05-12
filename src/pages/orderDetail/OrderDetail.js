import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, ScrollView, TextInput, StatusBar } from 'react-native'

export default class OrderDetail extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={{ backgroundColor: '#F8F9F9' }}>
          {/* 1 */}
          <View style={styles.orderStatus}>
            <View style={styles.box}>
              <Image source={require('../../assets/images/png/success.png')}
                style={styles.orderStatusIconStyle} />
              <Text>已下单</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/images/png/doing.png')}
                style={styles.orderStatusIconStyle} />
              <Text>备餐中</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/images/png/waiting.png')}
                style={styles.orderStatusIconStyle} />
              <Text>待取餐</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('../../assets/images/png/waiting.png')}
                style={styles.orderStatusIconStyle} />
              <Text>已完成</Text>
            </View>
          </View>
          {/* 2 */}
          <View style={styles.orderNumber}>
            <Text style={{ fontSize: 16, color: '#3F3C3C' }}>取餐号: <Text style={{ fontWeight: 'bold', fontSize: 34, color: '#3F3C3C' }}>6E84</Text></Text>
          </View>
          {/* 3 */}
          <View style={styles.orderShop}>
            {/* 3-1 */}
            <View style={{ height: 22, borderLeftColor: '#299416', borderLeftWidth: 6 }}><Text style={{ fontSize: 18, color: '#3F3C3C' }}> 店铺名</Text></View>
            {/* 3-2 */}
            <View style={{ marginTop: 20, flexDirection: "row", }}>
              <View style={{ marginLeft: 10 }}><Image source={require('../../assets/images/png/myB.png')} style={{ height: 70, width: 70 }} /></View>
              <View style={{ marginLeft: 10, width: "67%", }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}><Text>鲜虾手握寿司</Text><Text style={{ fontSize: 20, }}>¥28</Text></View>
                <View ><Text style={{ color: '#888888' }}>Size:  L</Text></View>
                <View style={{ marginTop: 10 }}><Text>x1</Text></View>
              </View>
            </View>
            {/* 3-3 */}
            <View style={{ marginTop: 20, flexDirection: "row", }}>
              <View style={{ marginLeft: 10 }}><Image source={require('../../assets/images/png/myB.png')} style={{ height: 70, width: 70 }} /></View>
              <View style={{ marginLeft: 10, width: "67%", }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}><Text>鲜虾手握寿司</Text><Text style={{ fontSize: 20, }}>¥28</Text></View>
                <View ><Text style={{ color: '#888888' }}>Size:  L</Text></View>
                <View style={{ marginTop: 10 }}><Text>x1</Text></View>
              </View>
            </View>
            {/* 3-4 */}
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#FF6E39' }}>*上述价格已含税</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#3F3C3C' }}>商品总数</Text><Text style={{ fontSize: 16, color: '#3F3C3C' }}>2</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#3F3C3C' }}>10%对象 (消费税)</Text><Text style={{ fontSize: 16, color: '#3F3C3C' }}>¥1830 (¥1830)</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#3F3C3C' }}>优惠金额</Text><Text style={{ fontSize: 16, color: '#3F3C3C' }}>0</Text></View>
            <View style={{ paddingTop: 20, borderTopColor: '#DEDEDE', borderStyle: 'dotted', borderTopWidth: 1, flexDirection: "row", justifyContent: 'space-between', marginTop: 40, }}>
              <Text style={{ fontSize: 16, color: '#000', marginTop: 30 }}>实付</Text>
              <Text style={{ textAlign: 'right', fontSize: 22, color: '#FF6E39' }}>¥1830</Text><Text style={{ fontSize: 16, color: '#A0A0A0' }}>(不含税¥1647)</Text>
            </View>
          </View>
          {/* 4 */}
          <View style={styles.orderTime}>
            <Text style={{ fontSize: 16, color: '#000' }}>订单信息</Text>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#888888' }}>订单编号</Text><Text style={{ fontSize: 16, color: '#3F3C3C' }}>1366676554</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#888888' }}>就餐方式</Text><Text style={{ fontSize: 16, color: '#1AB481' }}>堂食</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#888888' }}>下单时间</Text><Text style={{ fontSize: 16, color: '#3F3C3C' }}>2020-05-19</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 16, color: '#888888' }}>订单备注</Text><Text style={{ fontSize: 16, color: '#3F3C3C' }}>12:53</Text></View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                style={{ paddingLeft: 10, borderRadius: 10, marginTop: 20, height: 80, borderColor: '#888888', borderWidth: 1 }}
                editable
                multiline
                placeholder={'备注是开发环境连卡佛哈克符合客户的房间看哈的分厘卡机和放大 客户的罚款发哈记得发货啦'} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
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
    height: 500,
    marginTop: 10,
    padding: 15,
    backgroundColor: 'transparent',
  },
  orderTime: {
    height: 350,
    marginTop: 10,
    padding: 15,
    backgroundColor: 'transparent',
  },
  orderTimeItems: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 15,
  },
  box: {
    width: '25%',
    alignItems: "center"
  },
  orderStatusIconStyle: {
    width: 20,
    height: 20,
  }
})