import React, { Component } from 'react'
import { View, Text, Button, ViewComponent, ScrollView, Image, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function TakeOutOrder() {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: true,
      activeTintColor: '#FFFFFF',
      indicatorStyle: {
        backgroundColor: '#00CB88',
        width: 8,
        height: 8,
        borderRadius: 5,
        marginBottom: 20,
        marginLeft: 15
      },
      style: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: '#030000',
      }
    }}>
      <Tab.Screen name="DoingOrder" component={DoingOrder} options={{ tabBarLabel: '进行中', }} />
      <Tab.Screen name="ReservedOrder" component={ReservedOrder} options={{ tabBarLabel: '预定单', }} />
      <Tab.Screen name="Refund" component={Refund} options={{ tabBarLabel: '退款', }} />
    </Tab.Navigator>
  );
}

class DoingOrder extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        {/* 1-遍历订单 */}
        <ScrollView>
          <View style={{ marginTop: 20, paddingTop: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: '#FFFFFF', borderRadius: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 20, paddingTop: 20 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>#1</Text><Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, borderRadius: 4, marginLeft: 8, lineHeight: 20, color: '#fff', textAlign: 'center' }}>预定</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#3F3C3C' }}>立即送达，18:30之前送达</Text>
              </View>
              <View style={{ flexDirection: 'row' }}><Image source={require('../../assets/images/png/dy_dianpincheicon.png')}></Image><Text style={{ fontSize: 15, color: '#FF6127' }}>带骑手接单</Text></View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>李先生尾号1234</Text><Text style={{ color: ' #3F3C3C ', fontSize: 13 }}>2.3km/具体位置</Text></View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/png/dw_dianhuaicon.png')}></Image>
                <Image source={require('../../assets/images/png/dy_duihuaicon.png')} style={{ marginLeft: 5 }}></Image>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><View style={{ flexDirection: 'row' }}><Text style={{ color: '#3F3C3C', fontSize: 16, fontWeight: 'bold' }}>出餐时间</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>（承诺15分钟内出餐)</Text></View>
                <View><Text style={{ fontSize: 13, color: '#3F3C3C' }}>00:20:00</Text></View>
              </View>
              <TouchableOpacity><View style={{ width: 100, height: 50, overflow: 'hidden' }}><Button title="出餐完成" color='#00CB88' style={{ fontSize: 17, textAlign: 'center', borderRadius: 13 }}></Button></View></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>带骑手接单</Text><Text style={{ fontSize: 12, color: '#FF6127' }}>已等到 00:30:30</Text></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>1种商品，共2件</Text></View>

            <View><View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}><Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>备注：</Text></View>
              <Text style={{ fontSize: 13, color: '#3F3C3C', lineHeight: 20, paddingBottom: 30 }}>师傅你好，麻烦少放辣椒，我真的很怕辣，可以多放点洋葱和香菜。可以多放点孜然，谢谢！</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ fontSize: 14, color: '#3F3C3C', marginRight: 5 }}>订单详情</Text><Image source={require('../../assets/images/png/dy_gengduoicon.png')}></Image></View>
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }
}

class ReservedOrder extends Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{
        showLabel: true,
        activeTintColor: '#000000',
        indicatorStyle: {
          backgroundColor: '#transparent',
        },
        labelStyle: {
          width: 90,
          height: 30,
          backgroundColor: '#E5E4E4',
          padding: 5,
          borderRadius: 10
        },
        style: {
          marginTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: 'F8F8F9',
        }
      }}>
        <Tab.Screen name="ReservedSoonOrder" component={ReservedSoonOrder} options={{ title: '即将到时', }} />
        <Tab.Screen name="ReservedTodayOrder" component={ReservedTodayOrder} options={{ title: '今日', }} />
        <Tab.Screen name="ReservedTomorrowOrder" component={ReservedTomorrowOrder} options={{ title: '明日', }} />
      </Tab.Navigator>
    )
  }
}

class Refund extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        {/* 1-遍历订单 */}
        <ScrollView>
          <View style={{ marginTop: 20, paddingTop: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: '#FFFFFF', borderRadius: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 20, paddingTop: 20 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>#1</Text><Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, borderRadius: 4, marginLeft: 8, lineHeight: 20, color: '#fff', textAlign: 'center' }}>预定</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#3F3C3C' }}>立即送达，18:30之前送达</Text>
              </View>
              <View style={{ flexDirection: 'row' }}><Image source={require('../../assets/images/png/dy_dianpincheicon.png')}></Image><Text style={{ fontSize: 15, color: '#FF6127' }}>带骑手接单</Text></View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>李先生尾号1234</Text><Text style={{ color: ' #3F3C3C ', fontSize: 13 }}>2.3km/具体位置</Text></View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/png/dw_dianhuaicon.png')}></Image>
                <Image source={require('../../assets/images/png/dy_duihuaicon.png')} style={{ marginLeft: 5 }}></Image>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><View style={{ flexDirection: 'row' }}><Text style={{ color: '#3F3C3C', fontSize: 16, fontWeight: 'bold' }}>出餐时间</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>（承诺15分钟内出餐)</Text></View>
                <View><Text style={{ fontSize: 13, color: '#3F3C3C' }}>00:20:00</Text></View>
              </View>
              <TouchableOpacity><View style={{ width: 100, height: 50, overflow: 'hidden' }}><Button title="出餐完成" color='#00CB88' style={{ fontSize: 17, textAlign: 'center', borderRadius: 13 }}></Button></View></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>带骑手接单</Text><Text style={{ fontSize: 12, color: '#FF6127' }}>已等到 00:30:30</Text></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>1种商品，共2件</Text></View>

            <View><View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}><Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>备注：</Text></View>
              <Text style={{ fontSize: 13, color: '#3F3C3C', lineHeight: 20, paddingBottom: 30 }}>师傅你好，麻烦少放辣椒，我真的很怕辣，可以多放点洋葱和香菜。可以多放点孜然，谢谢！</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ fontSize: 14, color: '#3F3C3C', marginRight: 5 }}>订单详情</Text><Image source={require('../../assets/images/png/dy_gengduoicon.png')}></Image></View>
            </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}

// 2-1即将到时
class ReservedSoonOrder extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        {/* 1-遍历订单 */}
        <ScrollView>
          <View style={{ marginTop: 20, paddingTop: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: '#FFFFFF', borderRadius: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 20, paddingTop: 20 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>#1</Text><Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, borderRadius: 4, marginLeft: 8, lineHeight: 20, color: '#fff', textAlign: 'center' }}>预定</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#3F3C3C' }}>立即送达，18:30之前送达</Text>
              </View>
              <View style={{ flexDirection: 'row' }}><Image source={require('../../assets/images/png/dy_dianpincheicon.png')}></Image><Text style={{ fontSize: 15, color: '#FF6127' }}>带骑手接单</Text></View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>李先生尾号1234</Text><Text style={{ color: ' #3F3C3C ', fontSize: 13 }}>2.3km/具体位置</Text></View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/png/dw_dianhuaicon.png')}></Image>
                <Image source={require('../../assets/images/png/dy_duihuaicon.png')} style={{ marginLeft: 5 }}></Image>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><View style={{ flexDirection: 'row' }}><Text style={{ color: '#3F3C3C', fontSize: 16, fontWeight: 'bold' }}>出餐时间</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>（承诺15分钟内出餐)</Text></View>
                <View><Text style={{ fontSize: 13, color: '#3F3C3C' }}>00:20:00</Text></View>
              </View>
              <TouchableOpacity><View style={{ width: 100, height: 50, overflow: 'hidden' }}><Button title="出餐完成" color='#00CB88' style={{ fontSize: 17, textAlign: 'center', borderRadius: 13 }}></Button></View></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>带骑手接单</Text><Text style={{ fontSize: 12, color: '#FF6127' }}>已等到 00:30:30</Text></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>1种商品，共2件</Text></View>

            <View><View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}><Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>备注：</Text></View>
              <Text style={{ fontSize: 13, color: '#3F3C3C', lineHeight: 20, paddingBottom: 30 }}>师傅你好，麻烦少放辣椒，我真的很怕辣，可以多放点洋葱和香菜。可以多放点孜然，谢谢！</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ fontSize: 14, color: '#3F3C3C', marginRight: 5 }}>订单详情</Text><Image source={require('../../assets/images/png/dy_gengduoicon.png')}></Image></View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
// 2-2今日
class ReservedTodayOrder extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        {/* 1-遍历订单 */}
        <ScrollView>
          <View style={{ marginTop: 20, paddingTop: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: '#FFFFFF', borderRadius: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 20, paddingTop: 20 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>#1</Text><Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, borderRadius: 4, marginLeft: 8, lineHeight: 20, color: '#fff', textAlign: 'center' }}>预定</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#3F3C3C' }}>立即送达，18:30之前送达</Text>
              </View>
              <View style={{ flexDirection: 'row' }}><Image source={require('../../assets/images/png/dy_dianpincheicon.png')}></Image><Text style={{ fontSize: 15, color: '#FF6127' }}>带骑手接单</Text></View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>李先生尾号1234</Text><Text style={{ color: ' #3F3C3C ', fontSize: 13 }}>2.3km/具体位置</Text></View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/png/dw_dianhuaicon.png')}></Image>
                <Image source={require('../../assets/images/png/dy_duihuaicon.png')} style={{ marginLeft: 5 }}></Image>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><View style={{ flexDirection: 'row' }}><Text style={{ color: '#3F3C3C', fontSize: 16, fontWeight: 'bold' }}>出餐时间</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>（承诺15分钟内出餐)</Text></View>
                <View><Text style={{ fontSize: 13, color: '#3F3C3C' }}>00:20:00</Text></View>
              </View>
              <TouchableOpacity><View style={{ width: 100, height: 50, overflow: 'hidden' }}><Button title="出餐完成" color='#00CB88' style={{ fontSize: 17, textAlign: 'center', borderRadius: 13 }}></Button></View></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>带骑手接单</Text><Text style={{ fontSize: 12, color: '#FF6127' }}>已等到 00:30:30</Text></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>1种商品，共2件</Text></View>

            <View><View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}><Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>备注：</Text></View>
              <Text style={{ fontSize: 13, color: '#3F3C3C', lineHeight: 20, paddingBottom: 30 }}>师傅你好，麻烦少放辣椒，我真的很怕辣，可以多放点洋葱和香菜。可以多放点孜然，谢谢！</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ fontSize: 14, color: '#3F3C3C', marginRight: 5 }}>订单详情</Text><Image source={require('../../assets/images/png/dy_gengduoicon.png')}></Image></View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
// 2-3明日
class ReservedTomorrowOrder extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F8F8F9', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        {/* 1-遍历订单 */}
        <ScrollView>
          <View style={{ marginTop: 20, paddingTop: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: '#FFFFFF', borderRadius: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 20, paddingTop: 20 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>#1</Text><Text style={{ backgroundColor: '#FF6127', fontSize: 12, width: 32, height: 20, borderRadius: 4, marginLeft: 8, lineHeight: 20, color: '#fff', textAlign: 'center' }}>预定</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#3F3C3C' }}>立即送达，18:30之前送达</Text>
              </View>
              <View style={{ flexDirection: 'row' }}><Image source={require('../../assets/images/png/dy_dianpincheicon.png')}></Image><Text style={{ fontSize: 15, color: '#FF6127' }}>带骑手接单</Text></View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>李先生尾号1234</Text><Text style={{ color: ' #3F3C3C ', fontSize: 13 }}>2.3km/具体位置</Text></View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/png/dw_dianhuaicon.png')}></Image>
                <Image source={require('../../assets/images/png/dy_duihuaicon.png')} style={{ marginLeft: 5 }}></Image>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}>
              <View><View style={{ flexDirection: 'row' }}><Text style={{ color: '#3F3C3C', fontSize: 16, fontWeight: 'bold' }}>出餐时间</Text><Text style={{ fontSize: 13, color: '#3F3C3C' }}>（承诺15分钟内出餐)</Text></View>
                <View><Text style={{ fontSize: 13, color: '#3F3C3C' }}>00:20:00</Text></View>
              </View>
              <TouchableOpacity><View style={{ width: 100, height: 50, overflow: 'hidden' }}><Button title="出餐完成" color='#00CB88' style={{ fontSize: 17, textAlign: 'center', borderRadius: 13 }}></Button></View></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>带骑手接单</Text><Text style={{ fontSize: 12, color: '#FF6127' }}>已等到 00:30:30</Text></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, borderBottomColor: '#ECECEC', borderBottomWidth: 1, borderStyle: 'dashed' }}><Text style={{ fontSize: 16, color: '#3F3C3C', fontWeight: 'bold' }}>1种商品，共2件</Text></View>

            <View><View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}><Text style={{ backgroundColor: '#00CB88', borderRadius: 4, width: 7, height: 21 }}></Text><Text style={{ fontSize: 19, color: '#3F3C3C', marginLeft: 8 }}>备注：</Text></View>
              <Text style={{ fontSize: 13, color: '#3F3C3C', lineHeight: 20, paddingBottom: 30 }}>师傅你好，麻烦少放辣椒，我真的很怕辣，可以多放点洋葱和香菜。可以多放点孜然，谢谢！</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ fontSize: 14, color: '#3F3C3C', marginRight: 5 }}>订单详情</Text><Image source={require('../../assets/images/png/dy_gengduoicon.png')}></Image></View>
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
