
import { View, Text, Image, Dimensions, ScrollView, Animated, Button } from 'react-native'

import React, { Component } from 'react'

export default class test extends Component {
  state = {
    data: [],
    yAxis: 0,
    show: true
  }
  height = Dimensions.get('window').height
  translateY = new Animated.Value(this.height)
  componentDidMount() {
    for (var i = 5; i < 61; i++) {
      this.state.data.push(i)
    }
    console.log(this.height);
    this.setState({ data: this.state.data })
    Animated.timing(this.translateY, {
      toValue: 350,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }
  abc = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
    this.setState({ yAxis: e.nativeEvent.contentOffset.y + 75 })
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 180, flexDirection: 'row' }}>
        {
          this.state.show ?
            <Animated.View style={{
              height: 150, width: '100%', overflow: 'hidden', backgroundColor: 'pink',position:'absolute',top:0,
              transform: [{ translateY: this.translateY }]
            }}>
              <View style={{ backgroundColor: 'red', width: 80, height: 30, position: 'absolute', top: 75 }}></View>
              <ScrollView snapToInterval={25} snapToAlignment='center'
                scrollEventThrottle={100}
                onMomentumScrollEnd={this.abc} showsVerticalScrollIndicator={false}>
                {
                  this.state.data.map((item) => {
                    return (
                      <Text style={{ fontSize: 20, height: 25, color: (item - 5) * 25 == this.state.yAxis ? 'green' : 'black' }} key={item}>{item}</Text>
                    )
                  })
                }
              </ScrollView>
            </Animated.View>:
            <></>
        }
        <View style={{ height: 100, overflow: 'hidden', marginLeft: 60 }}>
          <Button title='666'></Button>
          {
            this.state.data.map((item) => {
              return (
                <Text style={{ fontSize: 20, }} key={item}>{item}</Text>
              )
            })
          }
        </View>
      </View>
    )
  }
}
