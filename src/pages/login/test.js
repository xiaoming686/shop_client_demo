
import { View, Text, Image, Dimensions, ScrollView, Animated, Button } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class test extends Component {
  state = {
    data: [],
    yAxis: 0,
    show: true
  }
  height = Dimensions.get('window').height
  width = Dimensions.get('window').width
  translateY = new Animated.Value(this.height)
  componentDidMount() {
    for (var i = 5; i < 61; i++) {
      this.state.data.push(i)
    }
    console.log(this.height);
    this.setState({ data: this.state.data })
    Animated.timing(this.translateY, {
      toValue: 737 - 283,
      duration: 500,
      useNativeDriver: true
    }).start()
  }
  abc = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
    console.log(this.width);
    this.setState({ yAxis: e.nativeEvent.contentOffset.y })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 100 }}>67613681381</Text>
        {
          this.state.show ?
            <Animated.View style={{
              height: 310, width: '100%', overflow: 'hidden', backgroundColor: 'white', position: 'absolute', top: 0, alignItems: 'center', borderTopStartRadius: 20, borderTopRightRadius: 20,
              transform: [{ translateY: this.translateY }]
            }}>
              <View style={{ backgroundColor: 'white', width: '100%', height: 80, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text>    </Text>
                <Text style={{ fontSize: 20 }}>设置核销时间</Text>
                <Text style={{ fontSize: 20, marginRight: 20 }}>×</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center',height:200 }}>
                <View style={{ width: '50%', }}>
                  <ScrollView
                    snapToInterval={40}
                    snapToAlignment='center'
                    scrollEventThrottle={100}
                    onMomentumScrollEnd={this.abc}
                    showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
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
                <View style={{ width: '50%', }}>
                  <ScrollView
                    snapToInterval={40}
                    snapToAlignment='center'
                    scrollEventThrottle={100}
                    onMomentumScrollEnd={this.abc}
                    showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 20, height: 40, alignSelf: 'center' }}></Text>
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
                <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: '80%', zIndex: -1, height: 40, position: 'absolute', top: 80, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>至</Text>
                </View>
              </View>
              <TouchableOpacity style={{ height: 25,width:250,borderRadius:20, backgroundColor: '#00cb88' }}>
                <Text style={{fontSize:16,alignSelf:'center',lineHeight:25,color:'#ffffff'}}>确定</Text>
                </TouchableOpacity>
            </Animated.View> :
            <></>
        }
      </View>
    )
  }
}
