
import { TouchableOpacity, Text, View, PanResponder, StyleSheet, Animated, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'


export default class Map extends Component {
  state = {
    index: 0,
    lastY: 0,
    top: false,
    bottom: true,
    scrolly: 10
  }
  getIndex = (index) => {
    if (index > 2) {
      return 0
    }
    console.log(index);
    return index + 1
  }
  scposition = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
    this.setState({ scrolly: e.nativeEvent.contentOffset.y })
  }
  panResponder = PanResponder.create({
    onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      if (this.state.scrolly > 9) {
        console.log(this.state.scrolly);
        console.log(222);
        return false
      } else {
        this.setState({ scrolly: 1 })
        return true
      }
    },
    // 启动平移手势
    onMoveShouldSetPanResponder: () => {
      return true
    },
    // 一旦动画开始进行操作
    onPanResponderGrant: (event, gestureState) => {
      // 获取偏移量并赋值
      console.log('刚开始');
    },
    // 移动时处理
    onPanResponderMove: (event, gestureState) => {
      if (this.state.top) {
        if (gestureState.dy >= 0) {
          this.setState({ lastY: -500 + gestureState.dy })
        } else {
          this.setState({ lastY: -500 })
        }
      } else {
        this.setState({ lastY: gestureState.dy })
      }
    },
    // 释放后处理
    // this.pan.y._value手指移动距离
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.moveY < 500) {
        if (this.state.bottom) {
          this.setState({ lastY: -500 })
          this.setState({ bottom: false })
          this.setState({ top: true })
        } else {
          this.setState({ lastY: -500 })
          this.setState({ top: true })
        }
      } else {
        if (this.state.top) {
          this.setState({ lastY: 0 })
          this.setState({ bottom: true })
          this.setState({ top: false })
        } else {
          this.setState({ lastY: 0 })
        }
      }
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
          <View
            style={{
              alignItems: 'center',
              marginTop: 350,
              transform: [
                { translateX: 0 },
                { translateY: this.state.lastY }]
            }}
            {...this.panResponder.panHandlers}
          >
            <View style={styles.box}>
              <ScrollView onScroll={this.scposition} style={{ backgroundColor: 'red' }}>
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
          </View>
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
    width: Dimensions.get('window').width - 20,
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 40
  },
});