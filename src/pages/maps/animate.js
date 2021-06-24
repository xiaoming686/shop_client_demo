import React, { useState, useRef } from 'react'
import { TouchableOpacity, Text, View, PanResponder, StyleSheet, Animated } from 'react-native'


export default function Map() {
  const [index, setindex] = useState(0)
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const tranY = useRef(new Animated.Value(40)).current;
  const scale3 = useRef(new Animated.Value(0.8)).current;
  const tranY3 = useRef(new Animated.Value(0)).current;
  function getIndex(index) {
    if (index > 2) {
      return 0
    }
    console.log(index);
    return index + 1
  }
  const panResponder = useRef(
    PanResponder.create({
      // 启动平移手势
      onMoveShouldSetPanResponder: () => true,

      // 一旦动画开始进行操作
      onPanResponderGrant: () => {
        Animated.spring(scale, {
          toValue: 1
        }).start();
        Animated.spring(tranY, {
          toValue: 0
        }).start();
        Animated.spring(scale3, {
          toValue: 0.9
        }).start();
        Animated.spring(tranY3, {
          toValue: 44
        }).start();
      },

      // 移动时处理
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y
          }
        ],
        {
          listener: (event, gestureState) => {
          }
        }
      ),

      // 释放后处理
      onPanResponderRelease: () => {
        if (pan.y._value > 200) {
          Animated.timing(pan, {
            toValue: { x: 0, y: 1000 }
          }).start(() => {
            pan.setValue({ x: 0, y: 0 })
            scale.setValue(0.9)
            tranY.setValue(44)
            scale3.setValue(0.8)
            tranY3.setValue(0)
            // useState这里要异步更新回调函数
            setindex((ind) => {
              if (ind > 2) {
                return 0
              }
              console.log(ind);
              return ind + 1
            })
          })
        } else {
          // pan.flattenOffset();
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 }
          }).start();

          Animated.spring(scale, {
            toValue: 0.9
          }).start();
          Animated.spring(tranY, {
            toValue: 44
          }).start();

          Animated.spring(scale3, {
            toValue: 0.8
          }).start();
          Animated.spring(tranY3, {
            toValue: 0
          }).start();
        }
      }
    })
  ).current;
  // <View style={{ backgroundColor: `rgba(0,0,0,${state})`, position: 'absolute', top: 0, zIndex: 99, width: '100%', height: '100%' }}></View>
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{index}</Text>
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
            marginTop: 10,
            transform: [
              { translateX: pan.x },
              { translateY: pan.y }]
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
        <Animated.View
          style={{
            alignItems: 'center',
            justifyContent: "center",
            transform: [
              { translateY: tranY },
              { scale: scale }],
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
          {...panResponder.panHandlers}
        >
          <View style={[styles.box1]} />
        </Animated.View>
        <Animated.View
          style={{
            alignItems: 'center',
            justifyContent: "center",
            transform: [
              { translateY: tranY3 },
              { scale: scale3 }],
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -2
          }}
          {...panResponder.panHandlers}
        >
          <View style={[styles.box2]} />
        </Animated.View>
      </View>
    </View>
  )
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
    height: 400,
    width: 400 - 20,
    backgroundColor: "blue",
    borderRadius: 20
  },
  box1: {
    height: 400,
    width: 400 - 20,
    backgroundColor: "red",
    borderRadius: 20
  },
  box2: {
    height: 400,
    width: 400 - 20,
    backgroundColor: "green",
    borderRadius: 20
  }
});