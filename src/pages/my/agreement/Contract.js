import React, { Component } from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

export default class Contract extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f8f8f9', }}>
        <View style={{ marginTop: 50, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', }}>
        <TouchableOpacity style={{ padding: 10, paddingLeft: 0,paddingRight:30 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={{ width: 10, height: 15, resizeMode: 'contain', }} source={require('../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>商家合同</Text>
          <View style={{ padding: 10, paddingLeft: 30,paddingRight:0 }}>
            <Image style={{ opacity: 0, width: 10, height: 15 }} source={require('../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, }}>
          <TouchableOpacity onPress={() => { this.props.navigation.push('Agreement') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 'bold' }}>合同在此</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}
