import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Agreement extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f8f8f9',paddingHorizontal: 20, }}>
        <TouchableOpacity onPress={() => { this.props.navigation.push('UseClause') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginLeft: 5, fontSize: 16,fontWeight:'bold' }}>使用条款</Text>
          <Text style={{ fontSize: 16, color: '#3f3c3c' }}>></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.push('PrivacyClause') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginLeft: 5, fontSize: 16,fontWeight:'bold' }}>隐私条款</Text>
          <Text style={{ fontSize: 16, color: '#3f3c3c' }}>></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.push('Contract') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginLeft: 5, fontSize: 16,fontWeight:'bold' }}>商家合同</Text>
          <Text style={{ fontSize: 16, color: '#3f3c3c' }}>></Text>
        </TouchableOpacity>
      </View>
    )
  }
}
