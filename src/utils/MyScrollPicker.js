
import { View, Text, Image, Dimensions, ScrollView, Animated, Button } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class MyScrollPicker extends Component {
  state = {
    data: [],
    yAxis: 0,
    show: true
  }
  //屏幕宽高
  height = Dimensions.get('window').height
  width = Dimensions.get('window').width
  // 初始动画位置
  translateY = new Animated.Value(this.height)
  // 需要选择的数据
  componentDidMount() {
    for (var i = 0; i < 61; i++) {
      this.state.data.push(i)
    }
    console.log(this.height);
    this.setState({ data: this.state.data })
    Animated.timing(this.translateY, {
      toValue: this.height - 380,
      duration: 500,
      useNativeDriver: true
    }).start()
  }
  // 获取当前滚动位置
  getPosition = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
    console.log(this.width);
    this.setState({ yAxis: e.nativeEvent.contentOffset.y })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={{
          height: 380, width: '100%', overflow: 'hidden', backgroundColor: 'white', position: 'absolute', top: 0,
          alignItems: 'center', borderTopStartRadius: 20, borderTopRightRadius: 20, transform: [{ translateY: this.translateY }]
        }}>
          {/* head */}
          <View style={{
            backgroundColor: 'white', width: '100%', height: 80,
            justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'
          }}>
            <Text style={{ opacity: 0, fontSize: 20, marginLeft: 20 }}>×</Text>
            <Text style={{ fontSize: 20 }}>设置营业时间段</Text>
            <TouchableOpacity onPress={this.props.hide}>
              <Text style={{ fontSize: 20, marginRight: 20 }}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', height: 220 }}>
            {/* 1 */}
            <View style={{ width: '50%', }}>
              <ScrollView
                snapToInterval={40}
                snapToAlignment='center'
                scrollEventThrottle={100}
                onMomentumScrollEnd={this.getPosition}
                showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                {
                  this.state.data.map((item) => {
                    return (
                      <Text style={{
                        fontSize: 20, lineHeight: 40, alignSelf: 'center',
                        color: (item - 5) * 40 == this.state.yAxis ? 'black' : 'rgba(0,0,0,0.3)'
                      }} key={item}>{item}</Text>
                    )
                  })
                }
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center', }}></Text>
              </ScrollView>
            </View>
            {/* 2 */}
            <View style={{ width: '50%', }}>
              <ScrollView
                snapToInterval={40}
                snapToAlignment='center'
                scrollEventThrottle={100}
                onMomentumScrollEnd={this.abc}
                showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                {
                  this.state.data.map((item) => {
                    return (
                      <Text style={{ fontSize: 20, lineHeight: 40, alignSelf: 'center', color: (item - 5) * 40 == this.state.yAxis ? 'black' : 'rgba(0,0,0,0.3)' }} key={item}>{item}</Text>
                    )
                  })
                }
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center', }}></Text>
              </ScrollView>
            </View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: '80%', zIndex: -1, height: 40, position: 'absolute', top: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18 }}>至</Text>
            </View>
          </View>
          <TouchableOpacity style={{ height: 44, width: 330, borderRadius: 10, backgroundColor: '#00cb88',justifyContent:"center" }}>
            <Text style={{ fontSize: 16, alignSelf: 'center', lineHeight: 30, color: '#ffffff' }}>确定</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}
