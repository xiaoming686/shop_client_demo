import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, ScrollView, TextInput, StatusBar } from 'react-native'

export default class OrderDetail extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
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
        <View style={styles.orderShop}>
          {/* 2-1 */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
              <Text style={{ fontSize: 19, color: '#2A2A2A', paddingLeft: 8 }}>店铺名</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#3F3C3C' }}>取餐号: 6E84</Text>
          </View>
          {/* 2-2 */}
          <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 3 }}>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={{ marginLeft: 10, overflow: 'hidden' }}><Image source={require('../../assets/images/png/1.png')} style={{ height: 70, width: 70, borderRadius: 2 }} /></View>
              <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ fontSize: 14, color: '#3F3C3C' }}>碳烤全羊</Text>
                  <Text style={{ fontSize: 12, color: '#3F3C3C' }}>数量*1</Text>
                  <Text style={{ fontSize: 12, color: '#3F3C3C' }}>类型:L</Text>
                </View>
                <View><Text style={{ color: '#2A2A2A', fontSize: 15, fontWeight: 'bold' }}>￥1280</Text></View>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}><Text style={{ color: '#3F3C3C', fontSize: 11 }}>*上述价格已含税</Text></View>
          </View>
          {/* 2-3 */}
          <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 10 }}>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 13, color: '#3F3C3C' }}>商品总数</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>2</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 13, color: '#3F3C3C' }}>10%对象 (消费税)</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>¥1830 (¥1830)</Text></View>
            <View style={styles.orderTimeItems}><Text style={{ fontSize: 13, color: '#3F3C3C' }}>优惠金额</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>0</Text></View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 17, color: '#2A2A2A' }}>实收</Text>
              <View><Text style={{ textAlign: 'right', fontSize: 17, color: '#1B1B1B' }}>¥1830</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>(不含税¥1647)</Text>
              </View>
            </View>
          </View>
          {/* 2-4 */}
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
              <Text style={{ fontSize: 19, color: '#2A2A2A', paddingLeft: 8 }}>订单信息</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#3F3C3C' }}>订单编号</Text>
              <Text style={{ fontSize: 13, color: '#3F3C3C' }}>1366676554</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#3F3C3C' }}>就餐方式</Text>
              <Text style={{ fontSize: 13, color: '#3F3C3C' }}>堂食</Text>
            </View>
            <View style={styles.orderTimeItems}>
              <Text style={{ fontSize: 13, color: '#3F3C3C' }}>下单时间</Text>
              <Text style={{ fontSize: 13, color: '#3F3C3C' }}>2020-05-19 12:53</Text>
            </View>
          </View>
          {/* 3 */}
          <View style={{ height: 120,marginTop:10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text>
              <Text style={{ fontSize: 19, color: '#2A2A2A', paddingLeft: 8 }}>备注</Text>
            </View>
            <TextInput
              style={{ paddingLeft: 10, height: 80 }}
              editable={false}
              multiline
              placeholder={'不要香菜，少放点辣椒，我不喜欢洋葱，可以多放点孜然，希望师傅生活美满幸福。'} />
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
    marginTop: 50,
  },
  orderStatus: {
    height: 60,
    paddingTop: 15,
    marginLeft:20,
    marginRight:20,
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
    margin: 20,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#ffffff',
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