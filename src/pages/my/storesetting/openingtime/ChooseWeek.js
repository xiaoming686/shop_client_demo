import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class ChooseWeek extends PureComponent {
  state = {
    mon: true,
    tues: true,
    wednes: true,
    thurs: true,
    fri: true,
    satur: true,
    sun: true,
  }
  render() {
    return (
      <View style={{ marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }} >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => { this.setState({ mon: !this.state.mon, tues: true, wednes: true, thurs: true, fri: true, satur: true, sun: true, }) }}>
          {this.state.mon ? <View style={styles.weekStyle}>
            <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>周一</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View> : <View style={styles.weekCancelStyle}>
            <Text style={{ color: '#5D5757', fontSize: 12, lineHeight: 20 }}>周一</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View>}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ tues: !this.state.tues, mon: true, wednes: true, thurs: true, fri: true, satur: true, sun: true, }) }}>
          {this.state.tues ? <View style={styles.weekStyle}>
            <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>周二</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View> : <View style={styles.weekCancelStyle}>
            <Text style={{ color: '#5D5757', fontSize: 12, lineHeight: 20 }}>周二</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View>}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ wednes: !this.state.wednes, tues: true, mon: true, thurs: true, fri: true, satur: true, sun: true, }) }}>
          {this.state.wednes ? <View style={styles.weekStyle}>
            <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>周三</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View> : <View style={styles.weekCancelStyle}>
            <Text style={{ color: '#5D5757', fontSize: 12, lineHeight: 20 }}>周三</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View>}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ thurs: !this.state.thurs, tues: true, wednes: true, mon: true, fri: true, satur: true, sun: true, }) }}>
          {this.state.thurs ? <View style={styles.weekStyle}>
            <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>周四</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View> : <View style={styles.weekCancelStyle}>
            <Text style={{ color: '#5D5757', fontSize: 12, lineHeight: 20 }}>周四</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View>}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ fri: !this.state.fri, tues: true, wednes: true, thurs: true, mon: true, satur: true, sun: true, }) }}>
          {this.state.fri ? <View style={styles.weekStyle}>
            <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>周五</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View> : <View style={styles.weekCancelStyle}>
            <Text style={{ color: '#5D5757', fontSize: 12, lineHeight: 20 }}>周五</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View>}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ satur: !this.state.satur, tues: true, wednes: true, thurs: true, fri: true, mon: true, sun: true, }) }}>
          {this.state.satur ? <View style={styles.weekStyle}>
            <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>周六</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View> : <View style={styles.weekCancelStyle}>
            <Text style={{ color: '#5D5757', fontSize: 12, lineHeight: 20 }}>周六</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View>}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ sun: !this.state.sun, tues: true, wednes: true, thurs: true, fri: true, satur: true, mon: true, }) }}>
          {this.state.sun ? <View style={styles.weekStyle}>
            <Text style={{ color: 'white', fontSize: 12, lineHeight: 20 }}>周日</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View> : <View style={styles.weekCancelStyle}>
            <Text style={{ color: '#5D5757', fontSize: 12, lineHeight: 20 }}>周日</Text>
            <Image source={require('../../../../assets/images/png/dw_gougouicon.png')}></Image>
          </View>}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  weekStyle: {
    backgroundColor: '#00CB88',
    width: 35,
    height: 49.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weekCancelStyle: {
    backgroundColor: '#E5E4E4',
    width: 35,
    height: 49.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


