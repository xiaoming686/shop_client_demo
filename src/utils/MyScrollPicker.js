
import { View, Text, Image, Dimensions, ScrollView, Animated, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class MyScrollPicker extends Component {
  state = {
    dataleft: [],
    yAxisleft: 0,
    dataright: [],
    yAxisright: 0,
    time: '',
  }
  //屏幕宽高
  height = Dimensions.get('screen').height
  width = Dimensions.get('window').width
  // 初始动画位置
  translateY = new Animated.Value(this.height)
  // 需要选择的数据
  componentDidMount() {
    for (var i = 0; i < 24; i++) {
      this.state.dataleft.push(i)
    }
    for (var i = 0; i < 60; i++) {
      this.state.dataright.push(i)
    }
    console.log(this.height);
    this.setState({ dataleft: this.state.dataleft })
    this.setState({ dataright: this.state.dataright })
    Animated.timing(this.translateY, {
      toValue: this.height - 370,
      duration: 500,
      useNativeDriver: true
    }).start()
  }
  // 获取当前滚动位置
  getPositionleft = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
    this.setState({ yAxisleft: e.nativeEvent.contentOffset.y })
  }
  getPositionright = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
    this.setState({ yAxisright: e.nativeEvent.contentOffset.y })
  }
  submit = () => {
    let a = this.state.yAxisleft / 40
    let b = this.state.yAxisright / 40
    this.state.time = (a > 9 ? a : '0' + a) + ':' + (b > 10 ? b : '0' + b)
    this.props.hide(this.state.time)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={{
          height: 370, width: '100%', overflow: 'hidden', backgroundColor: '#ffffff', position: 'absolute', top: 0,
          alignItems: 'center', borderTopStartRadius: 20, borderTopRightRadius: 20, transform: [{ translateY: this.translateY }]
        }}>
          {/* head */}
          <View style={{
            backgroundColor: '#ffffff', width: '100%', height: 80,
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
                onMomentumScrollEnd={this.getPositionleft}
                showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                {
                  this.state.dataleft.map((item) => {
                    return (
                      <Text style={{
                        fontSize: 20, lineHeight: 40, alignSelf: 'center',
                        transform: (item) * 40 == this.state.yAxisleft ? [{ scaleY: 1 }] : [{ scaleY: 0.7 }],
                        color: (item) * 40 == this.state.yAxisleft ? 'black' : 'rgba(0,0,0,0.3)'
                      }} key={item}>{item < 10 ? 0 : ''}{item}</Text>
                    )
                  })
                }
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center', }}></Text>
                <Text style={{ fontSize: 20, height: 60, alignSelf: 'center', }}></Text>
              </ScrollView>
            </View>
            {/* 2 */}
            <View style={{ width: '50%', }}>
              <ScrollView
                snapToInterval={40}
                snapToAlignment='center'
                scrollEventThrottle={100}
                onMomentumScrollEnd={this.getPositionright}
                showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                {
                  this.state.dataright.map((item) => {
                    return (
                      <Text style={{
                        fontSize: 20, lineHeight: 40, transform: (item) * 40 == this.state.yAxisright ? [{ scaleY: 1 }] : [{ scaleY: 0.7 }],
                        alignSelf: 'center', color: (item) * 40 == this.state.yAxisright ? 'black' : 'rgba(0,0,0,0.3)'
                      }} key={item}>{item < 10 ? 0 : ''}{item}</Text>
                    )
                  })
                }
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
                <Text style={{ fontSize: 20, height: 40, alignSelf: 'center', }}></Text>
                <Text style={{ fontSize: 20, height: 60, alignSelf: 'center', }}></Text>
              </ScrollView>
            </View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: '80%', zIndex: -1, height: 40, position: 'absolute', top: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>:</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.submit}
            style={{ height: 44, width: 330, borderRadius: 10, backgroundColor: '#00cb88', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, alignSelf: 'center', lineHeight: 30, color: '#ffffff' }}>确定</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}
