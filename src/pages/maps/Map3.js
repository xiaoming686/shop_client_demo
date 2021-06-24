
import { TouchableOpacity, Text, View, PanResponder, StyleSheet, Animated, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'


export default class Map extends Component {
  state = {
    index: 0,
    lastY: 0,
    top: false,
    bottom: true
  }
  pan = new Animated.ValueXY()
  getIndex = (index) => {
    if (index > 2) {
      return 0
    }
    console.log(index);
    return index + 1
  }
  panResponder = PanResponder.create({
    // 启动平移手势
    onMoveShouldSetPanResponder: () => true,

    // 一旦动画开始进行操作
    onPanResponderGrant: (event, gestureState) => {
      // 获取偏移量并赋值
      console.log('刚开始');
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value
      });
    },

    // 移动时处理
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: this.pan.x,
          dy: this.pan.y
        },
      ],
      {
        useNativeDriver: false,
        listener: (event, gestureState) => {
          console.log('在移动');
        }
      }
    ),

    // 释放后处理
    // this.pan.y._value手指移动距离
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.moveY < 400) {
        if (this.state.bottom) {
          // this.pan.setValue({ x: 0, y: -500 })
          Animated.spring(this.pan, {
            toValue: { x: 0, y: -500 },
            useNativeDriver: false
          }).start();
          this.setState({ bottom: false })
          this.setState({ top: true })
        } else {
          this.pan.setValue({ x: 0, y: 0 })
          this.setState({ top: true })
        }
        // console.log(this.pan);
        // Animated.timing(this.pan, {
        //   toValue: { x: 0, y: -600 },
        //   useNativeDriver: false
        // }).start(() => {
        //   console.log(this.pan);
        //   //     pan.setValue({ x: 0, y: 350 })
        //   //     // useState这里要异步更新回调函数
        //   //     setindex((ind) => {
        //   //       if (ind > 2) {
        //   //         return 0
        //   //       }
        //   //       console.log(ind);
        //   //       return ind + 1
        //   //     })
        //   // this.setState({lastY: this.state.lastY-350})
        // })
      } else {
        if (this.state.top) {
          this.pan.setValue({ x: 0, y: 500 })
          this.setState({ bottom: true })
          this.setState({ top: false })
        } else {
          // this.pan.setValue({ x: 0, y: 0 })
          Animated.spring(this.pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
          }).start();
        }
      }

      // 将偏移量设置合并为基础
      this.pan.flattenOffset();
    }
  })
  // <View style={{ backgroundColor: `rgba(0,0,0,${state})`, position: 'absolute', top: 0, zIndex: 99, width: '100%', height: '100%' }}></View>
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.state.index}</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Text style={styles.titleText}>Drag this box!</Text>
        <View>
          <Animated.View
            style={{
              alignItems: 'center',
              marginTop: 350,
              transform: [
                { translateX: 0 },
                { translateY: this.pan.y }]
            }}
            {...this.panResponder.panHandlers}
          >
            <View style={styles.box}>
              <ScrollView>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
                <Text style={{ fontSize: 50 }}>66666666666666</Text>
              </ScrollView>

            </View>
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 650,
    width: 400 - 20,
    backgroundColor: "gray",
    borderRadius: 20,
    padding:40
  },
});